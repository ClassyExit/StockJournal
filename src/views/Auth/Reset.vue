<template>
  <div class="flex-auto my-32 justify-center bg-background">
    <div class="mx-auto flex w-[30rem] flex-col bg-gray-800 rounded-xl">
      <!-- Login form -->
      <form
        class="flex w-[30rem] flex-col space-y-6 p-4"
        @submit.prevent="resetPassword(email)"
      >
        <div class="text-center text-4xl font-medium">Reset Password</div>
        <div class="border-b2 w-full bg-transparent text-lg">
          <label class="">Email Address </label>
          <input
            class="block w-full px-2 py-2 text-l font-normal text-gray-700 bg-white rounded"
            type="email"
            placeholder="example@gmail.com"
            v-model="email"
          />
          <div
            class="flex p-4 mb-4 text-sm text-red-700 mt-2 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            role="alert"
            v-if="resetErrors"
          >
            <Icon icon="entypo:info-with-circle" :inline="true" />
            <div>
              <span class="font-medium pl-2"> {{ resetErrors }}</span>
            </div>
          </div>
          <div
            class="flex p-4 mb-4 text-sm text-green-700 mt-2 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
            role="alert"
            v-if="resetSuccess"
          >
            <Icon icon="entypo:info-with-circle" :inline="true" />
            <div>
              <span class="font-medium pl-2"> Success - Email sent!</span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          class="text-white w-full px-4 py-2 border border-violet-900 rounded-lg hover:bg-violet-900"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/store/user";
import { ref } from "vue";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const userStore = useUserStore();
    const { resetPassword } = userStore;

    userStore.resetErrors = false;
    userStore.resetSuccess = false;
    const { resetErrors, resetSuccess } = storeToRefs(userStore);

    const email = ref("");

    return {
      resetPassword,
      email,
      resetErrors,
      resetSuccess,
    };
  },
};
</script>

<style></style>
