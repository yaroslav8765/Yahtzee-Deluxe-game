<template>
  <svg
    :class="className"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    stroke="currentColor"
  >
    <rect
      x="48"
      y="48"
      width="416"
      height="416"
      rx="56"
      ry="56"
      stroke-width="20"
      fill="none"
    />
    <text
      x="50%"
      y="55%"
      text-anchor="middle"
      dominant-baseline="middle"
      font-size="200"
      font-family="Arial, sans-serif"
      fill="currentColor"
    >
      ?
    </text>
  </svg>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: ""
  }
});
</script>
