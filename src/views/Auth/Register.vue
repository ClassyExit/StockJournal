<template>
  <!-- Auth -->
  <div class="flex-auto my-32 justify-center bg-background">
    <div
      class="mx-auto flex w-5/6 md:w-[30rem] flex-col bg-gray-800 rounded-xl"
    >
      <!-- Login form -->
      <form class="flex flex-col space-y-6 p-4" @submit.prevent="register">
        <div class="text-center text-4xl font-medium">Register</div>
        <div class="border-b2 w-full bg-transparent text-lg">
          <label class="">Email Address </label>
          <input
            class="block w-full px-4 py-2 text-xl font-normal text-black bg-gray-500 rounded"
            type="email"
            placeholder="you@example.com"
            v-model="register_form.email"
            :class="{ 'border-2 border-danger': authErrors }"
          />
          <span v-if="authErrors" class="font-medium text-danger">
            {{ authErrors }}</span
          >
        </div>
        <div class="border-b2 w-full bg-transparent text-lg">
          <label class="">Password </label>
          <input
            class="block w-full px-4 py-2 text-xl font-normal text-black bg-gray-500 rounded"
            type="password"
            placeholder="Password"
            v-model="register_form.password"
            :class="{ 'border-2 border-danger': authErrors }"
          />
        </div>

        <button
          type="submit"
          class="text-white w-full px-4 py-2 border border-violet-900 rounded-lg hover:bg-violet-900"
        >
          REGISTER
        </button>
      </form>
      <section class="px-4 py-4 text-gray-400 text-lg text-center">
        Have an account?
        <router-link class="text-white" :to="{ path: '/login' }"
          >Log In</router-link
        >
      </section>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useUserStore } from "../../store/user.js";
import { storeToRefs } from "pinia";

export default {
  computed: {
    errorMsg() {
      return this.userStore.getErrors;
    },
  },
  setup() {
    const register_form = ref({});
    const userStore = useUserStore();

    userStore.authErrors = false;
    const { authErrors } = storeToRefs(userStore);

    const register = () => {
      userStore.register(register_form.value);
    };

    return {
      register,
      register_form,
      userStore,
      authErrors,
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
