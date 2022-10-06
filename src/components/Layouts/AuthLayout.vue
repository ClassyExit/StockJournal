<template>
  <div class="flex flex-col min-h-screen bg-background">
    <header class="px-24 md:sticky top-0 z-10">
      <!-- Navbar -->
      <div class="flex w-full bg-background">
        <div class="flex py-5 hidden sm:block">
          <router-link to="/home" class="">
            <img src="../../assets/images/logo.png" class="h-16" />
          </router-link>
        </div>

        <!-- Nav Links -->
        <div
          class="flex flex-grow items-center justify-end space-x-4 mr-4 py-5"
        >
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
    </header>

    <!-- Inject content -->
    <div class="h-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script></script>

<style></style>
