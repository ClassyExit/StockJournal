<template>
  <div class="container mx-auto">
    <div class="py-4">
      <div class="px-4 py-4 overflow-x-auto overflow-y-auto">
        <div
          class="flex max-w-max p-4 mb-4 text-sm text-red-700 mt-2 bg-red-100 rounded-lg"
          role="alert"
        >
          <Icon
            icon="entypo:info-with-circle"
            :inline="true"
            width="20"
            height="20"
          />
          <div>
            <span class="font-medium pl-2">
              If a request does not go through, the free API used has
              unfortunately reached its daily limit. Please try again
              later.</span
            >
          </div>
        </div>
        <div
          class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
        >
          <!-- Table -->
          <table class="min-w-full overflow-auto">
            <!-- Table Header -->
            <thead>
              <div class="headers bg-gray-800 rounded mb-1">
                <tr class="grid grid-cols-4 gap-1 justify-items-center py-4">
                  <th class="text-left font-semibold text-gray-300">Ticker</th>
                  <th class="text-left font-semibold text-gray-300">Name</th>
                  <th class="text-left font-semibold text-gray-300">Price</th>
                  <th class="text-left font-semibold text-gray-300"></th>
                </tr>
              </div>
            </thead>
            <!-- Table Body -->
            <tbody class="over-y-scroll h-2/3">
              <tr class="rounded p-2 my-2">
                <BaseTableRows
                  v-for="(item, index) in watchlistData"
                  :key="item.id"
                  :ticker="item.ticker"
                  :name="item.name"
                  :price="item.price"
                >
                  <router-link
                    to=""
                    class="text-red-600 px-1"
                    @click="deleteWatch(index, item.id)"
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
</template>

<script>
import { useWatchlistStore } from "@/store/watchlist";
import { useUserStore } from "@/store/user";
import { useDatabaseStore } from "@/store/database";
import { storeToRefs } from "pinia";
import BaseTableRows from "./BaseTableRows.vue";
import { onBeforeMount } from "@vue/runtime-core";

export default {
  setup() {
    const WatchlistStore = useWatchlistStore();

    const { updatePrice, deleteWatch } = WatchlistStore;
    const { watchlistData } = storeToRefs(WatchlistStore);

    onBeforeMount(() => {
      const WatchStore = useWatchlistStore();
      const DatabaseStore = useDatabaseStore();
      const UserStore = useUserStore();

      DatabaseStore.fetchWatchlist(UserStore.userId);

      WatchStore.watchlistData = DatabaseStore.watchlist;
      updatePrice();
    });

    return {
      deleteWatch,
      watchlistData,
    };
  },
  components: { BaseTableRows },
};
</script>

<style></style>
