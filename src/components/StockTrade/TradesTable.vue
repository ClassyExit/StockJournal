<template>
  <div class="container mx-auto w-full">
    <div
      class="stats-container flex flex-row space-x-6 justify-around mx-auto w-3/4"
    >
      <StatsContainer
        ><template #title>WINS</template>
        <template #stat
          ><span class="text-green-700">{{ stats.wins }}</span></template
        ></StatsContainer
      >
      <StatsContainer
        ><template #title>LOSSES</template>
        <template #stat
          ><span class="text-red-700">{{ stats.losses }}</span></template
        ></StatsContainer
      >
      <StatsContainer
        ><template #title>AVG WIN</template>
        <template #stat
          ><span class="text-green-700">{{
            stats.avgWin.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
          }}</span></template
        ></StatsContainer
      >
      <StatsContainer
        ><template #title>AVG LOSS</template>
        <template #stat
          ><span class="text-red-700">{{
            stats.avgLoss.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
          }}</span></template
        ></StatsContainer
      >
      <StatsContainer
        ><template #title>PnL</template>
        <template #stat
          ><span v-if="stats.PnL >= 0" class="text-green-700">{{
            stats.PnL.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
          }}</span>
          <span v-else class="text-red-700">{{
            stats.PnL.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
          }}</span></template
        ></StatsContainer
      >
    </div>
    <div>
      <div class="px-4 py-4 overflow-x-auto overflow-y-auto">
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
            <tbody class="over-y-scroll h-2/3">
              <tr class="my-2 rounded p-2">
                <BaseTableRows
                  class="hidden md:block"
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

  <!-- Bring in values from store into script and add them into the form -->
  <!-- {stockName = ..., qty= ...} -->
  <BaseModal :modalActive="editModal" title="Edit Trade">
    <template #content>
      <div class="container mx-auto">
        <div class="p-2">
          <form class="w-5/6 md:w-full">
            <div class="flex flex-col md:grid md:grid-cols-4 gap-4">
              <div class="flex flex-col">
                <label class="uppercase">Ticker</label>
                <input
                  id="ticker"
                  type="text"
                  v-model="editTradeData.ticker"
                  class="text-black rounded bg-gray-500"
                />
              </div>
              <div class="flex flex-col">
                <label class="uppercase">Qty</label>
                <input
                  id="qty"
                  type="number"
                  v-model="editTradeData.qty"
                  class="text-black rounded bg-gray-500"
                />
              </div>
              <div class="flex flex-col">
                <label class="uppercase">Entry Price</label>
                <input
                  id="entryPrice"
                  type="number"
                  v-model="editTradeData.entry"
                  class="text-black rounded bg-gray-500"
                />
              </div>
              <div class="flex flex-col">
                <label class="uppercase">Exit Price</label>
                <input
                  id="exitPrice"
                  type="number"
                  v-model="editTradeData.exit"
                  class="text-black rounded bg-gray-500"
                />
              </div>
            </div>
            <footer class="flex md:justify-end align-center pt-6">
              <div
                type="submit"
                class="btn btn-success mx-1"
                @click="editTrade()"
              >
                Confirm
              </div>
              <div class="btn btn-error mx-1" @click="hideModal">Cancel</div>
            </footer>
          </form>
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script>
import BaseTableRows from "./BaseTableRows.vue";
import StatsContainer from "./StatsContainer.vue";
import BaseModal from "./BaseModal.vue";
import { useTradesStore } from "@/store/trades.js";
import { useDatabaseStore } from "@/store/database";
import { useUserStore } from "@/store/user";
import { onMounted, watchEffect } from "vue";
import { storeToRefs } from "pinia";

import DangerAlert from "@/components/Notifications/DangerAlert.vue";
import InfoAlert from "@/components/Notifications/InfoAlert.vue";
import SuccessAlert from "@/components/Notifications/SuccessAlert.vue";
import WarningAlert from "@/components/Notifications/WarningAlert.vue";

export default {
  components: {
    BaseTableRows,
    BaseModal,
    DangerAlert,
    InfoAlert,
    SuccessAlert,
    WarningAlert,
    StatsContainer,
  },
  setup() {
    const TradesStore = useTradesStore();

    const { editModal, editTradeData, tradesData, stats } =
      storeToRefs(TradesStore);

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
      editTradeData,
      stats,
    };
  },
};
</script>

<style></style>
