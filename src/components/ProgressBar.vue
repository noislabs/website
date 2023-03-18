<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const props = defineProps<{
  value: number
}>()
const progressElem = ref<HTMLElement | null>(null)
const duration = 30

watchEffect(() => {
  // Recalculate the duration based on the new progress value
  let remainingDuration = duration - (duration * (100 - props.value) / 100)

  if (remainingDuration === 0) remainingDuration = duration
  if (!progressElem.value) return

  progressElem.value.animate(
    [
      { backgroundPosition: `${props.value}% 50%` },
      { backgroundPosition: '0 50%' }
    ],
    {
      duration: remainingDuration * 1000,
      fill: 'forwards',
      iterations: 1
    }
  )
})

</script>

<template>
  <div
    ref="progressElem"
    class="w-full n-progress h-0.5"
  />
</template>

<style lang="scss" scoped>
.n-progress {
  background-image: repeating-linear-gradient(to left, theme('colors.grey.800') 0%, theme('colors.grey.800') 50%, theme('colors.grey.50') 50%, theme('colors.grey.50') 100%);
  background-size: 200% auto;
  background-position: 0 100%;
}
</style>
