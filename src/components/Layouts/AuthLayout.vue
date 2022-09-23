<template>
  <div class="flex flex-col min-h-screen bg-background">
    <header class="mx-10 sticky top-0 z-50">
      <!-- Navbar -->
      <div class="flex w-full bg-background">
        <div class="flex py-5 hidden sm:block">
          <router-link to="/home" class="">
            <img src="../../assets/images/logo.png" class="h-12" />
          </router-link>
        </div>

        <!-- Nav Links -->
        <div
          class="flex flex-grow items-center justify-end space-x-4 mr-4 py-5"
        >
          <router-link to="/home">
            <Button>HOME</Button>
          </router-link>
          <router-link to="/login">
            <Button>LOGIN</Button>
          </router-link>
          <router-link to="/register">
            <Button>REGISTER</Button>
          </router-link>
        </div>
      </div>
    </header>

    <!-- Inject content -->
    <div class="h-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  components: {
    Button,
  },
};
</script>

<style></style>
