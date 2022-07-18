<template>
  <div class="container mx-auto">
    <div class="py-4">
      <div class="px-4 py-4 overflow-x-auto overflow-y-auto">
        <div
          class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
        >
          <!-- Table -->
          <table class="min-w-full overflow-auto">
            <!-- Table Header -->
            <thead>
              <div class="headers bg-bg_light rounded mb-1">
                <tr
                  class="flex flex-row justify-around md:grid md:grid-cols-10 gap-1 justify-items-center py-4"
                >
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
import BaseModal from "./BaseModal.vue";
import { useTradesStore } from "@/store/trades.js";
import { useDatabaseStore } from "@/store/database";
import { useUserStore } from "@/store/user";
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

export default {
  components: {
    BaseTableRows,
    BaseModal,
  },

  setup() {
    const TradesStore = useTradesStore();

    const { editModal, editTradeData, tradesData } = storeToRefs(TradesStore);
    const { editTrade, deleteTrade, hideModal, getTradeDetails } = TradesStore;
    const rows = tradesData;

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
    };
  },
};
</script>

<style></style>
