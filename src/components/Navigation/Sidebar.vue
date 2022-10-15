<template>
  <aside
    id="sidebar"
    aria-label="Sidebar"
    class="bg-bg_light h-screen relative w-16 sticky top-0 z-30"
    :class="preferences.sidebar ? 'w-48' : 'w-16'"
  >
    <div class="h-screen flex flex-col items-center">
      <div class="w-full flex flex-row justify-evenly">
        <div
          @click="preferences.sidebar = !preferences.sidebar"
          aria-label="toggle sidebar"
          title="Toggle Sidebar"
          class="cursor-pointer p-4"
        >
          <Icon icon="charm:menu-hamburger" width="30" height="30" />
        </div>
        <div
          aria-label="logo"
          class="self-center"
          :class="preferences.sidebar ? 'block' : 'hidden'"
        >
          <img alt="logo" src="../../assets/images/logo.png" class="h-12" />
        </div>
      </div>

      <!-- Extended NAV -->
      <div
        aria-label="reg-nav"
        class="flex flex-col w-full h-full justify-between pb-2"
        :class="preferences.sidebar ? 'block' : 'hidden'"
      >
        <div class="">
          <div aria-label="dashboard" class="hover:bg-gray-700">
            <router-link
              :to="{ name: 'Dashboard' }"
              class="flex flex-row items-center px-4 py-1"
            >
              <Icon icon="ic:outline-dashboard" width="35" height="35" />
              <span class="text-lg text-center w-full">Dashboard</span>
            </router-link>
          </div>

          <div aria-label="watchlist" class="hover:bg-gray-700">
            <router-link
              :to="{ name: 'Watchlist' }"
              class="flex flex-row items-center px-4 py-1"
            >
              <Icon icon="ooui:watchlist-rtl" width="35" height="35" />
              <span class="text-lg text-center w-full">Watchlist</span>
            </router-link>
          </div>
        </div>
        <div class="footer-nav">
          <div aria-label="contact" class="hover:bg-gray-700">
            <router-link
              to=""
              @click="showEmailModal"
              class="flex flex-row items-center px-4 py-1"
            >
              <Icon icon="charm:mail" width="35" height="35" />
              <span class="text-lg text-center w-full">Contact</span>
            </router-link>
          </div>
          <div aria-label="settings" class="hover:bg-gray-700">
            <router-link
              :to="{ name: 'Profile' }"
              class="flex flex-row items-center px-4 py-1"
            >
              <Icon icon="carbon:settings" width="35" height="35" />
              <span class="text-lg text-center w-full">Settings</span>
            </router-link>
          </div>
          <div aria-label="logout" class="hover:bg-gray-700">
            <router-link
              to="#"
              @click="userStore.logout()"
              class="flex flex-row items-center px-4 py-1"
            >
              <Icon icon="ic:baseline-log-out" width="35" height="35" />
              <span class="text-lg text-center w-full">Logout</span>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Short NAV -->
      <div
        aria-label="short-nav"
        class="flex flex-col w-full h-full justify-between pb-2"
        :class="preferences.sidebar ? 'hidden' : 'block'"
      >
        <div class="main-nav flex flex-col">
          <div aria-label="dashboard" class="hover:bg-gray-700">
            <router-link
              :to="{ name: 'Dashboard' }"
              class="w-full flex flex-col place-content-center p-1 items-center"
            >
              <Icon icon="ic:outline-dashboard" width="35" height="35" />
            </router-link>
          </div>

          <div aria-label="watchlist" class="hover:bg-gray-700">
            <router-link
              :to="{ name: 'Watchlist' }"
              class="flex flex-col place-content-center p-1 items-center"
            >
              <Icon icon="ooui:watchlist-rtl" width="35" height="35" />
            </router-link>
          </div>
        </div>
        <div class="footer-nav">
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
        </div>
      </div>
    </div>
  </aside>

  <EmailModal />
</template>

<script>
import EmailModal from "@/components/Modals/EmailModal.vue";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";

export default {
  components: {
    EmailModal,
  },
  setup() {
    const userStore = useUserStore();

    const { preferences } = storeToRefs(userStore);

    // Open/close email modal
    const showEmailModal = () => {
      userStore.showEmailModal = true;
    };

    return {
      userStore,
      showEmailModal,

      preferences,
    };
  },
};
</script>

<style lang="css"></style>
