<template>
  <!-- Fill the entire screen -->

  <div class="flex h-screen flex-col bg-gray-900">
    <header>
      <!-- Navbar -->
      <div class="flex h-20 w-full bg-gray-900">
        <div class="flex px-48 py-5">
          <router-link to="/home" class="w-1/8">
            <img src="../../assets/images/logo.png" class="h-full" />
          </router-link>
        </div>
        <div class="flex-1"></div>

        <!-- Nav Links -->
        <div class="flex-none px-5 py-4 mx-10">
          <ul class="menu menu-horizontal space-x-4 p-0 px-48">
            <li class="rounded-lg border border-violet-500 hover:bg-violet-900">
              <router-link to="/login">Login</router-link>
            </li>
            <li class="rounded-lg border border-violet-500 hover:bg-violet-900">
              <router-link to="/register">Register</router-link>
            </li>
          </ul>
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
