<script setup lang="ts">
import type { Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'

const particlesInit = async (engine: Engine) => {
  await loadFull(engine)
}
const options = {
  background: {
    color: {
      value: 'transparent'
    }
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#E0DAEE'
    },
    links: {
      color: '#E0DAEE',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: {
      enable: true
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 2,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 1000
      },
      value: 30
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle'
    },
    size: {
      random: true,
      value: 5
    }
  },
  detectRetina: true
}
</script>

<template>
  <Particles
    id="particles"
    :options="options"
    :particles-init="particlesInit"
  />
</template>

<style lang="scss" scoped>
#particles {
  position: relative;
  z-index: -1;
}
</style>
