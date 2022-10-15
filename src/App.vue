<template>
  <router-view :key="$route.path"></router-view>
</template>

<script>
import { useUserStore } from "@/store/user.js";

import "@/assets/tailwind.css";

export default {
  setup() {
    const userStore = useUserStore();

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
  width: 100vw;
  min-height: 100vh;
}
</style>
