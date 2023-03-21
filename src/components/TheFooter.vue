<script setup lang="ts">

</script>

<template>
  <footer class="flex max-sm:flex-col text-grey-600 items-center sm:justify-between text-xs py-6 pt-9">
    <div class="font-medium">
      <a
        href="https://nois.network"
        class="font-light mr-8 hover:text-grey-100 transition-colors"
      >
        Powered by
        <span class="font-medium">Nois Labs</span>
      </a>

      <a
        href="/Nois_Brandkit.zip"
        class="hover:text-grey-100 transition-colors"
      >
        Brandkit
      </a>
    </div>

    <a
      href="https://designdao.io/"
      target="_blank"
      class="n-design-dao flex items-center max-sm:mt-6"
    >
      <span class="uppercase font-light mr-1.5">Website by</span>
      <img
        src="@/assets/design-dao/designdao.png"
        alt="Design DAO"
        width="25"
        height="19"
        class="inline-block grayscale  transition"
      >
      <span class="uppercase ml-2.5">Design DAO</span>
    </a>
  </footer>
</template>

<style lang="scss" scoped>
.n-design-dao {
  &:hover {
    img {
      @apply grayscale-0;
    }
  }
}
</style>
