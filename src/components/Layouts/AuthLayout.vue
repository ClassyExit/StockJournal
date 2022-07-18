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
            <div
              class="btn bg-background rounded-lg border border-violet-500 hover:bg-violet-900"
            >
              LOGIN
            </div>
          </router-link>
          <router-link to="/register">
            <div
              class="btn bg-background rounded-lg border border-violet-500 hover:bg-violet-900"
            >
              REGISTER
            </div>
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
export default {};
</script>

<style></style>
