<template>
  <div class="text-gray-700 bg-gray-900 h-full">
    <div class="py-20 hero">
      <div class="container mx-auto px-6">
        <div class="text-4xl font-bold mb-2 text-white">
          Tracking Your Trades Made Easy.
        </div>
        <div class="text-2xl mb-6 text-gray-200">
          Free. No Ads. Simple to use!
        </div>
        <button
          class="transform hover:scale-110 transition duration-300 ease-in-out bg-white font-bold rounded-full py-6 px-8 shadow-lg uppercase tracking-wider"
        >
          <router-link to="/login">Get Started</router-link>
        </button>
      </div>
    </div>
    <section
      class="container mx-auto px-6 divide-y divide-solid divide-gray-700"
    >
      <div class="flex items-center flex-wrap mb-5">
        <div class="w-full md:w-1/2 px-4">
          <h4 class="text-3xl text-white font-bold mb-3 text-center">
            Track Your Trades
          </h4>
          <p class="text-white mb-8 text-center">
            Add, edit, and delete trades! A simple UI to show your progress on
            your trades.
          </p>
        </div>
        <div class="w-full md:w-1/2 px-4">
          <img src="@/assets/images/exampleTrades.png" alt="exampleTrades" />
        </div>
      </div>
      <div class="flex items-center flex-wrap mb-5 py-5">
        <div class="w-full md:w-1/2 px-4">
          <img
            src="@/assets/images/exampleWatchlist.png"
            alt="exampleWatchlist"
          />
        </div>
        <div class="w-full md:w-1/2 px-4">
          <h4 class="text-3xl text-white font-bold mb-3 text-center">
            Watchlist
          </h4>
          <p class="text-white mb-8 text-center">
            Interested in a stock? Add to your watchlist!
          </p>
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
