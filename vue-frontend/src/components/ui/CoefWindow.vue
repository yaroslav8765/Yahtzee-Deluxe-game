<template>
  <li class="flex justify-between">
    <span :class="['font-medium mx-2 text-lg', active ? 'text-red-500' : 'text-black']">
      {{ title }}
    </span>
    <span :class="['font-extrabold mx-2 text-lg', active ? 'text-red-500' : 'text-black']">
      x{{ coef }}
    </span>
  </li>
</template>

<script setup>
defineProps({
  title: String,
  coef: [Number, String],
  active: Boolean
});
</script>
