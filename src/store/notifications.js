import { defineStore } from "pinia";

export const useNotificationStore = defineStore("Notification", {
  state: () => ({
    notifications: [],
  }),
  persist: true,
  getters: {},
  actions: {},
});
