<script setup lang="ts">
</script>

<template>
  <div class="w-full n-progress h-0.5" />
</template>

<style lang="scss" scoped>
.n-progress {
  background-image: repeating-linear-gradient(to left, theme('colors.grey.800') 0%, theme('colors.grey.800') 50%, theme('colors.grey.50') 50%, theme('colors.grey.50') 100%);
  background-size: 200% auto;
  background-position: 0 100%;
  animation: progressAnim linear 30s infinite;
}

@keyframes progressAnim {
  0% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0 50%
  }
}
</style>
