<script setup lang="ts">
import LiveBlock from '@/components/LiveBlock.vue'
import AppButton from '@/components/AppButton.vue'
</script>

<template>
  <main class="flex justify-center lg:items-center sm:mt-5 lg:mt-0 max-lg:mb-6">
    <div class="flex flex-col-reverse max-lg:justify-end lg:flex-row lg:space-x-24 max-w-screen-sm lg:max-w-screen-lg lg:px-10">
      <LiveBlock class="lg:basis-2/6 max-sm:mt-14 max-lg:mt-20" />

      <div class="lg:basis-4/6">
        <h2 class="text-5xl sm:text-7xl mb-2.5 font-satoshi font-bold">
          Reliable<br>Randomness
        </h2>

        <h3 class="text-lg sm:text-2xl mb-5 sm:mb-8 font-satoshi font-medium">
          For the Interchain
        </h3>

        <p class="font-light text-grey-600 text-sm">
          Most Cosmos developers struggle to obtain secure and unbiased randomness, which can result in unreliable and untrustworthy systems. Nois provides a decentralized solution based on Drand that ensures a fair outcome for all, creating more reliable and trustworthy interchain applications.
        </p>

        <div class="mt-6 sm:mt-9">
          <AppButton
            class="mr-10 sm:mr-14 hover:text-grey-600"
            href="https://docs.nois.network"
            target="_blank"
          >
            See how it works
          </AppButton>

          <AppButton
            class="hover:text-grey-600"
            href="https://docs.nois.network/use_nois_randomness.html"
            target="_blank"
          >
            Quick Start Guide
          </AppButton>
        </div>
      </div>
    </div>
  </main>
</template>

