<template>
  <header
    aria-label="Navbar"
    class="flex flex-row justify-end w-full bg-bg_light"
  >
    <div class="flex flex-row items-center justify-end mr-2 py-2">
      <div aria-label="notifications" class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost rounded-btn focus:bg-gray-600">
          <div v-if="!notifications.length">
            <Icon
              icon="clarity:notification-line"
              color="white "
              width="25"
              height="25"
            />
          </div>

          <div v-else class="flex">
            <Icon
              icon="carbon:notification-filled"
              color="white"
              width="25"
              height="25"
            />
            <span
              class="absolute text-white bg-red-600 top-0 right-2 bg-white rounded-full p-1"
              >{{ notifications.length }}</span
            >
          </div>
        </label>
        <ul
          tabindex="0"
          class="menu dropdown-content flex flex-col p-2 shadow bg-base-100 rounded-box w-fit max-h-96 md:w-96 mt-4 h-fit"
        >
          <div class="space-y-2 max-w-80 overflow-auto scrollbar-hide">
            <li v-for="(alert, index) in notifications">
              <Alert
                :key="index"
                :id="alert.alertId"
                :type="alert.alertType"
                :message="alert.alertMessage"
                :title="alert.alertTitle"
              />
            </li>
          </div>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { useNotificationStore } from "@/store/notifications";

import { storeToRefs } from "pinia";

import Alert from "@/components/Notifications/Alert.vue";

export default {
  components: {
    Alert,
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

<style scoped>
/* For Webkit-based browsers (Chrome, Safari and Opera) */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
