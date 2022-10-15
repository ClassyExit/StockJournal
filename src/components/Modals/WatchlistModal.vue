<template>
  <teleport to="body">
    <div
      ref="modal-backdrop"
      class="fixed z-10 inset-0 overflow-y-auto backdrop-blur-sm"
      v-show="showAddWatchlistModal"
      @click="hideWatchModal()"
    >
      <div class="flex items-center justify-center min-h-screen text-center">
        <div
          class="bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl min-w-fit"
          role="dialog"
          ref="modal"
          aria-modal="true"
          aria-labelledby="modal-headline"
          @click.stop
        >
          <div
            class="modal-header flex p-2 justify-between border-b-2 border-gray-600"
          >
            <div class="align-middle">
              <h1 class="text-lg text-white font-bold">Add Watchlist</h1>
            </div>
            <div>
              <button class="btn btn-square btn-sm" @click="hideWatchModal()">
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
                  @submit.prevent="onSubmitWatchlist(watchTicker)"
                >
                  <div class="grid grid-cols-1 gap-4">
                    <div class="flex flex-col">
                      <label class="uppercase">Ticker</label>
                      <input
                        id="ticker"
                        placeholder="e.g. AAPL"
                        v-model="watchTicker"
                        type="text"
                        class="text-black rounded font-medium bg-gray-500 placeholder-gray-700"
                        :class="{ 'border-2 border-danger': watchlistError }"
                      />
                      <p
                        class="w-full text-danger text-sm"
                        v-if="watchlistError"
                      >
                        {{ watchlistError }}
                      </p>
                    </div>
                  </div>
                  <footer class="flex justify-end align-center pt-6">
                    <button
                      type="submit"
                      class="btn btn-success mx-1 font-bold"
                      @click="addToWatchlist(watchTicker)"
                    >
                      Add Watchlist
                    </button>
                    <div
                      class="btn btn-error mx-1 font-bold"
                      @click="hideWatchModal()"
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
import { useWatchlistStore } from "@/store/watchlist";
import { storeToRefs } from "pinia";

export default {
  components: {},
  setup() {
    const watchlistStore = useWatchlistStore();

    const { showAddWatchlistModal, watchlistError } =
      storeToRefs(watchlistStore);
    const { hideWatchModal, addToWatchlist } = watchlistStore;

    let watchTicker = null;

    const onSubmitWatchlist = (value) => {
      watchTicker = null;
    };

    return {
      hideWatchModal,
      showAddWatchlistModal,
      onSubmitWatchlist,
      watchTicker,
      addToWatchlist,
      watchlistError,
    };
  },
};
</script>

<style scoped></style>
