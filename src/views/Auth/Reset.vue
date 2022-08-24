<template>
  <div class="flex-auto my-32 justify-center bg-background">
    <div
      class="mx-auto flex w-5/6 md:w-[30rem] flex-col bg-bg_light rounded-xl"
    >
      <!-- Login form -->
      <form
        class="flex flex-col space-y-6 p-4"
        @submit.prevent="resetPassword(email)"
      >
        <div class="text-center text-4xl font-medium">Reset Password</div>
        <div class="border-b2 w-full bg-transparent text-lg">
          <label class="">Email Address </label>
          <input
            v-if="resetErrors"
            class="block w-full px-2 py-2 text-xl font-normal text-black bg-white rounded border-2 border-danger"
            type="email"
            placeholder="example@email.com"
            v-model="email"
          />
          <input
            v-else-if="resetSuccess"
            class="block w-full px-2 py-2 text-xl font-normal text-black bg-white rounded border-2 border-success"
            type="email"
            placeholder="example@email.com"
            v-model="email"
          />
          <input
            v-else
            class="block w-full px-2 py-2 text-xl font-normal text-black bg-white rounded"
            type="email"
            placeholder="example@email.com"
            v-model="email"
          />
          <span v-if="resetErrors" class="font-medium text-sm text-danger">
            {{ resetErrors }}</span
          >
          <span v-if="resetSuccess" class="font-medium text-sm text-success">
            Success - Email sent!</span
          >
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
