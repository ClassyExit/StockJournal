import { defineStore } from "pinia";
import { nanoid } from "nanoid";

export const useNotificationStore = defineStore("Notification", {
  state: () => ({
    notifications: [],
    alertTypes: ["error", "info", "success", "warning"],
  }),
  getters: {},
  persist: true,
  actions: {
    addNotification({ type, message, title }) {
      let newNotification = {};

      // Check if valid alert type
      if (this.alertTypes.includes(type.toLowerCase())) {
        newNotification = {
          alertType: type,
          alertMessage: message,
          alertId: this.generateId(),
          alertTitle: title,
        };
      } else {
        // Default the alertType to info alert
        newNotification = {
          alertType: "info",
          alertMessage: message,
          alertId: this.generateId(),
          alertTitle: title,
        };
      }

      this.notifications.push(newNotification);
    },

    generateId() {
      // Generate a unique ID
      return Math.floor(Math.random() * Math.floor(Math.random() * Date.now()));
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
