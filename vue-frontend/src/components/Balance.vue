<template>
  <div class="flex flex-col justify-center items-center max-w-[280px] w-full py-4 px-2 shadow-xl rounded-md border-1 border-solid border-gray-100">
    <h2 class="text-2xl font-bold m-2">Your balance</h2>
    <p class="font-medium mx-2 text-lg">{{ balance.toFixed(3) }}</p>
  </div>
</template>

<script setup>
defineProps({
  balance: {
    type: Number,
    required: true
  }
});
</script>
