<template>
  <router-view :key="$route.path"></router-view>
</template>

<script>
import { onBeforeMount, onMounted } from "vue";
import { useUserStore } from "@/store/user.js";

import "@/assets/tailwind.css";

export default {
  setup() {
    const userStore = useUserStore();

    onBeforeMount(() => {
      //Check to see if user exists and/or logged in.
      userStore.InitializeAuth();
    });
  },
};
</script>

<style>
:root {
  --background: "#2a2c3a",
  --primary: "#42b883",
  --info: "#1d8cf8",
  --danger: "#fd5d93",
  --teal: "#00d6b4",
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #2a2c3a;
  width: 100%;
  min-height: 100vh;
}
</style>
