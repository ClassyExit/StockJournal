<template>
  <header class="flex-row w-full bg-bg_light">
    <ul class="flex flex-row p-2 justify-end space-x-4">
      <!-- Notifications -->
      <div class="dropdown dropdown-content dropdown-end">
        <label
          tabindex="0"
          class="btn btn-ghost rounded-btn"
          :class="notifications.length ? 'animate-pulse' : ''"
        >
          <Icon
            v-if="!notifications.length"
            icon="clarity:notification-line"
            color="white "
            width="30"
            height="30"
          />

          <Icon
            v-else
            icon="clarity:notification-outline-badged"
            color="red"
            width="30"
            height="30"
          />
        </label>
        <ul
          tabindex="0"
          class="menu dropdown-content flex flex-col p-2 shadow bg-base-100 rounded-box w-fit max-h-96 md:w-96 mt-4"
        >
          <div class="space-y-2 max-w-80 overflow-auto">
            <li v-for="(alert, index) in notifications">
              <SuccessAlert
                :key="index"
                :id="alert.alertId"
                v-if="alert.alertType === 'success'"
                >{{ alert.alertMsg }}</SuccessAlert
              >
              <DangerAlert
                :key="index"
                :id="alert.alertId"
                v-if="alert.alertType === 'danger'"
                >{{ alert.alertMsg }}</DangerAlert
              >
              <InfoAlert
                :key="index"
                :id="alert.alertId"
                v-if="alert.alertType === 'info'"
                >{{ alert.alertMsg }}</InfoAlert
              >
              <WarningAlert
                :key="index"
                :id="alert.alertId"
                v-if="alert.alertType === 'warning'"
                >{{ alert.alertMsg }}</WarningAlert
              >
            </li>
          </div>
        </ul>
      </div>
    </ul>
  </header>
</template>

<script>
import { useNotificationStore } from "@/store/notifications";

import DangerAlert from "@/components/Notifications/DangerAlert.vue";
import InfoAlert from "@/components/Notifications/InfoAlert.vue";
import SuccessAlert from "@/components/Notifications/SuccessAlert.vue";
import WarningAlert from "@/components/Notifications/WarningAlert.vue";
import { storeToRefs } from "pinia";

export default {
  components: {
    DangerAlert,
    InfoAlert,
    SuccessAlert,
    WarningAlert,
  },
  setup() {
    const notificationStore = useNotificationStore();

    // Reactively watch notifications
    const { notifications } = storeToRefs(notificationStore);

    return {
      notifications,
    };
  },
};
</script>

<style></style>
