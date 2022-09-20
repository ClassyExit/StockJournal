<template>
  <!-- Auth -->
  <div class="flex-auto my-32 justify-center bg-background">
    <div
      class="mx-auto flex w-5/6 md:w-[30rem] flex-col bg-bg_light rounded-xl"
    >
      <!-- Login form -->
      <form class="flex flex-col space-y-6 p-4" @submit.prevent="login">
        <div class="text-center text-4xl font-medium">Login</div>
        <div class="border-b2 w-full bg-transparent text-lg">
          <label class="">Email Address </label>
          <input
            class="block w-full px-4 py-2 text-xl font-normal text-black bg-gray-500 rounded"
            type="email"
            placeholder="you@example.com"
            v-model="login_form.email"
            :class="{ 'border-2 border-danger': authErrors }"
          />
          <span v-if="authErrors" class="font-medium text-danger">
            {{ authErrors }}</span
          >
        </div>
        <div class="border-b2 w-full bg-transparent text-lg">
          <label class="">Password </label>
          <input
            class="block w-full px-4 py-2 text-xl font-normal text-black bg-gray-500 bg-gray-500 rounded"
            type="password"
            placeholder="Password"
            v-model="login_form.password"
            :class="{ 'border-2 border-danger': authErrors }"
          />

          <section class="text-right py-2">
            <router-link :to="{ path: '/reset' }">Forgot Password?</router-link>
          </section>
        </div>
        <button
          type="submit"
          class="text-white w-full px-4 py-2 border border-btn_border rounded-lg hover:bg-btn_highlight"
        >
          LOG IN
        </button>
      </form>
      <section class="px-4 py-4 text-paragraph text-lg text-center">
        Need an account?
        <router-link class="text-white" :to="{ path: '/register' }"
          >Register Here</router-link
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
