<template>
  <div class="flex flex-col justify-center items-center max-w-[280px] w-full py-8 px-2 shadow-xl rounded-md border-1 border-solid border-gray-100">
    <h2 class="text-2xl font-bold m-2">Prices</h2>
    <ul class="space-y-1 w-full">
      <CoefWindow title="Pair" :coef="coef.toFixed(3)" :active="activePair" />
      <CoefWindow title="Full house" :coef="(coef * 2).toFixed(3)" :active="activeFullHouse" />
      <CoefWindow title="Yahtzee" :coef="(coef * 3).toFixed(3)" :active="activeYahtzee" />
      <CoefWindow title="Three Pairs" :coef="(coef * 4).toFixed(3)" :active="activeThreePairs" />
      <CoefWindow title="Other" :coef="(0).toFixed(3)" :active="activeOther" />
    </ul>
  </div>
</template>

<script setup>
import CoefWindow from './ui/CoefWindow.vue';

defineProps({
  coef: {
    type: Number,
    required: true
  },
  activePair: Boolean,
  activeFullHouse: Boolean,
  activeYahtzee: Boolean,
  activeThreePairs: Boolean,
  activeOther: Boolean
});
</script>
