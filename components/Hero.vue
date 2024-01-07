<template>
  <div class="relative">
    <img
      src="@/assets/hero_patterns.png"
      class="absolute top-0 left-0 w-full"
      alt=""
    />
    <div class="absolute flex items-center gap-5 top-12 scroll">
      <div class="purple"></div>
      <div class="orange"></div>
      <div class="red"></div>
      <div class="orange"></div>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div
        class="absolute rounded-full border-[50px] lg:right-80 md:right-54 right-12 opacity-44 circle-1 top-14 border-[#EA6A1C] md:h-96 h-72 md:w-96 w-72"
      ></div>
      <div
        class="absolute rounded-full border-[8px] right-12 opacity-44 circle-2 top-14 border-[#EA6A1C] h-12 w-12"
      ></div>
      <div
        class="absolute rounded-full border-[8px] left-12 opacity-44 circle-3 top-14 border-[#EA6A1C] h-12 w-12"
      ></div>
      <div
        class="absolute rounded-full border-[8px] left-20 opacity-44 circle-4 top-96 border-[#EA6A1C] h-12 w-12"
      ></div>
      <div
        class="absolute rounded-full border-[8px] right-48 opacity-44 circle-4 top-96 border-[#EA6A1C] h-12 w-12"
      ></div>
    </div>
    <div class="py-32 space-y-2 max-w-3xl text-center mx-auto px-2">
      <h1 class="md:text-7xl text-5xl font-semibold">
        An AI teammate for every
        <span class="text-[#EA6A1C]">recruiting team</span>
      </h1>
      <p class="max-w-sm mx-auto text-[#373737]">
        Deploy intelligent AI agents to handle your sourcing, enabling your
        teams to hire at a fraction of the cost.
      </p>
      <div class="pt-4">
        <NuxtLink to="/portfolio" class="px-6 text-white rounded-full py-3 bg-[#EA6A1C] z-10 relative"
          >Get Started</NuxtLink>
      </div>
    </div>
  </div>
</template>
<style scoped>
.purple {
  border-radius: 803px;
  background: #840499;

  filter: blur(75px);
  opacity: 0.1;
  width: 803px;
  height: 284px;
  flex-shrink: 0;
}

.orange {
  border-radius: 803px;
  background: #f8b735;

  filter: blur(75px);
  opacity: 0.1;
  width: 803px;
  height: 284px;
  flex-shrink: 0;
}

.red {
  border-radius: 803px;
  background: #f6396b;

  filter: blur(75px);
  opacity: 0.1;
  width: 803px;
  height: 284px;
  flex-shrink: 0;
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%); /* Adjust based on slide height */
  }
}

@keyframes circle {
  0% {
    scale: 0;
  }

  50% {
    scale: 0.8;
  }

  80% {
    scale: 0.9;
    opacity: 0.1;
  }
  100% {
    scale: 1;
    opacity: 0;
  }
}

.circle-1 {
  animation: circle 3s infinite linear;
}

.circle-2 {
  animation: circle;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.circle-3 {
  animation: circle;
  animation-duration: 2.7s;
  animation-iteration-count: infinite;
}

.circle-4 {
  animation: circle;
  animation-duration: 2.4s;
  animation-iteration-count: infinite;
}

.circle-5 {
  animation: circle;
  animation-duration: 2.2s;
  animation-iteration-count: infinite;
}

/* Auto-scrolling effect using CSS animations */
.scroll {
  animation: scroll 5s infinite linear;
}
</style>
