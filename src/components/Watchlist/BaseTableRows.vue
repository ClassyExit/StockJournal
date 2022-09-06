<template>
  <div class="contents-container bg-gray-800">
    <div class="grid auto-rows-auto md:grid-cols-7 justify-items-center py-4">
      <!-- Stock Ticker -->
      <td>
        <div class="flex text-white uppercase">
          <label :value="ticker">{{ ticker }}</label>
        </div>
      </td>
      <!-- Stock Name -->
      <td>
        <div class="flex">
          <p :value="name" class="rounded px-2 py-0.2">
            {{ name }}
          </p>
        </div>
      </td>
      <!-- Price -->
      <td class="">
        <div class="flex text-white">
          <p :value="price">${{ price }}</p>
        </div>
      </td>
      <!-- Since Added -->
      <td>
        <div class="flex">
          <p :value="since_add" class="rounded px-2 py-0.2">
            {{ since_add * 100 }} (% {{ since_add }})
          </p>
        </div>
      </td>
      <!-- 52 Week Low -->
      <td>
        <div class="flex">
          <p :value="fiftytwo_week_low" class="rounded px-2 py-0.2">
            ${{ fiftytwo_week_low }}
          </p>
        </div>
      </td>
      <!-- 52 Week High -->
      <td>
        <div class="flex">
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
      type: [Number],
      default: null,
    },
    since_add: {
      type: [Number],
      default: null,
    },
    fiftytwo_week_low: {
      type: [Number],
      default: null,
    },
    fiftytwo_week_high: {
      type: [Number],
      default: null,
    },
  },
};
</script>

<style></style>
