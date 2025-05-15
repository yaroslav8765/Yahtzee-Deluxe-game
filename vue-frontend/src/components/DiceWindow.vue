<template>
  <div class="flex flex-col justify-center items-center max-w-[600px] w-full py-10 shadow-xl rounded-md border border-solid border-gray-100 px-5">
    <h2 class="text-3xl font-bold m-4">Dice</h2>
    <div class="flex flex-row justify-center mx-auto gap-2">
      <Dice :number="die1" :isShaking="isShaking" />
      <Dice :number="die2" :isShaking="isShaking" />
      <Dice :number="die3" :isShaking="isShaking" />
      <Dice :number="die4" :isShaking="isShaking" />
      <Dice :number="die5" :isShaking="isShaking" />
      <Dice :number="die6" :isShaking="isShaking" />
    </div>
  </div>
</template>

<script setup>

import Dice from './Dice.vue';

const props = defineProps({
  die1: Number,
  die2: Number,
  die3: Number,
  die4: Number,
  die5: Number,
  die6: Number,
  isShaking: Boolean
});
</script>
