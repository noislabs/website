<script setup lang="ts">

</script>

<template>
  <header class="py-9">
    <div class="flex items-center justify-between">
      <RouterLink :to="{ name: 'home' }">
        <img
          src="@/assets/logo/logo-small.svg"
          alt="Nois Logo"
          width="148"
          height="47"
        >
      </RouterLink>

      <div class="flex items-center">
        <nav class="text-sm">
          <a
            class="ml-8"
            href="https://docs.nois.network/"
          >
            Documentation
          </a>

          <a
            class="ml-8"
            href="https://whitepaper.nois.network/"
          >
            Whitepaper
          </a>
          <a
            class="ml-8"
            href="https://explorer.mcbnode.online/nois/staking"
          >
            Block Explorer
          </a>
        </nav>

        <div class="flex items-center ml-10">
          <a
            href="https://twitter.com/NoisNetwork"
            target="_blank"
          >
            <img
              src="@/assets/social/twitter.svg"
              alt="Twitter - Nois Network"
              width="28"
              height="22"
            >
          </a>

          <a
            href="https://chat.nois.network/"
            target="_blank"
            class="ml-5"
          >
            <img
              src="@/assets/social/discord.svg"
              alt="Discord - Nois Network"
              width="28"
              height="22"
            >
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            class="ml-5"
          >
            <img
              src="@/assets/social/github.svg"
              alt="GitHub - Nois Network"
              width="28"
              height="27"
            >
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
