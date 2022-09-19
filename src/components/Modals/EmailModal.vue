<template>
  <teleport to="body">
    <div
      ref="modal-backdrop"
      class="fixed z-10 inset-0 overflow-y-auto backdrop-blur-md"
      v-show="showEmailModal"
    >
      <div class="flex items-center justify-center min-h-screen text-center">
        <div
          class="bg-bg_light rounded-lg text-left overflow-hidden shadow-xl w-3/4 md:w-1/2"
          role="dialog"
          ref="modal"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div
            class="modal-header flex p-2 justify-between border-b-2 border-gray-600"
          >
            <div class="align-middle">
              <h1 class="text-lg text-white font-bold">SUPPORT</h1>
            </div>
            <div>
              <button class="btn btn-square btn-sm" @click="hideEmailModal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <!-- Content -->
          <div class="content">
            <!-- Content -->
            <section>
              <form class="w-full min-w-lg">
                <div class="flex mb-6 px-4">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase text-white text-xs font-bold mb-2 mt-2"
                      for="grid-password"
                    >
                      E-mail
                    </label>
                    <input
                      class="block w-full text-black bg-gray-600 text-gray-700 rounded py-3 px-4 mb-3"
                      id="email"
                      type="email"
                      v-model="ticketForm.email"
                    />
                    <p class="text-white text-xs italic">
                      If you encounter any bugs, or would like a feature added,
                      please send a ticket in!
                    </p>
                  </div>
                </div>
                <div class="flex flex-wrap px-3">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                      for="grid-password"
                    >
                      Message
                    </label>
                    <textarea
                      class="no-resize block w-full bg-gray-600 text-black rounded px-4 mb-3 h-48 resize-none"
                      id="message"
                      v-model="ticketForm.message"
                    ></textarea>
                  </div>
                </div>
                <div class="flex justify-end">
                  <div class="px-4 py-2">
                    <button
                      :disabled="!ticketForm.message"
                      :class="{
                        'disabled cursor-not-allowed': !ticketForm.message,
                      }"
                      class="shadow btn-success text-black font-bold py-2 px-4 rounded"
                      type="button"
                      @click="submitTicket(ticketForm)"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { useNotificationStore } from "@/store/notifications";
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
import { ref } from "vue";
export default {
  setup() {
    const notificationStore = useNotificationStore();
    const userStore = useUserStore();

    // Email
    const { showEmailModal } = storeToRefs(userStore);

    const ticketForm = ref({ email: userStore.user.email, message: null });

    const hideEmailModal = () => {
      userStore.showEmailModal = false;
    };

    const submitTicket = (ticketForm) => {
      //TODO: Send email
      // https://nodemailer.com/about/
      try {
        notificationStore.addGlobalNotification(
          "success",
          "We recieved your message. We'll get back to you as soon as possible. Thank you!"
        );
      } catch (error) {
        console.log(error);
        notificationStore.addGlobalNotification(
          "danger",
          "Uh-oh. Unable to send in support tickets. Please try again later."
        );
      }
      ticketForm.message = null;
      userStore.showEmailModal = false;
    };

    return {
      ticketForm,
      submitTicket,
      showEmailModal,
      hideEmailModal,
    };
  },
};
</script>

<style></style>
