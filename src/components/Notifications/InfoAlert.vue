<template>
  <div
    class="flex flex-row flex-grow bg-info items-center px-4 py-3 rounded"
    role="alert"
  >
    <!-- Info svg -->
    <div class="pr-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    </div>

    <!-- Alert text -->
    <span class="flex flex-grow text-white"><slot /></span>

    <!-- Close notification -->
    <span class="relative top-0 bottom-0 right-0 pl-2">
      <svg
        :id="id"
        class="fill-current h-6 w-6 text-white"
        role="button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        @click="deleteNotification(id)"
      >
        <title>Close</title>
        <path
          d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
        />
      </svg>
    </span>
  </div>
</template>

<script>
import { useNotificationStore } from "@/store/notifications";
export default {
  props: {
    id: {
      type: [String, Number],
    },
  },
  setup() {
    const notificationStore = useNotificationStore();

    const { deleteNotification } = notificationStore;

    return { deleteNotification };
  },
};
</script>

<style></style>
