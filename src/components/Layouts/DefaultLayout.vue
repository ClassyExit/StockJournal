<template>
  <div
    aria-label="notification-container"
    class="notification-box flex flex-col items-center justify-center fixed w-full z-50 p-3"
  >
    <!-- Notification container -->
  </div>

  <div class="flex min-h-screen max-h-max flex-row bg-background">
    <Sidebar />

    <div class="flex flex-col flex-grow w-screen md:w-full">
      <Navbar />
      <!-- Inject content -->
      <div id="content" class="flex flex-grow flex-col">
        <!-- Global Notifications -->

        <router-view :key="$route.path"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navigation/Navbar.vue";
import Sidebar from "@/components/Navigation/Sidebar.vue";

export default {
  setup() {},
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
