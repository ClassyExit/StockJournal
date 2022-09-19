<template>
  <teleport to="body">
    <div
      ref="modal-backdrop"
      class="fixed z-10 inset-0 overflow-y-auto backdrop-blur-sm"
      v-show="editModal"
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
              <h1 class="text-lg text-white font-bold">Edit Trade</h1>
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
                    <div class="btn btn-error mx-1" @click="hideModal()">
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

export default {
  components: {},
  setup() {
    const tradeStore = useTradesStore();

    const { hideModal, editTrade } = tradeStore;
    const { editModal, editTradeData } = storeToRefs(tradeStore);

    const hideModals = () => {
      hideWatchModal();
      hideModal();
    };

    return {
      hideModal,
      editModal,
      editTrade,
      editTradeData,
    };
  },
};
</script>

<style scoped></style>
