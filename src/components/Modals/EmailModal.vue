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
              <h1 class="text-lg text-white font-bold pt-2 pl-2">CONTACT US</h1>
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
          <!-- body -->
          <div class="modal-body">
            <section>
              <form class="w-full min-w-lg">
                <div class="flex flex-row justify-around w-full">
                  <div class="w-2/5">
                    <label
                      for="email"
                      class="block uppercase text-white text-xs font-bold mb-2 mt-2"
                      >E-mail</label
                    >
                    <input
                      class="block w-full text-black text-lg font-semibold bg-gray-600 text-gray-700 rounded py-3 px-4 mb-3"
                      id="email"
                      type="email"
                      v-model="ticketForm.email"
                      :class="{
                        'border-2 border-danger': emailStatus == 400,
                        'border-2 border-success': emailStatus == 200,
                      }"
                    />
                  </div>

                  <div class="w-2/5">
                    <label
                      class="block uppercase text-white text-xs font-bold mb-2 mt-2"
                      >Subject</label
                    >
                    <select
                      class="block w-full text-black text-lg font-semibold bg-gray-600 text-gray-700 rounded py-3 px-4 mb-3"
                      id="subject"
                      v-model="ticketForm.subject"
                      :class="{
                        'border-2 border-danger': emailStatus == 400,
                        'border-2 border-success': emailStatus == 200,
                      }"
                    >
                      <option class="text-white text-xl" value="bug">
                        Bug
                      </option>
                      <option class="text-white text-xl" value="question">
                        Question
                      </option>
                      <option class="text-white text-xl" value="feedback">
                        Feedback
                      </option>
                      <option class="text-white text-xl" value="feature">
                        Request Feature
                      </option>
                      <option class="text-white text-xl" value="bug">
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                <div class="flex flex-wrap px-3">
                  <div class="w-full px-3">
                    <label
                      class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                      for="message"
                    >
                      Message
                    </label>
                    <textarea
                      class="no-resize block w-full bg-gray-600 text-black font-medium rounded px-4 mb-3 h-48 resize-none"
                      id="message"
                      v-model="ticketForm.message"
                      :class="{
                        'border-2 border-danger': emailStatus == 400,
                        'border-2 border-success': emailStatus == 200,
                      }"
                    ></textarea>
                  </div>
                </div>

                <div v-if="emailStatus" class="px-5">
                  <span
                    v-if="emailStatus == 200"
                    class="text-success text-xl"
                    >{{ emailStatusMsg }}</span
                  >
                  <span v-else class="text-danger text-xl">{{
                    emailStatusMsg
                  }}</span>
                </div>

                <div class="flex justify-end">
                  <div class="px-4 py-2">
                    <button
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
    const { showEmailModal, emailStatus, emailStatusMsg } =
      storeToRefs(userStore);

    let ticketForm = ref({ email: null, message: null, subject: null });

    const hideEmailModal = () => {
      userStore.showEmailModal = false;
      userStore.emailStatus = null;
      userStore.emailStatusMsg = null;

      console.log("Hello");
      // Reset Form Data
      ticketForm = {
        email: null,
        message: null,
        subject: null,
      };
    };

    const submitTicket = async (ticketForm) => {
      if (!ticketForm.email || !ticketForm.subject || !ticketForm.message) {
        userStore.emailStatus = 400;
        userStore.emailStatusMsg = "Please fill out all fields.";
        return;
      }

      await userStore.sendEmailSupport(ticketForm);

      console.log(ticketForm);
      ticketForm = {
        email: null,
        message: null,
        subject: null,
      };
      console.log(ticketForm);
    };

    return {
      ticketForm,
      submitTicket,
      showEmailModal,
      hideEmailModal,
      emailStatus,
      emailStatusMsg,
    };
  },
};
</script>

<style></style>
