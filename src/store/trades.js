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
    editModal: false,
    addModal: false,
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
      this.addModal = true;
    },
    hideModal() {
      this.editModal = false;
      this.addModal = false;
    },
    generateId() {
      // Generate a unique ID by using Date.now()
      return Date.now();
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

      // create new object
      const newTrade = {
        tradeId: null,
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
      // From form data

      newTrade.ticker = details.ticker;
      newTrade.qty = details.qty;
      newTrade.entry = details.entryPrice;
      newTrade.exit = details.exitPrice;

      // Logic processing
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

      // push to array
      this.tradesData.push(newTrade);

      //Add to database
      databaseStore().addTrade(userStore().userId, newTrade);

      // close modal
      this.addModal = false;
    },
  },
});
