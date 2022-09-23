<template>
  <teleport to="body">
    <div
      ref="modal-backdrop"
      class="fixed z-10 inset-0 overflow-y-auto backdrop-blur-sm"
      v-show="showAddTradeModal"
    >
      <div class="flex items-center justify-center min-h-screen text-center">
        <div
          class="bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl w-auto"
          role="dialog"
          ref="modal"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div
            class="modal-header flex p-2 justify-between border-b-2 border-gray-600"
          >
            <div class="align-middle">
              <h1 class="text-lg text-white font-bold">Add Trade</h1>
            </div>
            <div>
              <button class="btn btn-square btn-sm" @click="hideModal()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <!-- Content -->
          <div class="content p-4">
            <div class="container mx-auto">
              <div class="p-2">
                <form
                  class="w-full"
                  novalidate
                  @submit.prevent="submitTrade(tradeData)"
                >
                  <div class="md:grid md:grid-cols-4 gap-4">
                    <div class="flex flex-col">
                      <label class="uppercase">Ticker</label>
                      <input
                        id="ticker"
                        placeholder="e.g. AAPL"
                        v-model="tradeData.ticker"
                        type="text"
                        class="text-black rounded font-medium bg-gray-500 placeholder-gray-700"
                      />
                    </div>
                    <div class="flex flex-col">
                      <label class="uppercase">Qty</label>
                      <input
                        placeholder="10"
                        id="qty"
                        v-model="tradeData.qty"
                        type="number"
                        class="text-black rounded font-medium bg-gray-500 placeholder-gray-700"
                      />
                    </div>
                    <div class="flex flex-col">
                      <label class="uppercase">Entry Price</label>
                      <input
                        id="entryPrice"
                        placeholder="10.00"
                        v-model="tradeData.entryPrice"
                        type="number"
                        class="text-black rounded font-medium bg-gray-500 placeholder-gray-700"
                      />
                    </div>
                    <div class="flex flex-col">
                      <label class="uppercase">Exit Price</label>
                      <input
                        id="exitPrice"
                        placeholder="25.23"
                        v-model="tradeData.exitPrice"
                        type="number"
                        class="text-black rounded font-medium bg-gray-500 placeholder-gray-700"
                      />
                    </div>
                  </div>
                  <footer class="flex justify-end align-center pt-6">
                    <button
                      type="submit"
                      class="btn btn-success mx-1 font-bold"
                      @click="addTrade(tradeData)"
                    >
                      Add Trade
                    </button>
                    <div
                      class="btn btn-error mx-1 font-bold"
                      @click="hideModal()"
                    >
                      Cancel
                    </div>
                  </footer>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { useTradesStore } from "@/store/trades.js";
import { storeToRefs } from "pinia";
import { ref } from "vue";

export default {
  components: {},
  setup() {
    const TradesStore = useTradesStore();

    const { addTrade, hideModal } = TradesStore;
    const { showAddTradeModal } = storeToRefs(TradesStore);

    const tradeData = ref({
      ticker: null,
      qty: null,
      entryPrice: null,
      exitPrice: null,
    });

    const submitTrade = (values) => {
      values.ticker = null;
      values.qty = null;
      values.exitPrice = null;
      values.entryPrice = null;
    };

    return {
      hideModal,
      submitTrade,
      showAddTradeModal,
      hideModal,
      tradeData,
      addTrade,
    };
  },
};
</script>

<style></style>
