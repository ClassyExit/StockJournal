<template>
  <div class="contents-container bg-gray-800">
    <div class="grid grid-cols-7 justify-items-center items-center py-1">
      <!-- Stock Ticker -->
      <td>
        <div class="flex text-white uppercase">
          <label :value="ticker">{{ ticker }}</label>
        </div>
      </td>
      <!-- Stock Name -->
      <td>
        <div class="flex text-white">
          <p :value="name" class="rounded px-2 py-0.2">
            {{ name }}
          </p>
        </div>
      </td>
      <!-- Price -->
      <td>
        <div class="flex text-white">
          <p :value="price">
            {{
              Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(price)
            }}
          </p>
        </div>
      </td>
      <!-- Since Added -->
      <td>
        <div class="flex flex-col">
          <p
            :value="since_add_percent"
            class="rounded px-2 py-0.2"
            :class="{
              'text-win': since_add_percent > 0,
              'text-loss': since_add_percent < 0,
              'text-neutral': since_add_percent == 0,
            }"
          >
            {{
              Intl.NumberFormat("en-US", {
                style: "percent",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(since_add_percent / 100)
            }}
          </p>
          <p
            :value="since_add_base"
            class="rounded px-2 py-0.2"
            :class="{
              'text-win': since_add_base > 0,
              'text-loss': since_add_base < 0,
              'text-neutral': since_add_base == 0,
            }"
          >
            {{
              Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(since_add_base)
            }}
          </p>
        </div>
      </td>
      <!-- 52 Week Low -->
      <td>
        <div class="flex text-white">
          <p :value="fiftytwo_week_low" class="rounded px-2 py-0.2">
            {{
              Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(fiftytwo_week_low)
            }}
          </p>
        </div>
      </td>
      <!-- 52 Week High -->
      <td>
        <div class="flex text-white">
          <p :value="fiftytwo_week_high" class="rounded px-2 py-0.2">
            {{
              Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(fiftytwo_week_high)
            }}
          </p>
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
  },
};
</script>

<style scoped></style>
