<template>
  <div
    class="max-w-7xl mx-auto px-4 py-14 border bg-white border-[#EA6A1C] rounded-xl relative overflow-hidden"
  >
    <div class="lg:block hidden">
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

    <div class="flex items-center md:flex-row flex-col gap-8 max-w-4xl mx-auto">
      <div class="md:w-1/2">
        <h3 class="text-4xl font-semibold">
          Supercharge your <br />
          outbound with Noon
        </h3>
        <p>Join our mailing list!</p>
        <div class="pt-5">
          <form class="space-y-3">
            <input
              type="text"
              placeholder="Your email address"
              class="border border-[#EA6A1C] px-6 py-2 rounded-full focus:outline-0 placeholder:text-[#EA6A1C] w-full"
            />
            <input
              type="text"
              placeholder="Your Linkedin Profile"
              class="border border-[#EA6A1C] px-6 py-2 rounded-full focus:outline-0 placeholder:text-[#EA6A1C] w-full"
            />
            <input
              type="file"
              placeholder="Your email address"
              class="border border-[#EA6A1C] px-6 py-2 file:bg-[#EA6A1C] file:text-white text-sm file:rounded-full file:border-none file:text-sm rounded-full focus:outline-0 placeholder:text-[#EA6A1C] w-full"
            />

            <Button class="px-5 text-white rounded-full py-2 bg-[#EA6A1C]"
              >Submit</Button
            >
          </form>
        </div>
      </div>
      <div>
        <img
          src="@/assets/cta_illustration.png"
          class="z-20 relative"
          alt="cta_illustration"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.object {
  width: 120px;
  height: 120px;
  position: absolute;
  border-radius: 100%;
  border: 20px solid #ffb588;
  top: 96px;
  left: 0px;
  transform: translate(-50%, -50%); /* Center object */
  animation: moveObject 10s infinite linear; /* Adjust animation duration and timing function */
}

.object-2 {
  width: 140px;
  height: 140px;
  position: absolute;
  border-radius: 100%;
  border: 20px solid #ea6a1c;
  top: 96px;
  left: 12px;
  transform: translate(-50%, -50%); /* Center object */
  animation: moveObject-3 10s infinite linear; /* Adjust animation duration and timing function */
}

.object-3 {
  width: 180px;
  height: 180px;
  position: absolute;
  border-radius: 100%;
  border: 30px solid #ffb588;
  top: 96px;
  right: 20px;
  transform: translate(-50%, -50%); /* Center object */
  animation: moveObject 10s infinite linear; /* Adjust animation duration and timing function */
}

.object-4 {
  width: 140px;
  height: 140px;
  position: absolute;
  border-radius: 100%;
  border: 20px solid #ea6a1c;
  top: 96px;
  right: 0px;
  transform: translate(-50%, -50%); /* Center object */
  animation: moveObject-3 10s infinite linear; /* Adjust animation duration and timing function */
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
</style>
