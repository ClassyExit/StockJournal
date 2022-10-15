import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import { useUserStore as userStore } from "./user";
import { useDatabaseStore as databaseStore } from "./database";

import { sendNotification } from "@/components/Notifications/notifications";

// https://www.stockdata.org/documentation
const apiKey = "tCN0bkSfgweXGBuCaYu7yF1OYgYm4DpwbWsctC1V";

export const useWatchlistStore = defineStore("Watchlist", {
  state: () => ({
    watchlistData: [],
    showAddWatchlistModal: false,
    watchlistError: null,
    newData: null,
    selectedStock: {},
    selectedCompanyInfo: {},
    sectorPerformance: [],
  }),
  persist: true,
  getters: {},
  actions: {
    showWatchlistModal() {
      this.showAddWatchlistModal = true;
    },
    hideWatchModal() {
      this.showAddWatchlistModal = false;
      this.watchlistError = null;
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
              code: response.status,
            };

            if (response.status === 401) {
              sendNotification({
                type: "error",
                heading: "Invalid Request",
                message: "Unable to process request",
              });

              throw new Error("Invalid Request");
            } else if (response.status === 402) {
              this.hideWatchModal();

              sendNotification({
                type: "danger",
                heading: "API Limit Reached",
                message:
                  "Unfortunately, the daily request limit has been reached due to current API limitations and no more requests can be made. Please try again tommorow!",
              });

              throw new Error("API Limit Reached");
            } else if (response.status === 429) {
              sendNotification({
                type: "danger",
                heading: "Whoa There!",
                message: "Too many requests in the past 60 seconds!",
              });

              throw new Error("Too Many Requests");
            } else {
              sendNotification({
                type: "danger",
                heading: "Somethings not right",
                message:
                  "Uh-oh, something didn't work. Please try again and if the problem persists, please contact us.",
              });

              throw new Error("Something went wrong");
            }
            return tickerData;
          }
          return response.json();
        })
        .then((data) => {
          if (!tickerData.error) {
            tickerData = {
              ticker: ticker,
              price: data.data[0].price,
              name: data.data[0].name,
              add_price: data.data[0].price,
              fiftytwo_week_low: data.data[0]["52_week_low"],
              fiftytwo_week_high: data.data[0]["52_week_high"],
              dailyChange: data.data[0]["day_change"],
              market_cap: data.data[0]["market_cap"],
            };
          }
        })
        .catch((err) => {
          if (tickerData.error) {
          } else {
            tickerData = {
              ticker: ticker,
              price: null,
              name: null,
              dailyChange: null,
              market_cap: null,
            };
          }
        });

      return tickerData;
    },

    async addToWatchlist(ticker) {
      // ADDS A TICKER TO WATCHLIST

      if (!ticker) {
        this.watchlistError = "Please enter a stock to search.";
        return;
      }

      let tickerData = {};

      tickerData = await this.fetchPrice(ticker);
      tickerData.id = await this.generateId();

      if (tickerData.code === 402) return; // API limit reached

      if (!tickerData.price || !tickerData.ticker || tickerData.error) {
        this.watchlistError =
          "Unable to find requested stock. Please ensure the ticker is correct.";
        return;
      } else {
        // Proceed to add to watchlist
        this.watchlistData.push(tickerData);

        // Add to db
        databaseStore().addWatch(userStore().userId, tickerData);

        this.hideWatchModal();
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
      if (timeUTC >= 20 || timeUTC <= 10) {
        return;
      }

      try {
        for (let i = 0; i < this.watchlistData.length; i++) {
          let newData = await this.fetchPrice(this.watchlistData[i].ticker);

          if (newData.price == null) return;

          let new_change_base = (
            newData.price - this.watchlistData[i].add_price
          ).toFixed(2);

          let new_change_percent = (
            (new_change_base / this.watchlistData[i].add_price) *
            100
          ).toFixed(2);

          this.watchlistData[i].since_add_base = new_change_base;
          this.watchlistData[i].since_add_percent = new_change_percent;
          this.watchlistData[i].price = newData.price;
          this.watchlistData[i].dailyChange = newData.dailyChange;
          this.watchlistData[i].market_cap = newData.market_cap;

          databaseStore().updateWatch(
            userStore().userId,
            this.watchlistData[i]
          );
        }
      } catch (err) {
        console.error(err);
      }
    },

    async getSectorPerformance() {
      const apiKeyFinage = "API_KEYb1WHDPIT7YKOE2MPKOXNEGYIIPHQ8CHY";
      const url = `https://api.finage.co.uk/market-information/us/sector-performance?apikey=${apiKeyFinage}`;

      await fetch(url)
        .then((res) => {
          if (!res.ok) {
            // error
          }

          return res.json();
        })
        .then((data) => {
          // convert the string into float
          for (let i = 0; i < data.length; i++) {
            let stringToNumber = parseFloat(data[i].change_percentage);
            data[i].change_percentage = stringToNumber;
          }

          this.sectorPerformance = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
