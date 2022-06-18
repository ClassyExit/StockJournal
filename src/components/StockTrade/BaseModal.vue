<template>
  <teleport to="body">
    <div
      ref="modal-backdrop"
      class="fixed z-10 inset-0 overflow-y-auto"
      v-show="modalActive"
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
              <h1 class="text-lg text-white font-bold">
                {{ title }}
              </h1>
            </div>
            <div>
              <button class="btn btn-square btn-sm" @click="hideModals">
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
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { useTradesStore } from "@/store/trades.js";
import { useWatchlistStore } from "@/store/watchlist";
export default {
  props: {
    modalActive: { type: Boolean },
    title: { type: String },
  },
  components: {},
  setup() {
    const { hideModal } = useTradesStore();
    const { hideWatchModal } = useWatchlistStore();

    const hideModals = () => {
      hideWatchModal();
      hideModal();
    };

    return {
      hideModals,
    };
  },
};
</script>

<style scoped></style>
