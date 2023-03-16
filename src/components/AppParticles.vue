<script setup lang="ts">
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

const particlesInit = async (engine: Engine) => await loadSlim(engine)
const options = {
  background: {
    color: {
      value: 'transparent'
    }
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 50
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
      width: 0.2
    },
    collisions: {
      enable: true
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'out',
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
      value: 0.8
    },
    shape: {
      type: 'circle'
    },
    size: {
      random: true,
      value: 1.3
    }
  },
  detectRetina: true
}
</script>

<template>
  <Particles
    id="particles"
    class="relative -z-10"
    :options="options"
    :particles-init="particlesInit"
  />
</template>
