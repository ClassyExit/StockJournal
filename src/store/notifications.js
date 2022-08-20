import { defineStore } from "pinia";

export const useNotificationStore = defineStore("Notification", {
  state: () => ({
    notifications: [],
    globalNotifications: [],
    alertTypes: ["danger", "info", "success", "warning"],
  }),
  getters: {},
  actions: {
    addNotification(alertType, alertMsg) {
      let newNotification = {};

      // Check if valid alert type
      if (this.alertTypes.includes(alertType.toLowerCase())) {
        newNotification = { alertType: alertType, alertMsg: alertMsg };
      } else {
        // Default the alertType to info alert
        newNotification = { alertType: "info", alertMsg: alertMsg };
      }

      this.notifications.push(newNotification);
    },

    addGlobalNotification(alertType, alertMsg) {
      let newGlobalNotification = {};

      // Check if valid alert type
      if (this.alertTypes.includes(alertType.toLowerCase())) {
        newGlobalNotification = { alertType: alertType, alertMsg: alertMsg };
      } else {
        // Default the alertType to info alert
        newGlobalNotification = { alertType: "info", alertMsg: alertMsg };
      }

      this.globalNotifications.push(newGlobalNotification);
    },
  },
});
