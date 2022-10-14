<template>
  <div
    class="w-36 h-[5rem] border-[0.1px] border-slate-800"
    :class="{
      ' bg-win': change > 0,
      'bg-loss': change < 0,
      'bg-neutral': change === 0,
    }"
  >
    <div class="sector text-black px-2 h-1/2">
      <label class="text-sm font-semibold">{{ sector }}</label>
    </div>
    <div
      class="w-full h-1/2 flex items-end justify-center text-center text-black font-medium"
    >
      <label class="text-center">{{
        Intl.NumberFormat("en-US", {
          style: "percent",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(change / 100)
      }}</label>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  sector: String,
  change: String | Number,
});
</script>

<style lang="scss" scoped></style>
