<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import ProgressBar from '@/components/ProgressBar.vue'
import AppButton from '@/components/AppButton.vue'
import cosmWasmService from '@/services/cosmWasmService'

const randomness = ref('')
const verified = ref('')

async function updateContent() {
  try {
    const { beacons } = await cosmWasmService.getRandomness()

    if (!beacons) return

    const [beacon] = beacons // always 1 element because we set limit to 1 above

    randomness.value = beacon.randomness
    verified.value = formatDate(new Date(Number(beacon.verified.slice(0, -6))))
  } catch (err) {
    console.log(err)
  }
}

async function runEveryTenAndFortySeconds() {
  const currentSeconds = new Date().getSeconds()

  if (currentSeconds === 10 || currentSeconds === 40) await updateContent()
}

function formatDate(date: Date) {
  const dateString = date.toLocaleDateString('en-US')
  const timeString = date.toLocaleTimeString('en-US', { hourCycle: 'h24' })

  return `${dateString} ${timeString}`
}

onBeforeMount(async () => {
  await updateContent()
  setInterval(runEveryTenAndFortySeconds, 1000)
})

</script>

<template>
  <div class="max-lg:mt-14">
    <div class="font-mono n-live-block relative break-all uppercase">
      <span class="n-block origin-center">
        {{ randomness }}
      </span>

      <span class="absolute top-0 left-0 w-full opacity-40 text-grey-500 n-block">
        {{ randomness }}
      </span>

      <span class="absolute top-0 left-0 w-full opacity-20 text-grey-500 n-block">
        {{ randomness }}
      </span>

      <span class="absolute top-0 left-0 w-full opacity-10 text-grey-500 n-block">
        {{ randomness }}
      </span>
    </div>

    <ProgressBar
      class="my-4"
    />

    <div class="flex justify-between">
      <div class="flex items-center">
        <span class="relative flex h-3 w-3 mr-2">
          <span class="animate-ping absolute inline-flex h-full rounded-sm w-full bg-lime-200 opacity-50" />
          <span class="relative inline-flex h-3 w-3 bg-lime-200 shadow-lime-200 shadow-block" />
        </span>

        <span class="text-sm font-light text-grey-600">
          {{ verified }}
        </span>
      </div>

      <AppButton
        href="https://randomness.nois.network/"
        target="_blank"
        class="text-grey-600 hover:text-grey-100"
      >
        Show feed
      </AppButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.n-live-block {
  font-size: 28px;
  line-height: 29px;
  min-height: 264px;

  @screen sm {
    font-size: 42px;
    line-height: 44px;
  }
}

.n-block {
  &:nth-child(2) {
    transform: scale(.98);
    z-index: -1;

    @screen sm {
      transform: scale(.97);
    }
  }

  &:nth-child(3) {
    transform: scale(.96);
    z-index: -2;

    @screen sm {
      transform: scale(.95);
    }
  }

  &:nth-child(4) {
    transform: scale(.94);
    color: #E0DAEE;
    z-index: -3;

    @screen sm {
      transform: scale(.93);
    }
  }
}
</style>
