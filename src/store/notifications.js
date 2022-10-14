import { defineStore } from "pinia";

export const useNotificationStore = defineStore("Notification", {
  state: () => ({
    notifications: [],

    alertTypes: ["error", "info", "success", "warning"],
  }),
  getters: {},
  persist: true,
  actions: {
    addNotification(alertType, alertMsg) {
      let newNotification = {};

      // Check if valid alert type
      if (this.alertTypes.includes(alertType.toLowerCase())) {
        newNotification = {
          alertType: alertType,
          alertMsg: alertMsg,
          alertId: this.generateId(),
        };
      } else {
        // Default the alertType to info alert
        newNotification = {
          alertType: "info",
          alertMsg: alertMsg,
          alertId: this.generateId(),
        };
      }

      this.notifications.push(newNotification);
    },

    generateId() {
      // Generate a unique ID by using Date.now()
      return Date.now();
    },

    deleteNotification(removeId) {
      // Iterate through notification list
      for (const item in this.notifications) {
        if (this.notifications[item].alertId === removeId) {
          this.notifications.splice(item, 1);
          return;
        }
      }
    },
  },
});
