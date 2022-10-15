<template>
  <div
    class="flex flex-row flex-grow bg-white items-center px-4 py-3 border-l-8 border-green-500"
    role="alert"
    :class="{
      'border-green-500': type === 'success',
      'border-blue-500': type === 'info',
      'border-yellow-300': type === 'warning',
      'border-red-500': type === 'error',
    }"
  >
    <!-- Notification Icon -->
    <div
      v-if="alert[type].icon"
      class="p-2 bg-gray-500 items-center justify-center rounded-full"
      :class="{
        'bg-green-500': type === 'success',
        'bg-blue-500': type === 'info',
        'bg-yellow-300': type === 'warning',
        'bg-red-500': type === 'error',
      }"
    >
      <div v-html="alert[type].icon"></div>
    </div>

    <!-- Alert text -->
    <div class="flex flex-grow flex-col px-2">
      <div class="text-black font-semibold text-lg" :value="title">
        {{ title }}
      </div>
      <div class="text-slate-500 text-sm" :value="message">{{ message }}</div>
    </div>

    <!-- Close -->
    <div class="relative top-0 bottom-0 right-0 pl-2">
      <svg
        :id="id"
        class="h-6 w-6 text-black"
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
    </div>
  </div>
</template>

<script>
import { useNotificationStore } from "@/store/notifications";
export default {
  props: {
    id: [String, Number],
    type: [String],
    message: [String],
    title: [String],
  },
  setup() {
    const alert = {
      info: {
        accent_color: "blue-500",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="white" d="M12.432 0c1.34 0 2.01.912 2.01 1.957c0 1.305-1.164 2.512-2.679 2.512c-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141c-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467c1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271c.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>`,
      },
      error: {
        accent_color: "red-500",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-width="2" d="M20 20L4 4m16 0L4 20"/></svg>`,
      },
      warning: {
        accent_color: "yellow-500",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="#ffffff" d="M305.486 405.211c0 27.191-21.752 49.486-49.486 49.486c-27.734 0-49.486-22.295-49.486-49.486c0-27.19 21.752-49.485 49.486-49.485c27.734 0 49.486 22.296 49.486 49.485zm-26.808-98.971h-45.873c-6.8 0-12.398-5.347-12.708-12.14l-9.711-212.197c-.332-7.247 5.454-13.303 12.708-13.303h65.781c7.266 0 13.056 6.075 12.707 13.332l-10.197 212.197c-.325 6.781-5.918 12.111-12.707 12.111z"/></svg>`,
      },
      success: {
        accent_color: "green-500",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path fill="#ffffff" d="M34.459 1.375a2.999 2.999 0 0 0-4.149.884L13.5 28.17l-8.198-7.58a2.999 2.999 0 1 0-4.073 4.405l10.764 9.952s.309.266.452.359a2.999 2.999 0 0 0 4.15-.884L35.343 5.524a2.999 2.999 0 0 0-.884-4.149z"/></svg>`,
      },
    };

    const notificationStore = useNotificationStore();

    const { deleteNotification } = notificationStore;

    return { deleteNotification, alert };
  },
};
</script>

<style></style>
