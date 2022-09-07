<template>
  <div class="text-left text-4xl font-medium pb-4">Account Details</div>

  <form
    class="w-2/5 grid grid-rows-3 gap-4 place-items-left"
    @submit.prevent="updateDisplayName(changes)"
  >
    <div class="w-4/5">
      <div class="flex flex-col border-b2 text-lg p-2">
        <label class="pr-2"> Name</label>
        <input
          v-if="success"
          v-model="changes.name"
          class="rounded text-black bg-gray-500 border-2 border-success"
        />
        <input
          v-else-if="error"
          v-model="changes.name"
          class="rounded text-black bg-gray-500 border-2 border-danger"
        />
        <input
          v-else
          v-model="changes.name"
          class="rounded text-black bg-gray-500"
        />
        <span v-if="error" class="font-medium text-sm text-danger">
          Something went wrong. Try again later.</span
        >
        <span v-if="success" class="font-medium text-sm text-success">
          Name Updated!
        </span>
      </div>

      <div class="flex flex-col border-b2 text-lg p-2">
        <label class="pr-2 text-"> Current Email: {{ user.email }}</label>
      </div>

      <button type="submit" class="btn-success rounded p-2 mt-2 ml-2 font-bold">
        Save Changes
      </button>
    </div>
  </form>
</template>

<script>
import { useUserStore } from "@/store/user";
import { ref } from "vue";
import { updateProfile } from "@firebase/auth";
export default {
  setup() {
    const userStore = useUserStore();

    const { user } = userStore;
    const changes = ref({ name: `${user.displayName}` });

    const success = ref(false);
    const error = ref(false);

    const updateDisplayName = (changes) => {
      updateProfile(user, {
        displayName: `${changes.name}`,
      })
        .then(() => {
          // Profile updated!
          success.value = true;
        })
        .catch((error) => {
          // An error occurred
          error.value = true;
        });
    };
    return {
      userStore,
      user,
      updateDisplayName,
      changes,
      success,
      error,
    };
  },
};
</script>

<style></style>
