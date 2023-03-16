<script setup lang="ts">
import LiveBlock from '@/components/LiveBlock.vue'
import AppButton from '@/components/AppButton.vue'
</script>

<template>
  <main class="flex justify-center pt-52">
    <div class="flex flex-row space-x-24 max-w-screen-lg px-10">
      <LiveBlock class="basis-2/6" />

      <div class="basis-4/6">
        <h2 class="text-7xl mb-2.5 font-satoshi font-bold">
          Reliable Randomness
        </h2>
        <h3 class="text-2xl mb-8 font-satoshi font-medium">
          For the Interchain
        </h3>
        <p class="font-light text-grey-600 text-sm">
          Most Cosmos developers struggle to obtain secure and unbiased randomness, which can result in unreliable and untrustworthy systems. Nois provides a decentralized solution based on Drand that ensures a fair outcome for all, creating more reliable and trustworthy interchain applications.
        </p>
        <div class="mt-11">
          <AppButton
            class="mr-14"
            href="https://nois.network"
            target="_blank"
          >
            See how it works
          </AppButton>

          <AppButton
            href="https://nois.network"
            target="_blank"
          >
            Quick Start Guide
          </AppButton>
        </div>
      </div>
    </div>
  </main>
</template>

