<template>
  <div class="contents-container bg-background">
    <div class="grid grid-cols-7 justify-items-center items-center py-1">
      <!-- Stock Ticker -->
      <td>
        <div class="flex flex-col text-white text-center uppercase">
          <label class="text-lg" :value="ticker">{{ ticker }}</label>
          <label class="text-xs font-thin text-gray-400" :value="name">{{
            name
          }}</label>
        </div>
      </td>
      <!-- Price -->
      <td>
        <div class="flex text-white">
          <label class="text-win" :value="price">
            {{
              Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(price)
            }}
          </label>
        </div>
      </td>

      <td>
        <div class="flex flex-col text-white text-center uppercase">
          <label
            class="text-lg"
            :class="{
              'text-win': dailyChange / 100 > 0,
              'text-loss': dailyChange / 100 < 0,
            }"
            :value="dailyChange"
            >{{
              Intl.NumberFormat("en-US", {
                style: "percent",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(dailyChange / 100)
            }}</label
          >
        </div>
      </td>

      <td>
        <div class="flex">
          <label class="text-paragraph" :value="fiftytwo_week_low">
            {{
              Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(fiftytwo_week_low)
            }}
          </label>
        </div>
      </td>

      <td>
        <div class="flex">
          <label class="text-paragraph" :value="fiftytwo_week_high">
            {{
              Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(fiftytwo_week_high)
            }}
          </label>
        </div>
      </td>

      <td>
        <div class="flex text-white">
          <label class="text-paragraph" :value="market_cap">
            {{
              Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(market_cap)
            }}
          </label>
        </div>
      </td>
      <!-- Actions -->
      <td>
        <div class="flex">
          <slot></slot>
        </div>
      </td>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ticker: {
      type: [String],
      default: null,
    },
    name: {
      type: [String],
      default: null,
    },
    price: {
      type: [Number, String],
      default: null,
    },
    dailyChange: {
      type: [Number],
      default: null,
    },
    since_add_percent: {
      type: [Number, String],
      default: null,
    },
    since_add_base: {
      type: [Number, String],
      default: null,
    },
    fiftytwo_week_low: {
      type: [Number, String],
      default: null,
    },
    fiftytwo_week_high: {
      type: [Number, String],
      default: null,
    },
    market_cap: {
      type: [Number, String],
      default: null,
    },
  },
};
</script>

<style scoped></style>
