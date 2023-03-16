<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppParticles from '@/components/AppParticles.vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'</script>

<template>
  <TheHeader />

  <RouterView class="flex-grow" />

  <TheFooter />

  <AppParticles />
</template>
