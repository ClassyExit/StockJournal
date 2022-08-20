import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import { useUserStore as userStore } from "./user";
import { useDatabaseStore as databaseStore } from "./database";
import { useNotificationStore as notificationStore } from "./notifications";

// https://www.stockdata.org/documentation
const apiKey = "tCN0bkSfgweXGBuCaYu7yF1OYgYm4DpwbWsctC1V";

export const useWatchlistStore = defineStore("Watchlist", {
  state: () => ({
    watchlistData: [],
    addWatchlistModal: false,
    falseData: null,
  }),
  getters: {},
  actions: {
    showAddWatchModal() {
      this.addWatchlistModal = true;
    },
    hideWatchModal() {
      this.addWatchlistModal = false;
    },
    async generateId() {
      return await nanoid(12);
    },

    async fetchPrice(ticker) {
      // FETCHES TICKER DATA
      const url = `https://api.stockdata.org/v1/data/quote?symbols=${ticker}&api_token=${apiKey}`;

      let tickerData = {};

      await fetch(url)
        .then((response) => {
          response.json();

          if (!response.ok) {
            if (response.status === 401) {
              notificationStore().addGlobalNotification(
                "danger",
                "Invalid Request"
              );
              throw new Error("Invalid Request");
            } else if (response.status === 402) {
              notificationStore().addGlobalNotification(
                "danger",
                "Unfortunately, the daily request limit has been reached due to current API capabilities. Please try again tommorow! "
              );

              throw new Error("API Limit Reached");
            } else {
              notificationStore().addGlobalNotification(
                "danger",
                "Something went wrong. Please try again"
              );
              throw new Error("Something went wrong");
            }
          }
        })
        .then((data) => {
          if (!data) {
          } else {
            tickerData = {
              ticker: ticker,
              price: data.data[0].price,
              name: data.data[0].name,
            };
          }
        })
        .catch((err) => {
          (tickerData = {
            ticker: ticker,
            price: null,
            name: null,
          }),
            console.log(err);
        });

      return tickerData;
    },

    async addToWatchlist(ticker) {
      // ADDS A TICKER TO WATCHLIST
      let tickerData = {};

      try {
        tickerData = await this.fetchPrice(ticker);
        tickerData.id = await this.generateId();
      } catch (error) {
        console.log("CAUGHT ERROR");
      }

      if (!tickerData) {
        this.addWatchlistModal = false;
        return;
      } else {
        if ((tickerData.name || tickerData.price) == null) {
          this.addWatchlistModal = false;
          return;
        }
        // Push to current store
        this.watchlistData.push(tickerData);

        // Add to db
        databaseStore().addWatch(userStore().userId, tickerData);

        this.addWatchlistModal = false;
      }
    },

    async deleteWatch(index) {
      //DELETE A WATCHLIST ITEM
      databaseStore().deleteWatch(
        userStore().userId,
        this.watchlistData[index].id
      );

      this.watchlistData.splice(index, 1);
    },

    async updatePrice() {
      // UPDATES THE PRICE FOR EACH WATCHLIST ITEM

      if (!this.watchlistData) return;

      // If market is closed, don't update prices
      // Market hours UTC: [10,20]
      const timeUTC = new Date().getUTCHours();
      if (timeUTC >= 20 || timeUTC <= 10) return;

      try {
        for (let i = 0; i < this.watchlistData.length; i++) {
          let newData = await this.fetchPrice(this.watchlistData[i].ticker);

          if (newData.price == null) return;

          newData.id = this.watchlistData[i].id;

          this.watchlistData[i].price = newData.price;
        }
      } catch (err) {
        console.error("Error getting price updates");
      }
    },
  },
});
