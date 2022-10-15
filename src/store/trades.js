// Stock trades store
import { defineStore } from "pinia";

import { useUserStore as userStore } from "./user";
import { useDatabaseStore as databaseStore } from "./database";

export const useTradesStore = defineStore("Trades", {
  state: () => ({
    tradesData: [],
    editTradeData: {
      index: null,
      ticker: null,
      qty: null,
      entry: null,
      exit: null,
    },
    stats: {},
    editModal: false,
    showAddTradeModal: false,
  }),
  getters: {
    showAddModalState: (state) => {
      return state.openAddModal;
    },
    showEditModalState: (state) => {
      return state.openEditModal;
    },
  },
  persist: true,
  actions: {
    // Modal Actions
    showEditModal() {
      this.editModal = true;
    },
    showAddModal() {
      this.showAddTradeModal = true;
    },
    hideModal() {
      this.editModal = false;
      this.showAddTradeModal = false;
    },
    generateId() {
      // Generate a unique ID by using Date.now()
      return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
    },
    deleteTrade(index) {
      // Delete from db
      databaseStore().deleteTrade(
        userStore().userId,
        this.tradesData[index].tradeId
      );
      // Delete from store array
      this.tradesData.splice(index, 1);
    },
    getTradeDetails(index) {
      this.editModal = true;
      // Update state
      this.editTradeData.index = index;
      this.editTradeData.ticker = this.tradesData[index].ticker;
      this.editTradeData.qty = this.tradesData[index].qty;
      this.editTradeData.entry = this.tradesData[index].entry;
      this.editTradeData.exit = this.tradesData[index].exit;
    },
    editTrade() {
      const index = this.editTradeData.index;
      const newDetails = this.editTradeData;

      //UPDATE DETAILS
      this.tradesData[index].ticker = newDetails.ticker;
      this.tradesData[index].qty = newDetails.qty;
      this.tradesData[index].entry = newDetails.entry;
      this.tradesData[index].exit = newDetails.exit;

      if (!this.tradesData[index].date) {
        this.tradesData[index].date = new Date().toLocaleDateString();
      }

      // Recalculate computed values
      this.tradesData[index].entryTotal = newDetails.entry * newDetails.qty;

      if (newDetails.exit) {
        this.tradesData[index].exitTotal = newDetails.qty * newDetails.exit;
        this.tradesData[index].returnBase =
          this.tradesData[index].exitTotal - this.tradesData[index].entryTotal;

        this.tradesData[index].returnPercent =
          (this.tradesData[index].returnBase /
            this.tradesData[index].entryTotal) *
          100;

        if (this.tradesData[index].returnBase > 0) {
          this.tradesData[index].status = "WIN";
        } else if (this.tradesData[index].returnBase < 0) {
          this.tradesData[index].status = "LOSS";
        } else {
          this.tradesData[index].status = "EVEN";
        }
      } else {
        this.tradesData[index].status = "OPEN";
        this.tradesData[index].exitTotal = null;
        this.tradesData[index].returnBase = null;
        this.tradesData[index].returnPercent = null;
      }

      //Update in database
      databaseStore().updateTrade(userStore().userId, this.tradesData[index]);

      this.editModal = false;
    },
    addTrade(details) {
      this.addModal = true;

      // create new trade
      const newTrade = {
        tradeId: null,
        date: new Date().toLocaleDateString(),
        ticker: null,
        status: null,
        qty: null,
        entry: null,
        exit: null,
        entryTotal: null,
        exitTotal: null,
        returnBase: null,
        returnPercent: null,
      };

      // UPDATE VARIABLES
      newTrade.ticker = details.ticker;
      newTrade.qty = details.qty;
      newTrade.entry = details.entryPrice;
      newTrade.exit = details.exitPrice;

      // Process calculations
      newTrade.tradeId = this.generateId();
      newTrade.entryTotal = newTrade.qty * newTrade.entry;

      // If exit price exists
      if (newTrade.exit) {
        newTrade.exitTotal = newTrade.qty * newTrade.exit;
        newTrade.returnBase = newTrade.exitTotal - newTrade.entryTotal;
        newTrade.returnPercent =
          (newTrade.returnBase / newTrade.entryTotal) * 100;

        if (newTrade.returnBase > 0) {
          newTrade.status = "WIN";
        } else if (newTrade.returnBase < 0) {
          newTrade.status = "LOSS";
        } else {
          newTrade.status = "EVEN";
        }
      } else {
        newTrade.status = "OPEN";
      }

      // push to trades array
      this.tradesData.push(newTrade);

      //Add to database
      databaseStore().addTrade(userStore().userId, newTrade);

      // close modal
      this.showAddTradeModal = false;
    },

    getStats() {
      let wins = 0;
      let losses = 0;
      let open = 0;
      let totalLossAmount = 0;
      let totalWinAmount = 0;
      let avgLoss = 0;
      let avgWin = 0;

      if (this.tradesData.length == 0) {
        this.stats = {
          wins: 0,
          losses: 0,
          totalLossAmount: 0,
          totalWinAmount: 0,
          PnL: 0,
          avgLoss: 0,
          avgWin: 0,
          open: 0,
        };
        return;
      }

      for (let i = 0; i < this.tradesData.length; i++) {
        if (this.tradesData[i].status === "WIN") {
          wins += 1;
          totalWinAmount += this.tradesData[i].returnBase;
        } else if (this.tradesData[i].status === "LOSS") {
          losses += 1;
          totalLossAmount += this.tradesData[i].returnBase;
        } else if (this.tradesData[i].status === "OPEN") {
          open += 1;
        }
      }

      avgLoss = totalLossAmount / losses;
      avgWin = totalWinAmount / wins;

      if (!avgLoss) avgLoss = 0;
      if (!avgWin) avgWin = 0;

      this.stats = {
        wins: wins,
        losses: losses,
        totalLossAmount: totalLossAmount,
        totalWinAmount: totalWinAmount,
        PnL: totalWinAmount - totalLossAmount * -1,
        avgLoss: avgLoss,
        avgWin: avgWin,
        open: open,
      };
    },
  },
});
