<template>
  <aside
    id="sidebar"
    aria-label="Sidebar"
    class="bg-bg_light h-screen relative w-16 sticky top-0 z-50"
  >
    <div class="h-screen flex flex-col">
      <div class="px-2 pb-4 pt-2 align-center justify-center">
        <router-link to="/dashboard" class="">
          <img alt="logo" src="../../assets/images/logo.png" class="" />
        </router-link>
      </div>
      <!-- Main Nav -->
      <nav class="main-nav space-y-1">
        <div aria-label="dashboard" class="hover:bg-gray-700">
          <router-link
            :to="{ name: 'Dashboard' }"
            class="flex place-content-center p-1"
          >
            <Icon icon="ic:outline-dashboard" width="35" height="35" />
          </router-link>
        </div>

        <div aria-label="watchlist" class="hover:bg-gray-700">
          <router-link
            :to="{ name: 'Watchlist' }"
            class="flex place-content-center p-1"
          >
            <Icon icon="ooui:watchlist-rtl" width="35" height="35" />
          </router-link>
        </div>
      </nav>
      <div id="filler" class="flex-1"></div>
      <!-- Footer Nav -->
      <nav class="footer-nav content-end pb-4 space-y-2">
        <div aria-label="contact" class="hover:bg-gray-700">
          <router-link
            to=""
            @click="showEmailModal"
            class="flex place-content-center p-1"
          >
            <Icon icon="charm:mail" width="35" height="35" />
          </router-link>
        </div>
        <div aria-label="settings" class="hover:bg-gray-700">
          <router-link
            :to="{ name: 'Profile' }"
            class="flex place-content-center p-1"
          >
            <Icon icon="carbon:settings" width="35" height="35" />
          </router-link>
        </div>
        <div aria-label="logout" class="hover:bg-gray-700">
          <router-link
            to="#"
            @click="userStore.logout()"
            class="flex place-content-center p-1"
          >
            <Icon icon="ic:baseline-log-out" width="35" height="35" />
          </router-link>
        </div>
      </nav>
    </div>
  </aside>

  <EmailModal />
</template>

<script>
import EmailModal from "@/components/Modals/EmailModal.vue";
import { useUserStore } from "@/store/user";

export default {
  components: {
    EmailModal,
  },
  setup() {
    const userStore = useUserStore();

    // Open/close email modal
    const showEmailModal = () => {
      userStore.showEmailModal = true;
    };

    return {
      userStore,
      showEmailModal,
    };
  },
};
</script>

<style lang="css"></style>
