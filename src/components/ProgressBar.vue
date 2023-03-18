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

  const [anim] = progressElem.value.getAnimations()

  if (!anim) return

  anim.cancel()
  progressElem.value.style.setProperty('--duration', `${remainingDuration.toFixed(2)}s`)
  progressElem.value.style.setProperty('--position', `${props.value}%`)
  anim.play()
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
  --position: 100%;
  --duration: 30s;
  background-image: repeating-linear-gradient(to left, theme('colors.grey.800') 0%, theme('colors.grey.800') 50%, theme('colors.grey.50') 50%, theme('colors.grey.50') 100%);
  background-size: 200% auto;
  background-position: 0 100%;
  animation: progressAnim linear var(--duration) forwards;
}

@keyframes progressAnim {
  0% {
    background-position: var(--position) 50%
  }
  100% {
    background-position: 0 50%
  }
}
</style>
