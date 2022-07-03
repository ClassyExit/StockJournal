<template>
  <!-- Sidebar -->
  <aside
    id="sidebar"
    class="bg-gray-800 text-gray-100 md:w-64 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out md:flex md:flex-col md:justify-between overflow-y-auto"
    data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation"
  >
    <div
      class="flex flex-col space-y-6"
      data-dev-hint="optional div for having an extra footer navigation"
    >
      <nav data-dev-hint="main navigation">
        <!-- Route Links -->
        <router-link
          :to="{ name: 'Dashboard' }"
          class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <Icon icon="ic:outline-dashboard" />
          <span>Dashboard</span></router-link
        >

        <router-link
          :to="{ name: 'Watchlist' }"
          class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <Icon icon="ooui:watchlist-rtl" />
          <span>Watchlist</span></router-link
        >
      </nav>

      <div class="flex flex-row w-full p-4 h-auto">
        <!-- Stock trade -->
        <router-link
          v-show="$route.name === 'Dashboard'"
          to=""
          class="btn btn-success"
          data-toggle="modal"
          @click="showAddModal"
          ><Icon
            icon="carbon:add-alt"
            :inline="true"
            width="25"
            height="25"
          /><span class="px-2">Add Trade</span></router-link
        >

        <!-- Watchlist -->
        <router-link
          v-show="$route.name === 'Watchlist'"
          to=""
          class="btn btn-success"
          data-toggle="modal"
          @click="showAddWatchModal"
          ><Icon
            icon="ooui:watchlist-ltr"
            width="25"
            height="25"
            :rotate="2"
            :inline="true"
          /><span class="px-2">Add Watchlist</span></router-link
        >
      </div>
    </div>

    <nav data-dev-hint="second-main-navigation or footer navigation">
      <a
        href="1"
        class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
      >
        <Icon icon="ant-design:github-filled" />
        <span>Github</span></a
      >
    </nav>
  </aside>

  <!-- Trade Add Modal -->
  <BaseModal :modalActive="addModal" title="Add Trade">
    <template #content>
      <div class="container mx-auto">
        <div class="p-2">
          <form class="w-full" novalidate @submit.prevent="onSubmit(formData)">
            <div class="grid grid-cols-4 gap-4">
              <div class="flex flex-col">
                <label class="uppercase">Ticker</label>
                <input
                  id="ticker"
                  placeholder="e.g. AAPL"
                  v-model="formData.ticker"
                  type="text"
                  class="text-black rounded font-medium bg-gray-500 placeholder-gray-700"
                />
              </div>
              <div class="flex flex-col">
                <label class="uppercase">Qty</label>
                <input
                  placeholder="10"
                  id="qty"
                  v-model="formData.qty"
                  type="number"
                  class="text-black rounded font-medium bg-gray-500 placeholder-gray-700"
                />
              </div>
              <div class="flex flex-col">
                <label class="uppercase">Entry Price</label>
                <input
                  id="entryPrice"
                  placeholder="10.00"
                  v-model="formData.entryPrice"
                  type="number"
                  class="text-black rounded font-medium bg-gray-500 placeholder-gray-700"
                />
              </div>
              <div class="flex flex-col">
                <label class="uppercase">Exit Price</label>
                <input
                  id="exitPrice"
                  placeholder="25.23"
                  v-model="formData.exitPrice"
                  type="number"
                  class="text-black rounded font-medium bg-gray-500 placeholder-gray-700"
                />
              </div>
            </div>
            <footer class="flex justify-end align-center pt-6">
              <button
                type="submit"
                class="btn btn-success mx-1"
                @click="addTrade(formData)"
              >
                Add Trade
              </button>
              <div class="btn btn-error mx-1" @click="hideModal">Cancel</div>
            </footer>
          </form>
        </div>
      </div>
    </template>
  </BaseModal>

  <!-- Add Watchlist Modal -->
  <BaseModal :modalActive="addWatchlistModal" title="Add Watchlist">
    <template #content>
      <div class="container mx-auto">
        <div class="p-2">
          <form
            class="w-full"
            novalidate
            @submit.prevent="onSubmitWatch(watchTicker)"
          >
            <div class="grid grid-cols-1 gap-4">
              <div class="flex flex-col">
                <label class="uppercase">Ticker</label>
                <input
                  required
                  id="ticker"
                  placeholder="e.g. AAPL"
                  v-model="watchTicker"
                  type="text"
                  class="text-black rounded font-medium bg-gray-500 placeholder-gray-700"
                />
              </div>
            </div>
            <footer class="flex justify-end align-center pt-6">
              <button
                type="submit"
                class="btn btn-success mx-1"
                @click="addToWatchlist(watchTicker)"
              >
                Add Watchlist
              </button>
              <div class="btn btn-error mx-1" @click="hideWatchModal">
                Cancel
              </div>
            </footer>
          </form>
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script>
import { useTradesStore } from "@/store/trades";
import { useWatchlistStore } from "@/store/watchlist";
import BaseModal from "../StockTrade/BaseModal.vue";
import { storeToRefs } from "pinia";
import { ref } from "vue";

export default {
  components: {
    BaseModal,
  },
  setup() {
    const TradesStore = useTradesStore();
    const WatchlistStore = useWatchlistStore();
    const { addTrade, showAddModal, hideModal } = TradesStore;
    const { showAddWatchModal, hideWatchModal, addToWatchlist } =
      WatchlistStore;

    const { addModal } = storeToRefs(TradesStore);
    const { addWatchlistModal } = storeToRefs(WatchlistStore);

    const formData = ref({
      ticker: null,
      qty: null,
      entryPrice: null,
      exitPrice: null,
    });

    let watchTicker = null;

    const onSubmit = (values) => {
      values.ticker = null;
      values.qty = null;
      values.exitPrice = null;
      values.entryPrice = null;
    };

    const onSubmitWatch = (value) => {
      watchTicker = null;
    };

    return {
      onSubmit,
      addTrade,
      addModal,
      showAddModal,
      hideModal,
      formData,
      showAddWatchModal,
      addWatchlistModal,
      hideWatchModal,
      watchTicker,
      onSubmitWatch,
      addToWatchlist,
    };
  },
};
</script>

<style scoped>
#sidebar {
  --tw-translate-x: -100%;
}
#menu-close-icon {
  display: none;
}

#menu-open:checked ~ #sidebar {
  --tw-translate-x: 0;
}
#menu-open:checked ~ * #mobile-menu-button {
  background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
}
#menu-open:checked ~ * #menu-open-icon {
  display: none;
}
#menu-open:checked ~ * #menu-close-icon {
  display: block;
}

@media (min-width: 768px) {
  #sidebar {
    --tw-translate-x: 0;
  }
}
</style>
