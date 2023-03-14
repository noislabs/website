<script setup lang="ts">

</script>

<template>
  <div class="font-mono n-live-block relative break-all uppercase">
    <span class="absolute n-block">67041a3309268109175310b763f3c09f8802c572b4807a8b2675872d630facde</span>
    <span class="absolute opacity-40 text-grey-500 n-block">67041a3309268109175310b763f3c09f8802c572b4807a8b2675872d630facde</span>
    <span class="absolute opacity-20 text-grey-500 n-block">67041a3309268109175310b763f3c09f8802c572b4807a8b2675872d630facde</span>
    <span class="absolute opacity-10 text-grey-500 n-block">67041a3309268109175310b763f3c09f8802c572b4807a8b2675872d630facde</span>
  </div>
</template>

<style lang="scss" scoped>
.n-live-block {
  font-size: 42px;
  line-height: 44px;
  width: 280px;
  height: 280px;
}

.n-block {
  transform-origin: center;

  &:nth-child(2) {
    transform: scale(.97);
  }

  &:nth-child(3) {
    transform: scale(.95);
  }

  &:nth-child(4) {
    transform: scale(.93);
    color: #E0DAEE
  }
}
</style>
