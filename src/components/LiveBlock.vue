<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import ProgressBar from '@/components/ProgressBar.vue'
import AppButton from '@/components/AppButton.vue'
import cosmWasmService from '@/services/cosmWasmService'

const randomnessElem = ref<HTMLElement | null>(null)
const animationDuration = 300
const randomness = ref('0000000000000000000000000000000000000000000000000000000000000000')
const verified = ref('')
const progressValue = ref(100)

function animateRandomnessChange(init: boolean) {
  if (!randomnessElem.value) return

  const keyframes = [
    { opacity: 1, transform: 'scale(1)' },
    { opacity: 0, transform: 'scale(.99)' },
    { opacity: 1, transform: 'scale(1)' }
  ]

  if (init) {
    keyframes.shift()
    randomnessElem.value.classList.remove('opacity-0')
  }

  randomnessElem.value.animate(
    keyframes,
    {
      duration: animationDuration,
      fill: 'forwards',
      iterations: 1
    }
  )
}

async function updateContent(init = false) {
  try {
    progressValue.value = 0
    const { beacons } = await cosmWasmService.getRandomness()

    if (!beacons) return

    const [beacon] = beacons // always 1 element because we set limit to 1 above
    const verifiedDate = new Date(Number(beacon.verified.slice(0, -6)))

    animateRandomnessChange(init)

    setTimeout(() => {
      randomness.value = beacon.randomness
      verified.value = formatDate(verifiedDate)
    }, init ? 0 : animationDuration / 2)

    progressValue.value = 100
  } catch (err) {
    console.log(err)
  }
}

async function runEveryTenAndFortySeconds() {
  const currentSeconds = new Date().getSeconds()

  if (currentSeconds === 10 || currentSeconds === 40) {
    await updateContent()
  }
}

function formatDate(date: Date) {
  const dateString = date.toLocaleDateString(navigator.language ?? 'en-US')
  const timeString = date.toLocaleTimeString(navigator.language ?? 'en-US', { hourCycle: 'h24' })

  return `${dateString} ${timeString}`
}

onBeforeMount(async () => {
  await cosmWasmService.connect()
  await updateContent(true)
  setInterval(runEveryTenAndFortySeconds, 1_000)

  const currentSeconds = new Date().getSeconds()
  const nextCall = currentSeconds < 10 ? 10 : currentSeconds < 40 ? 40 : 70
  const remainingTime = nextCall - currentSeconds
  const percentage = (remainingTime / 30) * 100

  progressValue.value = Number(percentage.toFixed(2))
})

</script>

<template>
  <div class="max-lg:mt-14">
    <div
      ref="randomnessElem"
      class="font-mono n-randomness-wrapper relative break-all uppercase opacity-0"
    >
      <span class="n-randomness origin-center">
        {{ randomness }}
      </span>

      <span class="absolute top-0 left-0 w-full opacity-40 text-grey-500 n-randomness">
        {{ randomness }}
      </span>

      <span class="absolute top-0 left-0 w-full opacity-20 text-grey-500 n-randomness">
        {{ randomness }}
      </span>

      <span class="absolute top-0 left-0 w-full opacity-10 text-grey-500 n-randomness">
        {{ randomness }}
      </span>
    </div>

    <ProgressBar
      :value="progressValue"
      class="mt-4 mb-2"
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
.n-randomness-wrapper {
  font-size: 28px;
  line-height: 29px;

  @screen sm {
    font-size: 42px;
    line-height: 44px;
  }
}

.n-randomness {
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
