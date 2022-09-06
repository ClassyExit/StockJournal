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
    isLoading: false,
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
          if (!response.ok) {
            tickerData = {
              error: true,
            };

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
          return response.json();
        })
        .then((data) => {
          let since_add = (data.data[0].price - data.data[0].price) / 100;
          tickerData = {
            ticker: ticker,
            price: data.data[0].price,
            name: data.data[0].name,
            add_price: data.data[0].price,
            fiftytwo_week_low: data.data[0]["52_week_low"],
            fiftytwo_week_high: data.data[0]["52_week_high"],
            since_add: since_add,
          };
        })
        .catch((err) => {
          console.log(err);

          if (tickerData.error) {
          } else {
            tickerData = {
              ticker: ticker,
              price: null,
              name: null,
              add_price: null,
              fiftytwo_high: null,
              fiftytwo_low: null,
              since_add: null,
            };
          }
        });

      return tickerData;
    },

    async addToWatchlist(ticker) {
      // ADDS A TICKER TO WATCHLIST
      let tickerData = {};

      tickerData = await this.fetchPrice(ticker);
      tickerData.id = await this.generateId();

      if (!tickerData) {
        this.addWatchlistModal = false;
        notificationStore().addGlobalNotification(
          "danger",
          "Unable to find requested stock. Please ensure the ticker is correct."
        );
        return;
      } else {
        if (tickerData.error) {
          this.addWatchlistModal = false;
          return;
        } else if ((tickerData.name || tickerData.price) == null) {
          this.addWatchlistModal = false;

          notificationStore().addGlobalNotification(
            "danger",
            `Unable to gather information about [${tickerData.ticker.toUpperCase()}]. Please ensure the ticker is correct.`
          );
          return;
        } else {
          this.addWatchlistModal = false;
        }

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

          // Recalculate the change since add
          let new_change =
            (newData.price - this.watchlistData[i].add_price) / 100;

          this.watchlistData[i].since_add = new_change;
          this.watchlistData[i].price = newData.price;
        }
      } catch (err) {
        console.error("Error getting price updates");
      }
    },
  },
});
