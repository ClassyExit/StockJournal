<template>
  <div class="text-left text-4xl font-medium pb-4">Account Details</div>
  <div
    v-if="success"
    class="alert bg-green-200 rounded-lg text-base text-green-700 inline-flex items-center w-auto alert-dismissible fade show"
    role="alert"
  >
    <strong class="mr-1">Success! </strong> Account name updated!
    <button
      type="button"
      class="btn-close box-content w-4 h-4 p-1 ml-auto border-none rounded-none"
      data-bs-dismiss="alert"
      aria-label="Close"
      @click="success = false"
    >
      X
    </button>
  </div>

  <form
    class="w-2/5 grid grid-rows-3 gap-4 place-items-left"
    @submit.prevent="updateDisplayName(changes)"
  >
    <div class="w-4/5">
      <div class="flex flex-col border-b2 text-lg p-2">
        <label class="pr-2"> Name</label>
        <input v-model="changes.name" class="rounded text-black bg-gray-500" />
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
          // ...
        });
    };
    return {
      userStore,
      user,
      updateDisplayName,
      changes,
      success,
    };
  },
};
</script>

<style></style>
