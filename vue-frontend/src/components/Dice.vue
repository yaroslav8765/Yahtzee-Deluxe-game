<template>
  <div :class="{ 'die-shaking': isShaking }">
    <component :is="currentSide" class="dice-icon" />
  </div>
</template>

<script setup>
import { computed } from 'vue';

import UnknownDice from './icons/UnknownDice.vue';
import GiInvertedDice1 from './icons/GiInvertedDice1.vue';
import GiInvertedDice2 from './icons/GiInvertedDice2.vue';
import GiInvertedDice3 from './icons/GiInvertedDice3.vue';
import GiInvertedDice4 from './icons/GiInvertedDice4.vue';
import GiInvertedDice5 from './icons/GiInvertedDice5.vue';
import GiInvertedDice6 from './icons/GiInvertedDice6.vue';

const props = defineProps({
  number: {
    type: Number,
    default: 0
  },
  isShaking: {
    type: Boolean,
    default: false
  }
});

const sides = [
  UnknownDice,
  GiInvertedDice1,
  GiInvertedDice2,
  GiInvertedDice3,
  GiInvertedDice4,
  GiInvertedDice5,
  GiInvertedDice6
];

const currentSide = computed(() => {
  const index = Math.max(0, Math.min(6, props.number));
  return sides[index];
});
</script>

<style scoped>
.die-shaking {
  animation: shaking 0.15s infinite;
}

@keyframes shaking {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}

/* Стили для иконок кубиков */
.dice-icon {
  width: 4rem;          /* примерно text-7xl размер (около 48px) */
  height: 4rem;
  color: black;         /* text-black */
  margin: 0.25rem;      /* m-1 примерно */
  display: inline-block; /* для безопасности */
}
</style>
