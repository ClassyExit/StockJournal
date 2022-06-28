<template>
  <header>
    <div class="navbar bg-gray-800">
      <div class="flex-1">
        <router-link to="/dashboard" class="w-1/8">
          <img src="../../assets/images/logo.png" class="h-10" />
        </router-link>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li>
            <router-link to="" @click="showEmailModal">Contact</router-link>
          </li>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost rounded-btn"
              >Account</label
            >
            <ul
              tabindex="0"
              class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li>
                <a class="flex-1"
                  ><router-link :to="{ name: 'Profile' }"
                    >Profile</router-link
                  ></a
                >
              </li>
              <li>
                <a class="flex-1"
                  ><router-link to="#" @click="userStore.logout()"
                    >Logout</router-link
                  ></a
                >
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  </header>

  <EmailModal :modalActive="emailModal"
    ><div
      class="modal-header flex p-2 justify-between border-b-2 border-gray-600"
    >
      <div class="align-middle">
        <h1 class="text-lg text-white font-bold">SEND TICKET</h1>
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
                If you encounter any bugs, or would like a feature added, please
                send a ticket in!
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
  </EmailModal>
</template>

<script>
import { useUserStore } from "@/store/user";
import EmailModal from "./EmailModal.vue";
import { ref } from "vue";
export default {
  components: { EmailModal },
  setup() {
    const userStore = useUserStore();

    const emailModal = ref(false);

    const ticketForm = ref({ email: userStore.user.email, message: null });

    const hideEmailModal = () => {
      emailModal.value = false;
    };

    const showEmailModal = () => {
      emailModal.value = true;
    };

    const submitTicket = (ticketForm) => {
      // console.log(`Email: ${ticketForm.email} - Msg: ${ticketForm.message}`);
      //TODO: Inset email send here
      // https://nodemailer.com/about/

      ticketForm.message = null;
      emailModal.value = false;
    };

    return {
      userStore,
      showEmailModal,
      hideEmailModal,
      emailModal,
      submitTicket,
      ticketForm,
    };
  },
};
</script>

<style></style>
