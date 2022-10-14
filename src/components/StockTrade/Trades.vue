<template>
  <div class="flex flex-col h-full pt-4">
    <!-- Stats -->
    <div
      class="flex flex-col items-center md:flex-row gap-2 md:gap-4 md:w-full px-4"
    >
      <StatsContainer class="order-1"
        ><template #title>OPEN</template>
        <template #stat
          ><span class="text-blue-700">{{ stats.open }}</span></template
        ></StatsContainer
      >
      <StatsContainer class="order-2"
        ><template #title>WINS</template>
        <template #stat
          ><span class="text-win">{{ stats.wins }}</span></template
        ></StatsContainer
      >
      <StatsContainer class="order-3"
        ><template #title>LOSSES</template>
        <template #stat
          ><span class="text-loss">{{ stats.losses }}</span></template
        ></StatsContainer
      >
      <StatsContainer class="order-3"
        ><template #title>AVG WIN</template>
        <template #stat>
          <span class="text-win">{{
            Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(stats.avgWin)
          }}</span></template
        ></StatsContainer
      >
      <StatsContainer class="order-4"
        ><template #title>AVG LOSS</template>
        <template #stat
          ><span class="text-loss">{{
            Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(stats.avgLoss)
          }}</span></template
        ></StatsContainer
      >
      <StatsContainer class="md:col-span-2 order-last"
        ><template #title>PnL</template>
        <template #stat
          ><span :class="stats.PnL >= 0 ? 'text-win' : 'text-loss'">{{
            Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(stats.PnL)
          }}</span>
        </template></StatsContainer
      >
    </div>
    <!-- Trades -->

    <div
      class="flex flex-row text-sm md:text-lg px-4 py-4 overflow-x-auto overflow-y-auto w-full max-h-screen"
    >
      <div
        class="inline-block w-3/4 border-2 border-bg_light rounded-lg overflow-hidden"
      >
        <!-- Table -->
        <table class="w-full overflow-auto">
          <!-- Table Header -->
          <thead class="w-full">
            <div class="headers bg-bg_light rounded">
              <tr
                class="grid grid-cols-9 justify-items-center items-center py-2 px-1"
              >
                <th class="text-left font-semibold text-gray-300">
                  Date Added
                </th>
                <th class="text-left font-semibold text-gray-300">Symbol</th>
                <th class="text-left font-semibold text-gray-300">Status</th>
                <th class="text-left font-semibold text-gray-300">Qty</th>
                <th class="text-left font-semibold text-gray-300">Entry</th>

                <th class="text-left font-semibold text-gray-300">Exit</th>

                <th class="text-left font-semibold text-gray-300">Return</th>
                <th class="text-left font-semibold text-gray-300">Return %</th>
                <th class="text-left font-semibold">
                  <button
                    @click="showTradeModal()"
                    class="flex bg-success text-black py-1 px-1 rounded"
                    :class="!tradesData.length ? 'animate-bounce' : ''"
                  >
                    ADD TRADE
                  </button>
                </th>
              </tr>
            </div>
          </thead>
          <!-- Table Body -->
          <tbody class="over-y-scroll h-2/3">
            <tr>
              <BaseTableRows
                class="md:block odd:bg-background"
                @click="getTradeDetails(index, trade.id)"
                v-for="(trade, index) in tradesData"
                :key="trade.id"
                :date="trade.date"
                :ticker="trade.ticker"
                :status="trade.status"
                :qty="trade.qty"
                :entry="trade.entry"
                :exit="trade.exit"
                :returnBase="trade.returnBase"
                :returnPercent="trade.returnPercent"
              >
                <router-link
                  to=""
                  class="text-blue-600 px-2 modal-button"
                  @click="getTradeDetails(index, trade.id)"
                  for="editModal"
                  ><Icon
                    icon="akar-icons:edit"
                    width="20"
                    height="20"
                    :inline="true"
                /></router-link>

                <!-- Delete Button -->
                <router-link
                  to=""
                  class="text-red-600 px-1"
                  @click="deleteTrade(index, trade.id)"
                  @click.stop
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

  <!-- Add Trade -->
  <TradeModal />
  <!-- Edit Trade -->
  <EditTradeModal />
</template>

<script>
import BaseTableRows from "./BaseTableRows.vue";
import StatsContainer from "./StatsContainer.vue";

import { useTradesStore } from "@/store/trades.js";
import { useDatabaseStore } from "@/store/database";
import { useUserStore } from "@/store/user";
import { onMounted, watchEffect } from "vue";
import { storeToRefs } from "pinia";
import EditTradeModal from "../Modals/EditTradeModal.vue";
import TradeModal from "@/components/Modals/TradeModal.vue";

export default {
  components: {
    BaseTableRows,
    StatsContainer,
    EditTradeModal,
    TradeModal,
  },
  setup() {
    const TradesStore = useTradesStore();

    const { editModal, tradesData, stats } = storeToRefs(TradesStore);

    const { editTrade, deleteTrade, hideModal, getTradeDetails } = TradesStore;
    const rows = tradesData;

    const showTradeModal = () => {
      TradesStore.showAddTradeModal = true;
    };

    // Watch for user adding trades then recalc stats
    watchEffect((tradesData) => TradesStore.getStats());

    //Calculate Stats on page load
    TradesStore.getStats();

    onMounted(() => {
      const TradesStore = useTradesStore();
      const DatabaseStore = useDatabaseStore();
      const UserStore = useUserStore();

      DatabaseStore.fetchTradeData(UserStore.userId);

      TradesStore.tradesData = DatabaseStore.trades;
    });

    return {
      tradesData,
      rows,
      deleteTrade,
      hideModal,
      editModal,
      getTradeDetails,
      editTrade,
      stats,
      showTradeModal,
    };
  },
};
</script>

<style></style>
