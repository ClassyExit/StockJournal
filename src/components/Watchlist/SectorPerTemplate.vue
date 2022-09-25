<template>
  <div
    class="w-36 h-fit border-[0.1px] border-slate-800"
    :class="{
      ' bg-win': change > 0,
      'bg-loss': change < 0,
      'bg-neutral': change === 0,
    }"
  >
    <div class="sector text-black px-2">
      <label class="text-sm font-semibold">{{ sector }}</label>
    </div>
    <div class="change text-center text-black">
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
