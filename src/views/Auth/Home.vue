<template>
  <div class="text-headline bg-background">
    <div class="py-20 hero">
      <div class="container mx-auto px-6">
        <div class="text-4xl font-bold mb-2 text-headline">
          Tracking Your Trades Made Easy.
        </div>
        <div class="text-2xl mb-6 text-headline">
          Free. No Ads. Simple to use!
        </div>
        <router-link to="/login">
          <button
            class="transform hover:scale-110 transition duration-300 ease-in-out bg-btn_bg font-bold rounded-full py-6 px-8 shadow-lg uppercase tracking-wider"
          >
            Get Started
          </button>
        </router-link>
      </div>
    </div>

    <section class="container mx-auto px-6" aria-label="features">
      <div class="divide-y divide-solid divide-gray-700">
        <div class="flex items-center flex-wrap mb-5">
          <div class="w-full md:w-1/2 px-4 md:order-1">
            <h4 class="text-3xl text-headline font-bold mb-3 text-center">
              Track Your Trades
            </h4>
            <p class="text-headline mb-8 text-left">
              A simple stock trading journal that can be used to record,
              analyze, and reevaulate your trading performance.
            </p>
          </div>
          <div class="w-full md:w-1/2 px-4 md:order-2">
            <img src="@/assets/images/exampleTrades.png" alt="exampleTrades" />
          </div>
        </div>
        <div class="flex items-center flex-wrap mb-5 py-5">
          <div class="w-full md:w-1/2 px-4 md:order-2">
            <h4 class="text-3xl text-headline font-bold mb-3 text-center">
              Watchlist
            </h4>
            <p class="text-headline mb-8 text-center">
              Interested in a stock? Add to your watchlist. View your interests
              all in one place!
            </p>
          </div>

          <div class="w-full md:w-1/2 px-4 md:order-1">
            <img
              src="@/assets/images/exampleWatchlist2.png"
              alt="exampleWatchlist"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto mb-8 mt-16" aria-label="steps">
      <h1
        class="text-center font-extrabold text-transparent text-4xl bg-clip-text mb-8 bg-gradient-to-r from-green-400 via-blue-500 to-indigo-700"
      >
        Three Steps To Boost Performance
      </h1>
      <div
        class="flex flex-col space-y-6 mx-6 md:grid md:grid-cols-3 md:space-y-0 md:items-center md:align-center"
      >
        <div
          class="flex flex-col md:mx-8 p-10 md:h-96 bg-gradient-to-r from-indigo-900"
        >
          <div class="self-center">
            <Icon
              icon="mdi:application-brackets-outline"
              width="50"
              height="50"
            />
          </div>
          <div class="text-3xl pt-4 pb-4 text-headline">
            Journal Your Trades
          </div>
          <div class="text-paragraph">
            Our simple and elegant trade journal offers quick and easy entries.
            Not only that, but is constantly being improved on the usability and
            functionality.
          </div>
        </div>
        <div class="flex flex-col md:mx-8 p-10 bg-bg_gray md:h-96">
          <div class="self-center">
            <Icon
              icon="akar-icons:settings-horizontal"
              width="50"
              height="50"
            />
          </div>
          <div class="text-3xl pt-4 pb-4 text-headline">Find Patterns</div>
          <div class="text-paragraph">
            Analyze your trades, locate where you're going right but also where
            things are taking a dive for. You can use these patterns to
            determine feasible ideas and strategies.
          </div>
        </div>
        <div
          class="flex flex-col md:mx-8 p-10 bg-bg_gray md:h-96 bg-gradient-to-l from-indigo-900"
        >
          <div class="self-center">
            <Icon icon="eos-icons:performance" width="50" height="50" />
          </div>
          <div class="text-3xl pt-4 pb-4 text-headline">
            Improve Your Performance
          </div>
          <div class="text-paragraph">
            The sooner you're able to identify your trading mistakes, the
            quicker you can improve your strategy and become more profitable!
          </div>
        </div>
      </div>
    </section>

    <section class="bg-bg_light pb-2 mb-2" aria-label="FAQ">
      <div class="min-w-screen flex flex-col items-center">
        <p class="text-4xl pt-4 pb-6">FAQ</p>
        <div
          class="flex flex-col md:flex-row justify-center gap-6 md:gap-32 pb-8"
        >
          <div class="w-full px-4 md:px-0 md:w-1/4">
            <h1 class="text-2xl text-headline pb-2">What's this?</h1>
            <p class="text-paragraph">
              This project was developed using the Vue.js framework. A stock
              journal is a log that can be used to record your trades. By
              recording your trades, you can reflect upon previous trades and
              evaluate any future trades.
            </p>
          </div>
          <div class="w-full px-4 md:px-0 md:w-1/4">
            <h1 class="text-2xl text-headline pb-2">Free to use</h1>
            <p class="text-paragraph">
              No costs involved. Try it out, tell us what you think and share
              any features or suggestions you may have!
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center mb-4 gap-1">
        <div class="text-headline text-lg">Have any Questions?</div>
        <router-link
          to=""
          @click="openEmailModal"
          class="bg-white rounded text-lg p-3 bg-gradient-to-r from-indigo-600 to-blue-900"
        >
          Contact Us
        </router-link>
      </div>
    </section>
    <EmailModal />
  </div>
</template>

<script>
import EmailModal from "@/components/Modals/EmailModal.vue";
import { useUserStore } from "@/store/user";
import { resetStore } from "@/store/reset-store";

export default {
  components: {
    EmailModal,
  },
  setup() {
    resetStore();
    const userStore = useUserStore();
    const openEmailModal = () => {
      userStore.showEmailModal = true;
    };

    return {
      openEmailModal,
    };
  },
};
</script>

<style></style>
