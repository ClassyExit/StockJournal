<template>
  <div class="flex min-h-screen flex-col bg-gray-900">
    <!-- Header Nav -->
    <Navbar />

    <!-- Render content here -->
    <div class="flex flex-row flex-grow w-full bg-gray-900">
      <!-- Sidebar Render -->
      <Sidebar />

      <!-- Inject content -->
      <div id="content" class="flex flex-grow">
        <router-view :key="$route.path"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";

//Test
import { useDatabaseStore } from "@/store/database";

export default {
  setup() {
    const db = useDatabaseStore();
    const { addTrade, deleteTrade } = db;

    return { deleteTrade };
  },
  components: {
    Navbar,
    Sidebar,
  },
};
</script>

<style scoped>
.nav-bar {
  margin-left: auto;

  display: flex;
  height: 5vh;
  width: 80vw;

  background-color: white;
  /* Temp */
  border: 2px solid white;
}

.nav-content {
  display: flex;
  flex-direction: row;
  justify-items: center;
}
</style>
