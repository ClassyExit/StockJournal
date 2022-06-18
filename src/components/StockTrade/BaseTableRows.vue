<template>
  <div class="contents-container rounded bg-gray-800 my-4">
    <div class="grid grid-cols-10 justify-items-center py-4">
      <!-- Stock Name -->
      <td>
        <div class="flex text-white">
          <label :value="ticker">{{ ticker }}</label>
        </div>
      </td>
      <!-- STATUS -->
      <td>
        <div class="flex">
          <p
            :value="status"
            class="rounded px-2 py-0.2"
            :class="{
              loss: status === `LOSS`,
              win: status === `WIN`,
              even: status === 'EVEN',
              open: status === 'OPEN',
              closed: status === 'CLOSED',
            }"
          >
            {{ status }}
          </p>
        </div>
      </td>
      <!-- QTY -->
      <td>
        <div class="flex text-white">
          <p v-if="qty" :value="qty">{{ qty.toFixed(2) }}</p>
          <p v-else :value="qty">-</p>
        </div>
      </td>
      <!-- ENTRY -->
      <td>
        <div class="flex text-white">
          <p v-if="entry" :value="entry">${{ entry.toFixed(2) }}</p>
          <p v-else :value="entry">-</p>
        </div>
      </td>
      <!-- ENTRY TOTAL -->
      <td>
        <div class="flex text-white">
          <p v-if="entryTotal" :value="entryTotal">
            ${{ entryTotal.toFixed(2) }}
          </p>
          <p v-else :value="entryTotal">-</p>
        </div>
      </td>
      <!-- EXIT -->
      <td>
        <div class="flex text-white">
          <p v-if="exit" :value="exit">${{ exit.toFixed(2) }}</p>
          <p v-else :value="exit">-</p>
        </div>
      </td>

      <!-- EXIT TOTAL -->
      <td>
        <div class="flex text-white">
          <p v-if="exitTotal" :value="exitTotal">${{ exitTotal.toFixed(2) }}</p>
          <p v-else :value="exitTotal">-</p>
        </div>
      </td>
      <!-- RETURN -->
      <td>
        <div class="flex text-white">
          <p v-if="returnBase != null" :value="returnBase">
            ${{ returnBase.toFixed(2) }}
          </p>
          <p v-else :value="returnBase">-</p>
        </div>
      </td>
      <!-- Return % -->
      <td>
        <div class="flex text-white">
          <p v-if="returnPercent != null" :value="returnPercent">
            {{ returnPercent.toFixed(2) }}%
          </p>
          <p v-else :value="returnPercent">-</p>
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
import { useTradesStore } from "@/store/trades.js";
export default {
  props: {
    ticker: {
      type: [String, Number],
      default: null,
    },
    status: {
      type: [String, Number],
      default: null,
    },
    qty: {
      type: [String, Number],
      default: null,
    },
    entry: {
      type: [String, Number],
      default: null,
    },
    exit: {
      type: [String, Number],
      default: null,
    },
    entryTotal: {
      type: [String, Number],
      default: null,
    },
    exitTotal: {
      type: [String, Number],
      default: null,
    },
    returnBase: {
      type: [String, Number],
      default: null,
    },
    returnPercent: {
      type: [String, Number],
      default: null,
    },
  },

  setup() {
    const TradesStore = useTradesStore();

    const { editTrade, deleteTrade } = TradesStore;

    return {
      editTrade,
      deleteTrade,
    };
  },
};
</script>

<style scoped>
.win {
  font-weight: bold;
  color: rgb(0, 128, 0);
  background-color: rgba(0, 128, 0, 0.25);
  text-shadow: 0 0 32px black;
}

.loss {
  font-weight: bold;
  color: rgba(255, 0, 0);
  background-color: rgba(255, 0, 0, 0.25);
  text-shadow: 0 0 32px black;
}

.open {
  font-weight: bold;
  color: blue;
  background-color: rgba(0, 0, 255, 0.25);
  text-shadow: 0 0 32px black;
}

.even {
  font-weight: bold;
  color: rgb(228, 186, 0);
  background-color: rgba(228, 186, 0, 0.25);
  text-shadow: 0 0 32px black;
}

.closed {
  font-weight: bold;
  color: gray;
  background-color: rgba(128, 128, 128, 0.25);
  text-shadow: 0 0 32px black;
}
</style>
