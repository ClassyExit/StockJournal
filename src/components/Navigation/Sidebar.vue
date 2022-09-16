<template>
  <aside
    id="sidebar"
    class="bg-gray-800 text-gray-100 relative min-w-[10%] space-y-6 pt-6 px-0 transition duration-200 flex flex-col justify-between overflow-y-auto md:w-[12%]"
  >
    <div class="flex flex-col space-y-6">
      <nav class="main-nav">
        <!-- Route Links -->
        <router-link
          :to="{ name: 'Dashboard' }"
          class="flex w-full items-center justify-center md:justify-start md:space-x-2 py-2 md:px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <Icon
            icon="ic:outline-dashboard"
            width="20"
            height="20"
            class="hidden md:block"
          />
          <Icon
            icon="ic:outline-dashboard"
            width="25"
            height="25"
            class="md:hidden"
          />
          <span class="hidden md:block">Dashboard</span></router-link
        >

        <router-link
          :to="{ name: 'Watchlist' }"
          class="flex items-center justify-center md:justify-start md:space-x-2 py-2 md:px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <Icon
            icon="ooui:watchlist-rtl"
            width="20"
            height="20"
            class="hidden md:block"
          />
          <Icon
            icon="ooui:watchlist-rtl"
            width="25"
            height="25"
            class="md:hidden"
          />
          <span class="hidden md:block">Watchlist</span></router-link
        >
      </nav>

      <div
        class="flex h-auto justify-center md:w-full md:justify-start md:px-4"
      >
        <!-- Stock trade -->
        <router-link
          v-show="$route.name === 'Dashboard'"
          to=""
          class="btn-success p-2 rounded md:flex md:font-semibold"
          data-toggle="modal"
          @click="showAddModal"
          ><Icon
            icon="carbon:add-alt"
            :inline="true"
            width="25"
            height="25"
          /><span class="hidden pl-2 md:block">Add Trade</span></router-link
        >

        <!-- Watchlist -->
        <router-link
          v-show="$route.name === 'Watchlist'"
          to=""
          class="btn-success p-2 rounded items-center md:flex md:font-semibold"
          data-toggle="modal"
          @click="showAddWatchModal"
          ><Icon
            icon="carbon:add-alt"
            :inline="true"
            width="25"
            height="25"
          /><span class="hidden pl-2 md:block">Add Watchlist</span></router-link
        >
      </div>
    </div>

    <nav class="footer">
      <div class="w-full">
        <a
          href="#"
          class="w-full flex items-center justify-center py-2 hover:bg-gray-700 hover:text-white md:px-4 md:justify-start md:space-x-2"
        >
          <Icon
            icon="ant-design:github-filled"
            width="25"
            height="25"
            class="md:hidden content-center"
          />
          <Icon
            icon="ant-design:github-filled"
            width="20"
            height="20"
            class="hidden md:block"
          />
          <span class="hidden md:block md:uppercase">Github</span></a
        >
      </div>
    </nav>
  </aside>

  <!-- Trade Add Modal -->
  <BaseModal :modalActive="addModal" title="Add Trade">
    <template #content>
      <div class="container mx-auto">
        <div class="p-2">
          <form class="w-full" novalidate @submit.prevent="onSubmit(formData)">
            <div class="md:grid md:grid-cols-4 gap-4">
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
