<script setup lang="ts">

import ProgressBar from '@/components/ProgressBar.vue'
import AppButton from '@/components/AppButton.vue'</script>

<template>
  <div>
    <div class="font-mono n-live-block relative break-all uppercase">
      <span class="n-block origin-center">
        67041a3309268109175310b763f3c09f8802c572b4807a8b2675872d630facde
      </span>

      <span class="absolute top-0 left-0 w-full opacity-40 text-grey-500 n-block">
        67041a3309268109175310b763f3c09f8802c572b4807a8b2675872d630facde
      </span>

      <span class="absolute top-0 left-0 w-full opacity-20 text-grey-500 n-block">
        67041a3309268109175310b763f3c09f8802c572b4807a8b2675872d630facde
      </span>

      <span class="absolute top-0 left-0 w-full opacity-10 text-grey-500 n-block">
        67041a3309268109175310b763f3c09f8802c572b4807a8b2675872d630facde
      </span>
    </div>

    <ProgressBar
      value="80"
      class="my-4"
    />

    <div class="flex justify-between">
      <div class="flex items-center">
        <span class="relative flex h-3 w-3 mr-2">
          <span class="animate-ping absolute inline-flex h-full rounded-sm w-full bg-lime-200 opacity-50" />
          <span class="relative inline-flex h-3 w-3 bg-lime-200 shadow-lime-200 shadow-block" />
        </span>

        <span class="text-sm font-light text-grey-600">
          <span class="font-bold">Live:</span>
          Block 23.123
        </span>
      </div>

      <AppButton
        href="https://randomness.nois.network/"
        target="_blank"
        class="text-grey-600 hover:text-grey-100 transition-colors"
      >
        Show feed
      </AppButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.n-live-block {
  font-size: 42px;
  line-height: 44px;
}

.n-block {
  &:nth-child(2) {
    transform: scale(.97);
    z-index: -1;
  }

  &:nth-child(3) {
    transform: scale(.95);
    z-index: -2;
  }

  &:nth-child(4) {
    transform: scale(.93);
    color: #E0DAEE;
    z-index: -3;
  }
}
</style>
