<template>
  <div class="container flex flex-col mx-auto w-full">
    <div
      class="stats-container flex flex-row space-x-6 justify-around mx-auto w-3/4"
    >
      <StatsContainer
        ><template #title>WINS</template>
        <template #stat
          ><span class="text-win">{{ stats.wins }}</span></template
        ></StatsContainer
      >
      <StatsContainer
        ><template #title>LOSSES</template>
        <template #stat
          ><span class="text-loss">{{ stats.losses }}</span></template
        ></StatsContainer
      >
      <StatsContainer
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
      <StatsContainer
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
      <StatsContainer
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
    <div>
      <div class="px-4 py-4 overflow-x-auto overflow-y-auto order-0">
        <div
          class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
        >
          <!-- Table -->
          <table class="min-w-full overflow-auto">
            <!-- Table Header -->
            <thead>
              <div class="headers bg-bg_light rounded">
                <tr
                  class="flex flex-row justify-around md:grid md:grid-cols-11 justify-items-center py-3"
                >
                  <th class="text-left font-semibold text-gray-300">
                    Date Added
                  </th>
                  <th class="text-left font-semibold text-gray-300">Symbol</th>
                  <th class="text-left font-semibold text-gray-300">Status</th>
                  <th class="text-left font-semibold text-gray-300">Qty</th>
                  <th
                    class="text-left font-semibold text-gray-300 hidden md:block"
                  >
                    Entry
                  </th>

                  <th
                    class="text-left font-semibold text-gray-300 hidden md:block"
                  >
                    Entry Total
                  </th>
                  <th
                    class="text-left font-semibold text-gray-300 hidden md:block"
                  >
                    Exit
                  </th>
                  <th
                    class="text-left font-semibold text-gray-300 hidden md:block"
                  >
                    Exit Total
                  </th>
                  <th
                    class="text-left font-semibold text-gray-300 hidden md:block"
                  >
                    Return
                  </th>
                  <th class="text-left font-semibold text-gray-300">
                    Return %
                  </th>
                  <th class="text-left font-semibold text-gray-300"></th>
                </tr>
              </div>
            </thead>
            <!-- Table Body -->
            <tbody class="over-y-scroll h-2/3s">
              <tr>
                <BaseTableRows
                  class="hidden md:block"
                  @click="getTradeDetails(index, trade.id)"
                  v-for="(trade, index) in tradesData"
                  :key="trade.id"
                  :date="trade.date"
                  :ticker="trade.ticker"
                  :status="trade.status"
                  :qty="trade.qty"
                  :entry="trade.entry"
                  :exit="trade.exit"
                  :entryTotal="trade.entryTotal"
                  :exitTotal="trade.exitTotal"
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

                <BaseTableRows
                  class="md:hidden"
                  v-for="(trade, index) in tradesData"
                  :key="trade.id"
                  :ticker="trade.ticker"
                  :status="trade.status"
                  :qty="trade.qty"
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
  </div>

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
    StatsContainer,
    EditTradeModal,
  },
  setup() {
    const TradesStore = useTradesStore();

    const { editModal, tradesData, stats } = storeToRefs(TradesStore);

    const { editTrade, deleteTrade, hideModal, getTradeDetails } = TradesStore;
    const rows = tradesData;

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
    };
  },
};
</script>

<style></style>
