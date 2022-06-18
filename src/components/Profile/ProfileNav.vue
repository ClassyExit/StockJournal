<template>
  <div class="flex w-full m-4 bg-gray-800 rounded">
    <div class="p-2 w-1/5 flex flex-col">
      <div
        class="border-r-[1px] h-full border-slate-700 divide-y divide-slate-700"
      >
        <div
          class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <button class="w-full text-left" @click="activeRoute = 'details'">
            Account Details
          </button>
        </div>
        <div
          class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <button class="w-full text-left" @click="activeRoute = 'password'">
            Change Password
          </button>
        </div>
        <div
          class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white"
        >
          <button
            class="w-full text-left text-red-700"
            @click="activeRoute = 'delete'"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    <div class="w-full pl-4 pt-4">
      <div v-if="activeRoute == 'details'" class=""><Account /></div>
      <div v-if="activeRoute == 'password'" class=""><ChangePassword /></div>
      <div v-if="activeRoute == 'delete'" class=""><DeleteAccount /></div>
    </div>
  </div>
</template>

<script>
import Account from "./Account.vue";
import ChangePassword from "./ChangePassword.vue";
import DeleteAccount from "./DeleteAccount.vue";
import { ref } from "vue";
export default {
  components: {
    Account,
    ChangePassword,
    DeleteAccount,
  },

  setup() {
    const activeRoute = ref("details");

    return {
      activeRoute,
    };
  },
};
</script>

<style></style>
