<template>
  <router-view :key="$route.path"></router-view>
</template>

<script>
import { useUserStore } from "@/store/user.js";
import { useNotificationStore } from "./store/notifications";
import { useWatchlistStore } from "./store/watchlist";

import "@/assets/tailwind.css";

export default {
  setup() {
    const userStore = useUserStore();

    // Delete global notifications on refresh | application load
    useNotificationStore().deleteAllGlobalNotifications();

    //Start Request for sector performance
    useWatchlistStore().getSectorPerformance();

    userStore.InitializeAuth();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #2a2c3a;
  width: 100%;
  min-height: 100vh;
}
</style>
