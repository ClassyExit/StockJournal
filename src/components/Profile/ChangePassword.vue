<template>
  <div class="text-left text-4xl font-medium pb-4">Change Password</div>
  <div class="alerts">
    <div
      v-if="passwordChangeErrors"
      class="flex w-max p-4 mb-4 text-sm text-red-700 mt-2 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
      role="alert"
    >
      <Icon icon="entypo:info-with-circle" :inline="true" />
      <div>
        <span class="font-medium pl-2"> {{ passwordChangeErrors }}</span>
      </div>
    </div>
    <div
      v-if="passwordChangeSuccess"
      class="flex p-4 w-max mb-4 text-sm text-green-700 mt-2 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
      role="alert"
    >
      <Icon
        icon="entypo:info-with-circle"
        :inline="true"
        width="20"
        height="20"
      />
      <div>
        <span class="font-medium pl-2"> {{ passwordChangeSuccess }}</span>
      </div>
    </div>
  </div>
  <form
    class="w-2/5 grid grid-rows-3 gap-4 place-items-left"
    @submit.prevent="changePasswordValid(passwordForm)"
  >
    <div class="w-4/5">
      <div class="flex flex-col border-b2 text-lg p-2">
        <label class="pr-2"> Current Password</label>
        <input
          v-model="passwordForm.currentPassword"
          class="rounded text-black bg-gray-500"
        />
      </div>
      <div class="flex flex-col border-b2 text-lg p-2">
        <label class="pr-2"> New Password (Min 6 chars.)</label>
        <input
          v-model="passwordForm.newPassword"
          class="rounded text-black bg-gray-500"
        />
      </div>
      <div class="flex flex-col border-b2 text-lg p-2">
        <label class="pr-2"> Confirm Password</label>
        <input
          v-model="passwordForm.confirmPassword"
          class="rounded text-black bg-gray-500"
        />
      </div>
      <button type="submit" class="btn-success rounded p-2 mt-2 ml-2 font-bold">
        Save Changes
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useUserStore } from "@/store/user.js";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const userStore = useUserStore();
    userStore.passwordChangeErrors = false;
    userStore.passwordChangeSuccess = false;

    const { changePassword } = userStore;

    const { passwordChangeErrors, passwordChangeSuccess } =
      storeToRefs(userStore);

    let passwordForm = ref({});

    const changePasswordValid = (passwordForm) => {
      if (!passwordForm.currentPassword || !passwordForm.newPassword) {
        userStore.passwordChangeErrors =
          "Fill out all fields to change password";
        return;
      }
      if (Object.keys(passwordForm).length === 0) {
        return;
      } else if (passwordForm.newPassword !== passwordForm.confirmPassword) {
        userStore.passwordChangeErrors = "Passwords must match!";
      } else if (passwordForm.newPassword.length < 6) {
        userStore.passwordChangeErrors =
          "Password must be atleast 6 characters";
      } else {
        changePassword(passwordForm.currentPassword, passwordForm.newPassword);
      }

      if (passwordChangeSuccess) {
        passwordForm.newPassword = null;
        passwordForm.confirmPassword = null;
        passwordForm.currentPassword = null;
      }
    };

    return {
      passwordChangeErrors,
      passwordChangeSuccess,
      passwordForm,
      changePasswordValid,
      changePassword,
    };
  },
};
</script>

<style></style>
