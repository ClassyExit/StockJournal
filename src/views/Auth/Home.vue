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

    <section
      class="container mx-auto px-6 divide-y divide-solid divide-gray-700"
    >
      <div class="flex items-center flex-wrap mb-5">
        <div class="w-full md:w-1/2 px-4 md:order-1">
          <h4 class="text-3xl text-headline font-bold mb-3 text-center">
            Track Your Trades
          </h4>
          <p class="text-headline mb-8 text-center">
            Add, edit, and delete trades! A simple UI to show your progress on
            your trades.
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
            Interested in a stock? Add to your watchlist!
          </p>
        </div>

        <div class="w-full md:w-1/2 px-4 md:order-1">
          <img
            src="@/assets/images/exampleWatchlist2.png"
            alt="exampleWatchlist"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style></style>
