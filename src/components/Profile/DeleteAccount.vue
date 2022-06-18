<template>
  <div class="text-left text-4xl font-medium pb-4">Account Deletion</div>
  <div
    v-if="deleteErrors"
    class="flex w-2/5 p-4 mb-4 text-sm text-red-700 mt-2 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
    role="alert"
  >
    <Icon icon="entypo:info-with-circle" :inline="true" />
    <div>
      <span class="font-medium pl-2"> {{ deleteErrors }}</span>
    </div>
  </div>
  <div @click="deleteUserAccount" class="btn btn-error">Delete Account</div>
</template>

<script>
import { useUserStore } from "@/store/user.js";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const userStore = useUserStore();
    const { deleteUserAccount } = userStore;

    userStore.deleteErrors = false;
    const { deleteErrors } = storeToRefs(userStore);

    return {
      deleteUserAccount,
      deleteErrors,
    };
  },
};
</script>

<style></style>
