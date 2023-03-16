<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  href?: string
  target?: string
}>()

const elementTag = computed(() => {
  if (!props.href) return 'button'

  return 'a'
})
const attrs = computed(() => ({
  href: props.href,
  target: props.target,
}))

</script>
<template>
  <component
    :is="elementTag"
    v-bind="attrs"
    class="inline-flex items-center"
  >
    <slot />

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 8 15"
      width="8"
      height="15"
      class="ml-4"
    >
      <ellipse
        cx="4"
        cy="4.207"
        fill="currentColor"
        rx=".87"
        ry=".915"
      />
      <ellipse
        cx=".87"
        cy=".915"
        fill="currentColor"
        rx=".87"
        ry=".915"
      />
      <ellipse
        cx="7.13"
        cy="7.5"
        fill="currentColor"
        rx=".87"
        ry=".915"
      />
      <ellipse
        cx=".87"
        cy=".915"
        fill="currentColor"
        rx=".87"
        ry=".915"
        transform="matrix(1 0 0 -1 3.13 11.707)"
      />
      <ellipse
        cx=".87"
        cy=".915"
        fill="currentColor"
        rx=".87"
        ry=".915"
        transform="matrix(1 0 0 -1 0 15)"
      />
    </svg>
  </component>
</template>
