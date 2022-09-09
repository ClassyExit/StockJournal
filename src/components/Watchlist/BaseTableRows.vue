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
          <p :value="price">${{ price }}</p>
        </div>
      </td>
      <!-- Since Added -->
      <td>
        <div class="flex flex-col">
          <p
            :value="since_add_percent"
            class="rounded px-2 py-0.2"
            :class="{
              green: since_add_percent > 0,
              red: since_add_percent < 0,
              neutral: since_add_percent == 0,
            }"
          >
            {{ since_add_percent }}%
          </p>
          <p
            :value="since_add_base"
            class="rounded px-2 py-0.2"
            :class="{
              green: since_add_base > 0,
              red: since_add_base < 0,
              neutral: since_add_base == 0,
            }"
          >
            ${{ since_add_base }}
          </p>
        </div>
      </td>
      <!-- 52 Week Low -->
      <td>
        <div class="flex text-white">
          <p :value="fiftytwo_week_low" class="rounded px-2 py-0.2">
            ${{ fiftytwo_week_low }}
          </p>
        </div>
      </td>
      <!-- 52 Week High -->
      <td>
        <div class="flex text-white">
          <p :value="fiftytwo_week_high" class="rounded px-2 py-0.2">
            ${{ fiftytwo_week_high }}
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

<style scoped>
.green {
  color: rgb(4, 167, 4);
}
.red {
  color: rgb(243, 3, 3);
}
.neutral {
  color: rgb(240, 235, 235, 0.8);
}
</style>
