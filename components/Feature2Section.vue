<template>
  <div class="bg-[#12182E] overflow-hidden relative">
    <div class="max-w-7xl mx-auto md:block hidden">
      <div
        class="absolute rounded-full border-[50px] lg:right-96 md:right-54 right-12 opacity-44 circle-1 top-36 border-[#EA6A1C] md:h-96 h-72 md:w-96 w-72"
      ></div>
      <div class="circle-container">
        <div class="object"></div>
      </div>
      <div class="circle-container">
        <div class="object-2"></div>
      </div>
      <div class="circle-container">
        <div class="object-3"></div>
      </div>
      <div class="circle-container">
        <div class="object-4"></div>
      </div>
    </div>
    <div
      class="flex items-center gap-8 max-w-7xl mx-auto px-4 py-24 lg:flex-row flex-col"
    >
      <div class="flex-1">
        <img
          src="@/assets/dashboard.png"
          class="w-full relative z-10"
          alt="dashboard"
        />
      </div>
      <div class="lg:max-w-lg lg:px-8">
        <h3 class="text-5xl font-semibold text-white">
          Generate pipeline hands-free
        </h3>
        <p class="text-lg pb-4 text-white">
          Noon easily surfaces the best candidate profiles for your roles and
          helps you craft personalized outreach messages in seconds.
        </p>
        <Button class="px-5 text-white rounded-full py-2 bg-[#EA6A1C]"
          >Show me how</Button
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.object {
  width: 220px;
  height: 220px;
  position: absolute;
  border-radius: 100%;
  border: 40px solid #ffb588;
  top: 0;
  left: 12px;
  transform: translate(-50%, -50%); /* Center object */
  animation: moveObject 10s infinite linear; /* Adjust animation duration and timing function */
}

.object-2 {
  width: 220px;
  height: 220px;
  position: absolute;
  border-radius: 100%;
  border: 40px solid #ffb588;
  bottom: 12px;
  right: 0;
  transform: translate(50%, 50%); /* Center object */
  animation: moveObject 8s infinite linear; /* Adjust animation duration and timing function */
}

.object-3 {
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 100%;
  border: 30px solid #ea6a1c;
  bottom: 80px;
  left: 100px;
  z-index: 99;
  transform: translate(50%, 50%); /* Center object */
  animation: moveObject-3 10s infinite linear; /* Adjust animation duration and timing function */
}

.object-4 {
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 100%;
  border: 30px solid #ea6a1c;
  top: -42px;
  right: -78px;
  z-index: 99;
  transform: translate(50%, 50%); /* Center object */
  animation: moveObject 10s infinite linear; /* Adjust animation duration and timing function */
}

@keyframes moveObject {
  0% {
    transform: translate(-60%, 5%) rotate(0deg) translateX(100px) rotate(0deg);
  }
  100% {
    transform: translate(-60%, 5%) rotate(-360deg) translateX(100px)
      rotate(360deg);
  }
}

@keyframes moveObject-3 {
  0% {
    transform: translate(-60%, 100%) rotate(0deg) translateX(100px) rotate(0deg);
  }
  100% {
    transform: translate(-60%, 100%) rotate(360deg) translateX(100px)
      rotate(-360deg);
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
  animation: circle 4s infinite linear;
}
</style>
