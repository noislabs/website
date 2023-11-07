<script setup lang="ts">

</script>

<template>
  <header class="max-sm:pt-4 py-9">
    <div class="flex max-[899px]:flex-wrap items-center justify-between">
      <RouterLink
        :to="{ name: 'home' }"
        class="max-[899px]:basis-auto max-[899px]:order-1"
      >
        <img
          src="@/assets/logo/logo-small.svg"
          alt="Nois Logo"
          width="148"
          height="47"
        >
      </RouterLink>

      <div class="grow max-[899px]:hidden" />

      <nav class="max-[899px]:flex max-[899px]:justify-center text-sm max-[899px]:basis-full max-[899px]:order-3 max-[899px]:mt-6">
        <a
          class="min-[900px]:ml-8 hover:text-grey-600 transition-colors"
          href="https://docs.nois.network/"
        >
          Documentation
        </a>

        <a
          class="ml-7 min-[900px]:ml-8 hover:text-grey-600 transition-colors"
          href="https://whitepaper.nois.network/"
        >
          Whitepaper
        </a>
        <a
          class="ml-7 min-[900px]:ml-8 hover:text-grey-600 transition-colors"
          href="https://nois.explorers.guru"
        >
          Block Explorer
        </a>
      </nav>

      <div class="flex items-center max-[899px]:basis-1/2 min-[900px]:ml-10 max-[899px]:order-2 max-[899px]:justify-end max-sm:scale-90 max-sm:origin-right">
        <a
          href="https://scripta.network/@noislabs"
          target="_blank"
          aria-label="Scripta - Nois"
          class="hover:text-grey-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 15 26"
            width="28"
            height="26"
          >
            <path
              fill="currentColor"
              d="m14.452 18.25-1.156-2.002-1.794-3.107a.697.697 0 0 0-.594-.342H4.497L1.494 7.597l3.003-5.201h6.006l3.003 5.201-1.44 2.494c-.447.775.754 1.469 1.202.693l1.428-2.473c.2-.347.433-.677.196-1.087l-.44-.763-2.95-5.11a.696.696 0 0 0-.594-.342H5.097c-.378 0-1.005-.108-1.352.095-.325.19-.525.73-.703 1.037L1.886 4.143.092 7.25a.7.7 0 0 0 .003.698l3.403 5.895c.04.07.087.123.138.17.018.017.034.034.055.049.016.012.034.021.052.031.02.013.041.026.064.036.018.008.038.013.056.018a.71.71 0 0 0 .228.039h6.412l3.003 5.2-3.003 5.202H4.497l-3.003-5.201 1.386-2.4c.447-.776-.754-1.47-1.202-.694L.092 19.04a.7.7 0 0 0 .002.698l1.733 3.001L3 24.771c.187.326.402.912.749 1.112.326.188.892.093 1.248.093h5.9a.701.701 0 0 0 .606-.347l1.732-3.001 1.174-2.032c.187-.325.588-.805.59-1.204.003-.38-.37-.832-.548-1.141Z"
            />
            <path
              fill="currentColor"
              d="M4.461 4.47a.87.87 0 1 0 1.74 0 .87.87 0 0 0-1.74 0ZM10.26 16.463a.87.87 0 1 0-1.741 0 .87.87 0 0 0 1.74 0Z"
            />
          </svg>
        </a>

        <a
          href="https://twitter.com/NoisRNG"
          target="_blank"
          aria-label="Twitter - Nois"
          class="ml-5 hover:text-grey-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="28"
            height="22"
            viewBox="0 0 28 22"
          >
            <path
              fill="currentColor"
              d="M28 2.604c-1.03.443-2.137.74-3.3.875A5.6 5.6 0 0 0 27.228.406a11.75 11.75 0 0 1-3.649 1.348A5.828 5.828 0 0 0 19.385 0c-3.709 0-6.434 3.346-5.596 6.819-4.773-.232-9.006-2.442-11.84-5.803-1.504 2.497-.78 5.762 1.777 7.416a5.87 5.87 0 0 1-2.6-.695c-.063 2.573 1.844 4.98 4.607 5.516a5.95 5.95 0 0 1-2.595.094c.73 2.207 2.852 3.812 5.367 3.857-2.415 1.83-5.458 2.648-8.505 2.3A16.67 16.67 0 0 0 8.806 22c10.666 0 16.691-8.71 16.328-16.52A11.49 11.49 0 0 0 28 2.604Z"
            />
          </svg>
        </a>

        <a
          href="https://chat.nois.network/"
          target="_blank"
          aria-label="Discord - Nois Network"
          class="ml-5 hover:text-grey-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="28"
            height="22"
            viewBox="0 0 28 22"
          >
            <path
              fill="currentColor"
              d="M23.719 1.842A22.554 22.554 0 0 0 17.942 0c-.249.456-.54 1.07-.74 1.56a20.912 20.912 0 0 0-6.402 0C10.6 1.07 10.302.457 10.05 0a22.494 22.494 0 0 0-5.78 1.847C.613 7.454-.378 12.922.118 18.313c2.425 1.838 4.775 2.954 7.085 3.685.57-.797 1.079-1.644 1.517-2.537a14.804 14.804 0 0 1-2.39-1.18c.201-.15.397-.308.586-.47 4.607 2.187 9.613 2.187 14.166 0 .191.162.387.32.585.47-.757.463-1.559.86-2.394 1.183.439.89.945 1.74 1.518 2.536 2.312-.73 4.664-1.847 7.089-3.687.581-6.249-.993-11.667-4.162-16.47ZM9.349 14.998c-1.383 0-2.517-1.31-2.517-2.907 0-1.595 1.11-2.908 2.517-2.908 1.407 0 2.541 1.31 2.517 2.908.002 1.596-1.11 2.907-2.517 2.907Zm9.302 0c-1.383 0-2.517-1.31-2.517-2.907 0-1.595 1.11-2.908 2.517-2.908 1.408 0 2.542 1.31 2.518 2.908 0 1.596-1.11 2.907-2.518 2.907Z"
            />
          </svg>
        </a>

        <a
          href="https://github.com/noislabs"
          target="_blank"
          aria-label="GitHub - Nois Network"
          class="ml-5 hover:text-grey-600 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="28"
            height="27"
            viewBox="0 0 28 27"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M14.01 0C6.264 0 0 6.188 0 13.843c0 6.12 4.012 11.298 9.579 13.132.697.137.952-.298.952-.664 0-.32-.023-1.42-.023-2.568-3.897.824-4.709-1.65-4.709-1.65-.625-1.604-1.554-2.017-1.554-2.017-1.277-.847.091-.847.091-.847 1.414.093 2.157 1.42 2.157 1.42 1.253 2.11 3.27 1.514 4.084 1.145.115-.894.488-1.513.88-1.856-3.108-.32-6.378-1.513-6.378-6.829 0-1.513.557-2.75 1.437-3.712-.14-.344-.625-1.764.14-3.668 0 0 1.182-.366 3.852 1.42a13.627 13.627 0 0 1 7.004 0c2.667-1.788 3.851-1.42 3.851-1.42.766 1.901.279 3.324.141 3.668.903.961 1.437 2.199 1.437 3.712 0 5.318-3.27 6.486-6.401 6.829.51.436.952 1.26.952 2.568 0 1.856-.023 3.346-.023 3.805 0 .366.255.802.952.664C23.988 25.14 28 19.963 28 13.843 28.023 6.188 21.736 0 14.013 0h-.003Z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>
