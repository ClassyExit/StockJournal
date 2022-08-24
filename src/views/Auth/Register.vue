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
            v-if="authErrors"
            class="block w-full px-4 py-2 text-xl font-normal text-black bg-white rounded border-2 border-danger"
            type="email"
            placeholder="you@example.com"
            v-model="register_form.email"
          />
          <input
            v-else
            class="block w-full px-4 py-2 text-xl font-normal text-black bg-white rounded"
            type="email"
            placeholder="you@example.com"
            v-model="register_form.email"
          />
          <span v-if="authErrors" class="font-medium text-danger">
            {{ authErrors }}</span
          >
        </div>
        <div class="border-b2 w-full bg-transparent text-lg">
          <label class="">Password </label>
          <input
            v-if="authErrors"
            class="block w-full px-4 py-2 text-xl font-normal text-black bg-white rounded border-2 border-danger"
            type="password"
            placeholder="Password"
            v-model="register_form.password"
          />
          <input
            v-else
            class="block w-full px-4 py-2 text-xl font-normal text-black bg-white rounded"
            type="password"
            placeholder="Password"
            v-model="register_form.password"
          />
          <section class="text-right py-2"></section>
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

<style scoped></style>
