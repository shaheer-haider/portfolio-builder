<template>
  <div class="max-w-7xl mx-auto py-20 px-4">
    <h4 class="text-5xl font-semibold">
      Trusted by the most talent-dense <br />
      companies
    </h4>

    <div class="flex items-center md:flex-row flex-col gap-8">
      <div class="md:w-1/2">
        <img
          src="@/assets/testimonial_iilustation.png"
          alt="testimonial_iilustation"
        />
      </div>
      <div class="md:w-1/2 overflow-hidden">
        <div class="slider space-y-14">
          <div
            class="slide rounded-md px-10 py-10 border border-[#EA6A1C] bg-white"
          >
            <p class="text-start">
              We consistently found high quality candidates for very niche
              positions and a high internal hiring bar. Noon was a game-changer
              for us!
            </p>
            <div class="flex items-center gap-3">
              <div class="h-20 w-20 bg-[#D9D9D9] rounded-full"></div>
              <div>
                <p class="font-semibold">Kenton</p>
                <p class="text-[#373737]">Tech Recruiter @ Replit</p>
              </div>
            </div>
          </div>
          <div
            class="slide rounded-md px-10 py-10 border border-[#EA6A1C] bg-white"
          >
            <p class="text-start">
              We consistently found high quality candidates for very niche
              positions and a high internal hiring bar. Noon was a game-changer
              for us!
            </p>
            <div class="flex items-center gap-3">
              <div class="h-20 w-20 bg-[#D9D9D9] rounded-full"></div>
              <div>
                <p class="font-semibold">Kenton</p>
                <p class="text-[#373737]">Tech Recruiter @ Replit</p>
              </div>
            </div>
          </div>
          <div
            class="slide rounded-md px-10 py-10 border border-[#EA6A1C] bg-white"
          >
            <p class="text-start">
              We consistently found high quality candidates for very niche
              positions and a high internal hiring bar. Noon was a game-changer
              for us!
            </p>
            <div class="flex items-center gap-3">
              <div class="h-20 w-20 bg-[#D9D9D9] rounded-full"></div>
              <div>
                <p class="font-semibold">Kenton</p>
                <p class="text-[#373737]">Tech Recruiter @ Replit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.slider {
  position: relative;
  width: 100%;
  height: 400px; /* Adjust based on slide height */
}

.slide {
  min-height: 200px; /* Adjust based on slide height */
  scroll-snap-align: start;
}

.slide:nth-child(even) {
  background-color: #ffffff; /* Alternate background color for even slides */
}

.slide:nth-child(odd) {
  background-color: #ffffff; /* Alternate background color for odd slides */
}

@keyframes scroll {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%); /* Adjust based on slide height */
  }
}

/* Auto-scrolling effect using CSS animations */
.slider {
  animation: scroll 8s infinite linear;
}
</style>
