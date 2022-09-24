<template>
  <div class="container mx-auto max-h-full">
    <div class="px-4 py-4 overflow-x-auto overflow-y-auto">
      <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
        <!-- Table -->
        <table class="min-w-full">
          <!-- Table Header -->
          <thead>
            <div
              class="headers bg-gray-800 rounded-t border-b border-paragraph/25"
            >
              <tr
                class="grid grid-cols-7 gap-1 justify-items-center items-center py-4"
              >
                <th class="text-left font-semibold text-gray-300">Symbol</th>
                <th class="text-left font-semibold text-gray-300">Name</th>
                <th class="text-left font-semibold text-gray-300">Price</th>
                <th
                  data-tip="Change in price since added onto watchlist. Please note prices are only updated during active market hours. "
                  class="flex text-left font-semibold text-gray-300 tooltip tooltip-bottom items-center"
                >
                  Since Added
                  <Icon
                    icon="akar-icons:info"
                    width="18"
                    height="18"
                    class="ml-2"
                  />
                </th>
                <th class="text-left font-semibold text-gray-300">
                  52 Week Low
                </th>
                <th class="text-left font-semibold text-gray-300">
                  52 Week High
                </th>
                <th class="text-left font-semibold k">
                  <button
                    @click="showWatchlistModal()"
                    class="flex bg-success text-black py-1 px-2 rounded animate-bounce"
                  >
                    ADD WATCHLIST
                  </button>
                </th>
              </tr>
            </div>
          </thead>
          <!-- Table Body -->
          <tbody>
            <tr class="flex flex-col rounded divide-y divide-paragraph/25">
              <BaseTableRows
                v-for="(item, index) in watchlistData"
                :key="item.id"
                :ticker="item.ticker"
                :name="item.name"
                :price="item.price"
                :since_add_percent="item.since_add_percent"
                :since_add_base="item.since_add_base"
                :fiftytwo_week_low="item.fiftytwo_week_low"
                :fiftytwo_week_high="item.fiftytwo_week_high"
              >
                <router-link
                  to=""
                  class="text-red-600 px-1"
                  @click="deleteWatch(index, item.id)"
                  ><Icon
                    icon="ant-design:delete-outlined"
                    width="20"
                    height="20"
                    :inline="true"
                /></router-link>
              </BaseTableRows>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <WatchlistModal />
</template>

<script>
import { useWatchlistStore } from "@/store/watchlist";
import { useUserStore } from "@/store/user";
import { useDatabaseStore } from "@/store/database";
import { storeToRefs } from "pinia";
import BaseTableRows from "./BaseTableRows.vue";
import { onBeforeMount } from "@vue/runtime-core";
import WatchlistModal from "../Modals/WatchlistModal.vue";

import DangerAlert from "@/components/Notifications/DangerAlert.vue";
import InfoAlert from "@/components/Notifications/InfoAlert.vue";
import SuccessAlert from "@/components/Notifications/SuccessAlert.vue";
import WarningAlert from "@/components/Notifications/WarningAlert.vue";

export default {
  components: {
    BaseTableRows,
    DangerAlert,
    InfoAlert,
    SuccessAlert,
    WarningAlert,
    WatchlistModal,
  },
  setup() {
    const watchlistStore = useWatchlistStore();

    const { updatePrice, deleteWatch } = watchlistStore;
    const { watchlistData } = storeToRefs(watchlistStore);

    const showWatchlistModal = () => {
      watchlistStore.showAddWatchlistModal = true;
    };

    onBeforeMount(() => {
      const watchlistStore = useWatchlistStore();
      const databaseStore = useDatabaseStore();
      const userStore = useUserStore();

      databaseStore.fetchWatchlist(userStore.userId);

      watchlistStore.watchlistData = databaseStore.watchlist;
      updatePrice();
    });

    return {
      deleteWatch,
      watchlistData,
      showWatchlistModal,
    };
  },
};
</script>

<style></style>
