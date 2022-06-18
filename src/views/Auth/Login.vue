<template>
  <!-- Auth -->
  <div class="flex-auto my-32 justify-center bg-background">
    <div class="mx-auto flex w-[30rem] flex-col bg-gray-800 rounded-xl">
      <!-- Login form -->
      <form
        class="flex w-[30rem] flex-col space-y-6 p-4"
        @submit.prevent="login"
      >
        <div class="text-center text-4xl font-medium">Login</div>
        <div class="border-b2 w-full bg-transparent text-lg">
          <label class="">Email Address </label>
          <input
            class="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white rounded"
            type="email"
            placeholder="you@example.com"
            v-model="login_form.email"
          />
          <div
            v-if="authErrors"
            class="flex w-max p-4 mb-4 text-sm text-red-700 mt-2 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            role="alert"
          >
            <Icon icon="entypo:info-with-circle" :inline="true" />
            <div>
              <span class="font-medium pl-2"> {{ authErrors }}</span>
            </div>
          </div>
        </div>
        <div class="border-b2 w-full bg-transparent text-lg">
          <label class="">Password </label>
          <input
            class="block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white rounded"
            type="password"
            placeholder="Password"
            v-model="login_form.password"
          />

          <section class="text-right py-2">
            <router-link :to="{ path: '/reset' }">Forgot Password?</router-link>
          </section>
        </div>

        <button
          type="submit"
          class="text-white w-full px-4 py-2 border border-violet-900 rounded-lg hover:bg-violet-900"
        >
          LOG IN
        </button>
      </form>
      <section class="px-4 py-4 text-gray-400 text-lg text-center">
        Need an account?
        <router-link class="text-white" :to="{ path: '/register' }"
          >Sign Up</router-link
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
    const login_form = ref({});
    const userStore = useUserStore();

    userStore.authErrors = false;
    const { authErrors } = storeToRefs(userStore);

    const login = () => {
      userStore.login(login_form.value);
    };

    return {
      login,
      login_form,
      userStore,
      authErrors,
    };
  },
};
</script>

<style scoped>
a.link {
  text-decoration: none;
  color: #747474;
  letter-spacing: 0.2px;
  display: inline-block;
  margin-top: 20px;
}
</style>
