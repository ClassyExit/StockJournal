<template>
  <div class="flex min-h-screen flex-col bg-gray-900">
    <!-- Header Nav -->
    <Navbar />

    <!-- Render content here -->
    <div class="flex flex-row flex-grow w-full bg-gray-900">
      <!-- Sidebar Render -->
      <Sidebar />

      <!-- Inject content -->
      <div id="content" class="flex flex-grow flex-col">
        <!-- Global Notifications -->
        <div class="notifications mx-auto w-full p-4 pb-0">
          <div class="pb-2" v-for="alert in globalNotifications">
            <SuccessAlert v-if="alert.alertType === 'success'">{{
              alert.alertMsg
            }}</SuccessAlert>
            <DangerAlert v-if="alert.alertType === 'danger'">{{
              alert.alertMsg
            }}</DangerAlert>
            <InfoAlert v-if="alert.alertType === 'info'">{{
              alert.alertMsg
            }}</InfoAlert>
            <WarningAlert v-if="alert.alertType === 'warning'">{{
              alert.alertMsg
            }}</WarningAlert>
          </div>
        </div>
        <router-view :key="$route.path"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";

import DangerAlert from "@/components/Notifications/DangerAlert.vue";
import InfoAlert from "@/components/Notifications/InfoAlert.vue";
import SuccessAlert from "@/components/Notifications/SuccessAlert.vue";
import WarningAlert from "@/components/Notifications/WarningAlert.vue";

import { useDatabaseStore } from "@/store/database";
import { useNotificationStore } from "@/store/notifications";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const db = useDatabaseStore();
    const { deleteTrade } = db;

    const notificationStore = useNotificationStore();

    const { globalNotifications } = storeToRefs(notificationStore);

    return { deleteTrade, globalNotifications };
  },
  components: {
    Navbar,
    Sidebar,
    DangerAlert,
    InfoAlert,
    SuccessAlert,
    WarningAlert,
  },
};
</script>

<style scoped>
.nav-bar {
  margin-left: auto;

  display: flex;
  height: 5vh;
  width: 80vw;

  background-color: white;
  /* Temp */
  border: 2px solid white;
}

.nav-content {
  display: flex;
  flex-direction: row;
  justify-items: center;
}
</style>
