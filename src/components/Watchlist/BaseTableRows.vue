<template>
  <div class="contents-container rounded bg-gray-800 m-4">
    <div class="grid auto-rows-auto md:grid-rows-4 justify-items-center py-4">
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
  },
};
</script>

<style></style>
