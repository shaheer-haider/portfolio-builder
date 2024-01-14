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
        <h3 class="md:text-5xl text-4xl font-semibold">
          Supercharge your <br />
          outbound with Noon
        </h3>
        <p class="text-lg md:text-xl">Join our mailing list!</p>
        <div class="pt-5">
          <form class="space-y-3">
            <input
              type="text"
              placeholder="Your email address"
              class="border border-[#EA6A1C] px-4 md:px-6 py-2 rounded-full focus:outline-0 placeholder:text-[#EA6A1C] w-full text-base"
            />
            <input
              type="text"
              placeholder="Your Linkedin Profile"
              class="border border-[#EA6A1C] px-4 md:px-6 py-2 rounded-full focus:outline-0 placeholder:text-[#EA6A1C] w-full text-base"
            />
            <div
              class="border border-[#EA6A1C] rounded-full relative px-4 md:px-6 py-2 cursor-pointer"
            >
              <input
                type="file"
                placeholder="Your email address"
                class="w-full h-full absolute top-0 left-0 appearance-none opacity-0 cursor-pointer"
              />
              <div class="flex w-full justify-between items-center cursor-pointer">
                <span class="text-[#EA6A1C]">Attach Your Resume</span>
                <button class="bg-[#EA6A1C] text-white pt-1 px-1 md:px-3 rounded-full w-[70px] md:w-auto">
                  Add File
                </button>
              </div>
            </div>

            <button class="px-5 text-white rounded-full pb-2 pt-3 bg-[#EA6A1C]">Submit</button>
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
    transform: translate(-60%, 5%) rotate(-360deg) translateX(100px) rotate(360deg);
  }
}
@keyframes moveObject-3 {
  0% {
    transform: translate(-60%, 100%) rotate(0deg) translateX(100px) rotate(0deg);
  }
  100% {
    transform: translate(-60%, 100%) rotate(360deg) translateX(100px) rotate(-360deg);
  }
}
</style>
