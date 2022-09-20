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
            class="block w-full px-2 py-2 text-xl font-normal text-black bg-gray-500 rounded"
            type="email"
            placeholder="example@email.com"
            v-model="email"
            :class="{
              'border-2 border-danger': resetErrors,
              'border-2 border-success': resetSuccess,
            }"
          />
          <span v-if="resetErrors" class="font-medium text-lg text-danger">
            {{ resetErrors }}</span
          >
          <span v-if="resetSuccess" class="font-medium text-lg text-success">
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

<style scoped>
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: black;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: black;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: black;
}
</style>
