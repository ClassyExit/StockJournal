<template>
  <header class="w-full bg-bg_light">
    <ul class="flex flex-row p-2 justify-end space-x-4">
      <!-- Notifications -->
      <div class="dropdown dropdown-content dropdown-end">
        <label tabindex="0" class="btn btn-ghost rounded-btn">
          <Icon
            v-if="!notifications.length"
            icon="clarity:notification-line"
            color="white"
            width="20"
            height="20"
          />
          <Icon
            v-else
            icon="clarity:notification-outline-badged"
            color="red"
            width="20"
            height="20"
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

      <!-- Stock trade -->
      <router-link
        v-show="$route.name === 'Dashboard'"
        to=""
        class="flex btn-success items-center justify-center rounded w-32 min-w-32 max-w-xs font-semibold"
        data-toggle="modal"
        @click="showTradeModal()"
        ><span class="pl-2 md:block">Add Trade</span></router-link
      >

      <!-- Watchlist -->
      <router-link
        v-show="$route.name === 'Watchlist'"
        to=""
        class="flex btn-success items-center justify-center rounded w-32 min-w-32 max-w-xs font-semibold"
        data-toggle="modal"
        @click="showWatchlistModal()"
        ><span class="pl-2 md:block">Add Watchlist</span></router-link
      >
    </ul>
  </header>

  <!-- Trade Add Modal -->
  <TradeModal />
  <!-- Add Watchlist Modal -->
  <WatchlistModal />
</template>

<script>
import { useNotificationStore } from "@/store/notifications";
import { useTradesStore } from "@/store/trades";
import { useWatchlistStore } from "@/store/watchlist";

import TradeModal from "@/components/Modals/TradeModal.vue";
import WatchlistModal from "@/components/Modals/WatchlistModal.vue";

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
    TradeModal,
    WatchlistModal,
  },
  setup() {
    const notificationStore = useNotificationStore();
    const tradeStore = useTradesStore();
    const watchlistStore = useWatchlistStore();

    const showTradeModal = () => {
      tradeStore.showAddTradeModal = true;
    };

    const showWatchlistModal = () => {
      watchlistStore.showAddWatchlistModal = true;
    };

    // Reactively watch notifications
    const { notifications } = storeToRefs(notificationStore);

    return {
      showTradeModal,
      showWatchlistModal,
      notifications,
    };
  },
};
</script>

<style></style>
