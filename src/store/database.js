import {
  collection,
  setDoc,
  doc,
  query,
  getDocs,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/firebase/index";

import { defineStore } from "pinia";

export const useDatabaseStore = defineStore("db", {
  state: () => ({
    trades: [],
    watchlist: [],
  }),
  persist: true,
  getters: {},
  actions: {
    async addTrade(userId, data) {
      // ADDS TRADES INTO Database
      /* DATA FORMAT:
        tradeId: 123dd,
        ticker: dadda,
        status: OPEN,
        qty: 10,
        entry: 10.00
        exit: 12.00
        entryTotal: 100.00
        exitTotal: 120.00
        returnBase: 20.00
        returnPercent: 20.00
      */

      // No data passed in
      if (!data) {
        return console.error("Error: No data");
      }

      try {
        if (data.length > 0) {
          for (let i = 0; i < data.length; i++) {
            if (!data[i].tradeId) {
              return console.error("Error: No tradeId");
            }
            const tradeRef = doc(
              db,
              `${userId}`,
              "TradesList",
              "Trades",
              `${data[i].tradeId}`
            );

            const tradeSnap = await getDoc(tradeRef);

            // Check if doc exists already
            if (tradeSnap.exists()) {
            } else {
              await setDoc(tradeRef, data[i]);
              // console.log(`Document written with ID:${tradeRef.id}`);
            }
          }
        } else {
          if (!data.tradeId) {
            return console.error("Error: No tradeId");
          }
          const tradeRef = doc(
            db,
            `${userId}`,
            "TradesList",
            "Trades",
            `${data.tradeId}`
          );

          const tradeSnap = await getDoc(tradeRef);

          // Check if doc exists already
          if (tradeSnap.exists()) {
            console.log("Doc exists - pass");
          } else {
            await setDoc(tradeRef, data);
            // console.log(`Document written with ID:${tradeRef.id}`);
          }
        }
      } catch (e) {
        console.log(`Error adding trade: ${e}`);
      }
    },

    async fetchTradeData(userId) {
      // RETRIEVE USERS TRADES
      if (!userId) {
        return console.error("Error: No user");
      }
      // If store already has user data
      if (this.trades.length > 0) return;

      const q = query(collection(db, `${userId}`, "TradesList", "Trades"));

      const querySnapshot = await getDocs(q);

      // Push data to state -- access there
      querySnapshot.forEach((doc) => {
        this.trades.push(doc.data());
      });
    },

    async updateTrade(userId, newData) {
      // UPDATE A TRADE/TRADES

      if (!newData) return;

      try {
        if (newData.length > 0) {
          for (let i = 0; i < newData.length; i++) {
            const tradeRef = doc(
              db,
              `${userId}`,
              "TradesList",
              "Trades",
              `${newData[i].tradeId}`
            );

            // Update doc values
            await updateDoc(tradeRef, newData[i]);
          }
        } else {
          const tradeRef = doc(
            db,
            `${userId}`,
            "TradesList",
            "Trades",
            `${newData.tradeId}`
          );

          // Update doc values
          await updateDoc(tradeRef, newData);
        }
      } catch (e) {
        console.log(`Error updating trades: ${e}`);
      }
    },

    async deleteTrade(userId, tradeId) {
      // DELETE USER TRADE/TRADES
      if (!tradeId) return;

      try {
        const tradeRef = doc(
          db,
          `${userId}`,
          "TradesList",
          "Trades",
          `${tradeId}`
        );

        const tradeSnap = await getDoc(tradeRef);

        if (!tradeSnap.exists()) {
          // If the tradeID doesnt exist, exit out
          console.error("Error: can't find trade.");
        } else {
          // Delete trade doc
          await deleteDoc(tradeRef);
        }
      } catch (e) {
        console.log(`Error deleting trades: ${e}`);
      }
    },

    async addWatch(userId, data) {
      // ADD WATCHLIST ITEMS INTO DATABASE
      /* Data format:
        Id: 12e1e
        ticker: wadw
        name: oad inc
        price: 10.22
      */
      if (!data) return;

      try {
        if (!data.id) {
          return console.error("Error: No tradeId");
        }
        const tradeRef = doc(
          db,
          `${userId}`,
          "Watchlist",
          "Items",
          `${data.id}`
        );

        const tradeSnap = await getDoc(tradeRef);

        // Check if doc exists already
        if (tradeSnap.exists()) {
        } else {
          await setDoc(tradeRef, data);
        }
      } catch (e) {
        console.error("Error adding watchlist item");
      }
    },
    async deleteWatch(userId, watchId) {
      // DELETE A WATCHLIST ITEM
      if (!watchId) return;

      try {
        const tradeRef = doc(
          db,
          `${userId}`,
          "Watchlist",
          "Items",
          `${watchId}`
        );

        const tradeSnap = await getDoc(tradeRef);

        if (!tradeSnap.exists()) {
          // If the tradeID doesnt exist, exit out
          console.error("Error: can't find trade.");
        } else {
          // Delete trade doc
          await deleteDoc(tradeRef);
        }
      } catch (e) {
        console.error("CAN'T FIND ITEM");
      }
    },

    async fetchWatchlist(userId) {
      // RETRIEVE WATCHLIST DATA

      if (!userId) {
        return console.error("Error: No user");
      }
      // If store already has user data
      if (this.watchlist.length > 0) return;

      const q = query(collection(db, `${userId}`, "Watchlist", "Items"));

      const querySnapshot = await getDocs(q);

      // Push data to state -- access there
      querySnapshot.forEach((doc) => {
        this.watchlist.push(doc.data());
      });
    },
  },

  async updateWatch(userId, newData) {
    if (!newData) return;
    

    try {
      const watchlistRef = doc(
        db,
        `${userId}`,
        "Watchlist",
        "Items",
        `${newData.id}`
      );

      // Update doc values
      await updateDoc(watchlistRef, { price: newData.price });
    } catch (error) {
      console.error("Failed updated watchlist");
    }
  },
});
