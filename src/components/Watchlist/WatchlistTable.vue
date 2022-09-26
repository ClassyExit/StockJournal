<template>
  <div class="flex flex-row w-full h-full">
    <!-- Watchlist  -->
    <div
      class="w-1/6 min-w-fit bg-bg_light mx-2 mb-2 rounded pt-1 px-1"
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
              @click="getSelectedStockInfo(item)"
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

    <!-- Stock Data -->
    <div
      class="container mx-auto mx-2 min-h-fit mb-2 bg-bg_light text-black"
      :class="{ hidden: toggleStatTable }"
    >
      <div
        v-if="
          watchlistData.length && Object.keys(selectedCompanyInfo).length > 0
        "
      >
        <div
          aria-label="intraday"
          class="flex flex-col md:grid md:grid-cols-4 px-6 text-headline p-2 text-center"
        >
          <label>{{ selectedStock.ticker }} ({{ selectedStock.name }})</label>
          <label>
            {{
              Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(selectedStock.price)
            }}</label
          >
          <label
            :class="{
              'text-win': selectedStock.dailyChange > 0,
              'text-loss': selectedStock.dailyChange < 0,
            }"
            >{{
              Intl.NumberFormat("en-US", {
                style: "percent",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(selectedStock.dailyChange / 100)
            }}</label
          >
        </div>
        <div aria-label="info" class="text-slate-300 text-sm p-1 border-b">
          {{ selectedCompanyInfo.description }}
        </div>
        <div
          aria-label="company"
          class="flex flex-col p-1 text-slate-300 border-b"
        >
          <label>Exchange: {{ selectedCompanyInfo.exchangeShortName }}</label>
          <label>Industry: {{ selectedCompanyInfo.industry }}</label>
          <label>Beta Value: {{ selectedCompanyInfo.beta }}</label>
          <label
            >Average Volume:
            {{
              Intl.NumberFormat("en-US", {
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(selectedCompanyInfo.volAvg)
            }}</label
          >
          <label
            >Market Cap:
            {{
              Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(selectedCompanyInfo.mktCap)
            }}</label
          >
        </div>
        <div aria-label="chart" class=""></div>
      </div>
      <div
        v-if="
          !watchlistData.length | (Object.keys(selectedCompanyInfo).length == 0)
        "
        aria-label="news"
        class="mt-10 p-2 bg-red-200 text-center"
      >
        Add a stock to your watchlist or select one of your current ones to
        display data about the stock!
      </div>
    </div>

    <div
      class="flex flex-col h-fit px-2"
      :class="{ hidden: togglePerformance }"
    >
      <label class="bg-bg_light text-headline p-2 text-sm"
        >Sector Performance</label
      >
      <SectorPerTemplate
        v-for="(item, index) in sectorPerformance"
        :key="item.sector"
        :sector="item.sector"
        :change="item.change_percentage"
      />
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
        title="Toggle Stock Info"
        @click="toggleStatTable = !toggleStatTable"
        class="flex p-4 hover:bg-slate-700"
      >
        <Icon icon="gridicons:stats-alt" width="30" height="30" color="white" />
      </button>
      <button
        title="Toggle Sector Performance Info"
        @click="togglePerformance = !togglePerformance"
        class="flex p-4 hover:bg-slate-700"
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
import BaseTableRows from "./BaseTableRows.vue";
import WatchlistContainer from "./WatchlistContainer.vue";
import { onBeforeMount } from "@vue/runtime-core";
import WatchlistModal from "../Modals/WatchlistModal.vue";

import DangerAlert from "@/components/Notifications/DangerAlert.vue";
import InfoAlert from "@/components/Notifications/InfoAlert.vue";
import SuccessAlert from "@/components/Notifications/SuccessAlert.vue";
import WarningAlert from "@/components/Notifications/WarningAlert.vue";

import SectorPerTemplate from "@/components/Watchlist/SectorPerTemplate.vue";

export default {
  components: {
    BaseTableRows,
    DangerAlert,
    InfoAlert,
    SuccessAlert,
    WarningAlert,
    WatchlistModal,
    WatchlistContainer,
    SectorPerTemplate,
  },
  setup() {
    const watchlistStore = useWatchlistStore();

    const { updatePrice, deleteWatch, getSelectedStockInfo } = watchlistStore;
    const {
      watchlistData,
      selectedStock,
      selectedCompanyInfo,
      sectorPerformance,
    } = storeToRefs(watchlistStore);

    const showWatchlistModal = () => {
      watchlistStore.showAddWatchlistModal = true;
    };

    const toggleWatchlist = ref(false);
    const toggleStatTable = ref(false);
    const togglePerformance = ref(false);
    const isTableEmpty = ref(); // checks to see if user selected a item to display

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
      toggleStatTable,
      selectedStock,
      selectedCompanyInfo,
      getSelectedStockInfo,
      isTableEmpty,
      sectorPerformance,
      togglePerformance,
    };
  },
};
</script>

<style></style>
