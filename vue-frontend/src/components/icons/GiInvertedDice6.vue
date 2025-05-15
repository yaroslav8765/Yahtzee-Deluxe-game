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
    <circle cx="170" cy="170" r="40" />
    <circle cx="170" cy="256" r="40" />
    <circle cx="170" cy="342" r="40" />
    <circle cx="342" cy="170" r="40" />
    <circle cx="342" cy="256" r="40" />
    <circle cx="342" cy="342" r="40" />
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