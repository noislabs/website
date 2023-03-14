<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppParticles from '@/components/AppParticles.vue'
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
  <TheHeader />

  <RouterView />

  <AppParticles />
</template>
