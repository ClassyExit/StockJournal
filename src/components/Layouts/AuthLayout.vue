<template>
  <div class="flex flex-col min-h-screen bg-background">
    <header class="md:px-24 md:sticky top-0 z-10">
      <!-- Navbar -->
      <div class="flex w-full bg-background">
        <div class="flex py-5 hidden sm:block">
          <router-link to="/home" class="">
            <img src="../../assets/images/logo.png" class="h-16" />
          </router-link>
        </div>

        <!-- Nav Links -->
        <div
          class="flex flex-grow items-center justify-end space-x-4 md:mr-4 md:py-5"
        >
          <div
            aria-label="mobile-nav-icon"
            class="md:hidden p-4"
            @click="isOpenMobileNav = !isOpenMobileNav"
          >
            <div :class="isOpenMobileNav ? 'hidden' : 'block'">
              <Icon
                id="mobile-menu-btn-open"
                icon="charm:menu-hamburger"
                width="30"
                height="30"
              />
            </div>
          </div>

          <div aria-label="web-nav" class="hidden md:block space-x-3">
            <router-link to="/home">
              <button
                class="btn bg-background rounded-lg border border-violet-800 hover:bg-violet-900"
              >
                HOME
              </button>
            </router-link>
            <router-link to="/login">
              <button
                class="btn bg-background rounded-lg border border-violet-800 hover:bg-violet-900"
              >
                LOGIN
              </button>
            </router-link>
            <router-link to="/register">
              <button
                class="btn bg-background rounded-lg border border-violet-800 hover:bg-violet-900"
              >
                REGISTER
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </header>

    <div
      aria-label="mobile-menu"
      class="absolute md:hidden w-4/5 bg-background inset-y-0 left-0 z-50"
      :class="isOpenMobileNav ? 'block' : 'hidden'"
    >
      <div class="bg-background flex flex-row w-full items-center py-5">
        <div class="w-3/4 flex justify-center">
          <img src="@/assets/images/logo.png" class="h-32" />
        </div>
        <div
          class="w-1/4 flex justify-center"
          @click="isOpenMobileNav = !isOpenMobileNav"
        >
          <Icon
            id="mobile-menu-btn-close"
            icon="ep:close-bold"
            width="30"
            height="30"
          />
        </div>
      </div>

      <div
        aria-label="menu-items"
        class="menu-items bg-inherit w-full flex flex-col divide-y divide-solid divide-violet-800 border-y-[1px] border-violet-800"
      >
        <router-link to="/home" class="p-4">
          <div class="flex items-center space-x-4">
            <Icon icon="ant-design:home-outlined" width="30" height="30" />
            <span>HOME</span>
          </div>
        </router-link>

        <router-link to="/login" class="p-4"
          ><div class="flex items-center space-x-4">
            <Icon icon="codicon:account" width="30" height="30" />
            <span>LOGIN</span>
          </div>
        </router-link>
        <router-link to="/register" class="p-4"
          ><div class="flex items-center space-x-4">
            <Icon icon="ant-design:edit-outlined" width="30" height="30" />
            <span>REGISTER</span>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Inject content -->
    <div class="h-full" :class="isOpenMobileNav ? 'blur' : ''">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const isOpenMobileNav = ref(false);

    return {
      isOpenMobileNav,
    };
  },
};
</script>

<style></style>
