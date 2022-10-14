<template>
  <div class="flex flex-row flex-1 max-h-5/6">
    <div class="flex flex-col flex-1">
      <div
        class="flex flex-wrap items-center justify-center p-4"
        :class="togglePerformance ? 'hidden' : ''"
      >
        <SectorPerTemplate
          v-for="(item, index) in sectorPerformance"
          :key="item.sector"
          :sector="item.sector"
          :change="item.change_percentage"
        />
      </div>

      <div
        class="flex flex-col items-center w-full h-full p-4"
        :class="toggleWatchlist ? 'hidden' : ''"
      >
        <div class="w-full bg-bg_light mx-2 mb-2 pt-1">
          <!-- Watchlist options -->
          <div class="flex flex-row-reverse pr-2">
            <div
              title="Add Symbol"
              aria-label="addWatchlist"
              class="hover:bg-background rounded border border-gray-600"
              @click="showWatchlistModal()"
            >
              <Icon
                icon="ant-design:plus-outlined"
                color="white"
                width="30"
                height="30"
              />
            </div>
          </div>
          <!-- Watchlist table -->
          <table class="w-full">
            <thead class="">
              <tr class="grid grid-cols-7 py-2 text-center">
                <th class="">Symbol</th>
                <th class="">Price</th>
                <th class="">% Change</th>
                <th class="">52 Week Low</th>
                <th class="">52 Week High</th>
                <th class="">Market Cap</th>
                <th class="">Actions</th>
              </tr>
            </thead>

            <tbody class="border-y-2 border-paragraph/25">
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
                  :fiftytwo_week_high="item.fiftytwo_week_high"
                  :fiftytwo_week_low="item.fiftytwo_week_low"
                  :market_cap="item.market_cap"
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
      </div>
    </div>

    <div
      aria-label="watchlistSidebar"
      class="sticky relative flex flex-col bg-bg_light justify-start w-16"
    >
      <button
        title="Watchlist"
        @click="toggleWatchlist = !toggleWatchlist"
        class="flex w-full justify-center py-2 hover:bg-slate-700"
      >
        <Icon icon="bi:card-list" color="white" width="30" height="30" />
      </button>
      <button
        title="Sector Performance "
        @click="togglePerformance = !togglePerformance"
        class="flex w-full justify-center py-2 hover:bg-slate-700"
      >
        <Icon
          icon="mingcute:performance-fill"
          color="white"
          width="30"
          height="30"
        />
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
import WatchlistContainer from "./WatchlistContainer.vue";
import { onBeforeMount } from "@vue/runtime-core";
import WatchlistModal from "../Modals/WatchlistModal.vue";

import SectorPerTemplate from "@/components/Watchlist/SectorPerformanceTemplate.vue";

export default {
  components: {
    WatchlistModal,
    WatchlistContainer,
    SectorPerTemplate,
  },
  setup() {
    const watchlistStore = useWatchlistStore();

    const { updatePrice, deleteWatch } = watchlistStore;
    const { watchlistData, sectorPerformance } = storeToRefs(watchlistStore);

    const showWatchlistModal = () => {
      watchlistStore.showAddWatchlistModal = true;
    };

    const toggleWatchlist = ref(false);
    const togglePerformance = ref(true);
    const isTableEmpty = ref(); // checks to see if user selected a item to display

    onBeforeMount(() => {
      const watchlistStore = useWatchlistStore();
      const databaseStore = useDatabaseStore();
      const userStore = useUserStore();

      databaseStore.fetchWatchlist(userStore.userId);

      useWatchlistStore().getSectorPerformance();
      watchlistStore.watchlistData = databaseStore.watchlist;
      updatePrice();
    });

    return {
      deleteWatch,
      watchlistData,
      showWatchlistModal,
      toggleWatchlist,
      isTableEmpty,
      sectorPerformance,
      togglePerformance,
    };
  },
};
</script>

<style></style>
