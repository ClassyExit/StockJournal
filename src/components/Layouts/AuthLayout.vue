<template>
  <div class="flex flex-col min-h-screen bg-background">
    <header>
      <!-- Navbar -->
      <div class="flex w-full bg-background">
        <div class="flex md:px-48 py-5">
          <router-link to="/home" class="w-1/8">
            <img src="../../assets/images/logo.png" class="h-12" />
          </router-link>
        </div>
        <!-- px-5 py-4 md:mx-10 -->
        <!-- Nav Links -->
        <div
          class="flex flex-grow items-center justify-end space-x-4 mr-4 md:px-48"
        >
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
