<script setup lang="ts">
withDefaults(defineProps<{
  value: number | string
}>(), {
  value: 0
})
</script>

<template>
  <div class="h-0.5 w-full bg-grey-800">
    <div
      class="h-0.5 bg-grey-50"
      :style="`width: ${value}%`"
    />
  </div>
</template>

<style lang="scss" scoped>
</style>
