<template>
  <div class="flex flex-row w-full h-full">
    <!-- Watchlist  -->
    <div
      class="w-1/4 min-w-fit bg-bg_light mx-2 mb-2 rounded pt-1 px-1"
      :class="{ hidden: toggleWatchlist }"
    >
      <!-- Watchlist options -->
      <div class="flex flex-row-reverse">
        <div
          title="Add Symbol"
          aria-label="addWatchlist"
          class="hover:bg-background rounded"
          @click="showWatchlistModal()"
        >
          <Icon
            icon="ant-design:plus-outlined"
            color="gray"
            width="30"
            height="30"
          />
        </div>
      </div>
      <!-- Watchlist table -->
      <table class="w-full">
        <thead class="">
          <tr
            class="grid grid-cols-4 p-2 text-center border-b border-paragraph/25"
          >
            <th class="">Symbol</th>
            <th class="">Price</th>
            <th class="">% Change</th>
            <th class=""></th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-if="!watchlistData.length"
            class="flex items-center justify-center"
          >
            <p class="flex flex-row py-32">
              Click the
              <Icon
                class="mx-1"
                icon="ant-design:plus-outlined"
                color="gray"
                width="20"
                height="20"
                :inline="true"
              />
              to add a symbol
            </p>
          </tr>
          <tr class="divide-y divide-paragraph/25">
            <WatchlistContainer
              v-for="(item, index) in watchlistData"
              :key="item.id"
              :ticker="item.ticker"
              :name="item.name"
              :price="item.price"
              :dailyChange="item.dailyChange"
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
            </WatchlistContainer>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Old Watchlist -->
    <div class="container mx-auto max-h-full">
      <div class="px-4 py-4 overflow-x-auto overflow-y-auto">
        <div
          class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
        >
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
                      class="flex bg-success text-black py-1 px-2 rounded"
                      :class="!watchlistData.length ? 'animate-bounce' : ''"
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

    <!-- Sidebar for Watchlist -->
    <div dev-note="use to hold sidebar watchlist" class="flex-1"></div>
    <div
      aria-label="watchlistSidebar"
      class="relative inset-y-0 right-0 flex flex-col h-full bg-bg_light w-1/16 py-2 items-center"
    >
      <button
        title="Toggle Watchlist"
        @click="toggleWatchlist = !toggleWatchlist"
        class="flex p-4 hover:bg-slate-700"
      >
        <Icon icon="bi:card-list" color="white" width="30" height="30" />
      </button>
      <button
        title="Hide Watchlist"
        @click=""
        class="px-2 py-4 hover:bg-slate-700"
      >
        Icon 2
      </button>
    </div>
  </div>

  <!-- Add watchlist -->
  <WatchlistModal />
</template>

<script>
import { ref } from "vue";
import { useWatchlistStore } from "@/store/watchlist";
import { useUserStore } from "@/store/user";
import { useDatabaseStore } from "@/store/database";
import { storeToRefs } from "pinia";
import BaseTableRows from "./BaseTableRows.vue";
import WatchlistContainer from "./WatchlistContainer.vue";
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
    WatchlistContainer,
  },
  setup() {
    const watchlistStore = useWatchlistStore();

    const { updatePrice, deleteWatch } = watchlistStore;
    const { watchlistData } = storeToRefs(watchlistStore);

    const showWatchlistModal = () => {
      watchlistStore.showAddWatchlistModal = true;
    };

    const toggleWatchlist = ref(false);

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
      toggleWatchlist,
    };
  },
};
</script>

<style></style>
