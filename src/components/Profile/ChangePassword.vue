<template>
  <div class="text-left text-4xl font-medium pb-4">Change Password</div>

  <form
    class="flex flex-col w-2/5 gap-4 place-items-left"
    @submit.prevent="changePasswordValid(passwordForm)"
  >
    <div class="w-4/5">
      <div class="flex flex-col border-b2 text-lg p-2">
        <label class="pr-2"> Current Password</label>
        <input
          v-if="passwordChangeErrors"
          v-model="passwordForm.currentPassword"
          class="rounded text-black bg-gray-500 border-2 border-danger"
        />
        <input
          v-else-if="passwordChangeSuccess"
          v-model="passwordForm.currentPassword"
          class="rounded text-black bg-gray-500 border-2 border-success"
        />
        <input
          v-else
          v-model="passwordForm.currentPassword"
          class="rounded text-black bg-gray-500"
        />
        <span
          v-if="passwordChangeSuccess"
          class="font-medium text-sm text-success"
          >{{ passwordChangeSuccess }}</span
        >
        <span
          v-if="passwordChangeErrors"
          class="font-medium text-sm text-danger"
          >{{ passwordChangeErrors }}</span
        >
      </div>
      <div class="flex flex-col border-b2 text-lg p-2">
        <label class="pr-2"> New Password (Min 6 chars.)</label>
        <input
          v-if="passwordChangeErrors"
          v-model="passwordForm.newPassword"
          class="rounded text-black bg-gray-500 border-2 border-danger"
        />
        <input
          v-else-if="passwordChangeSuccess"
          v-model="passwordForm.newPassword"
          class="rounded text-black bg-gray-500 border-2 border-success"
        />
        <input
          v-else
          v-model="passwordForm.newPassword"
          class="rounded text-black bg-gray-500"
        />
      </div>
      <div class="flex flex-col border-b2 text-lg p-2">
        <label class="pr-2"> Confirm Password</label>
        <input
          v-if="passwordChangeErrors"
          v-model="passwordForm.confirmPassword"
          class="rounded text-black bg-gray-500 border-2 border-danger"
        />
        <input
          v-else-if="passwordChangeSuccess"
          v-model="passwordForm.confirmPassword"
          class="rounded text-black bg-gray-500 border-2 border-success"
        />
        <input
          v-else
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
import { useNotificationStore } from "@/store/notifications";
import { storeToRefs } from "pinia";
export default {
  setup() {
    const userStore = useUserStore();
    userStore.passwordChangeErrors = false;
    userStore.passwordChangeSuccess = false;

    const notificationStore = useNotificationStore();

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
          "New password must be atleast 6 characters";
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
