<template>
  <div class="max-w-7xl mx-auto py-[120px] px-4">
    <h4 class="md:text-5xl text-4xl font-semibold">
      Trusted by the most talent-dense <br />
      companies
    </h4>

    <div class="flex items-center md:flex-row flex-col gap-8 min-h-[600px] py-8">
      <div class="md:w-1/2">
        <img src="@/assets/testimonial_iilustation.png" alt="testimonial_iilustation" />
      </div>
      <div class="md:w-1/2 h-full overflow-hidden relative">
        <div class="slider space-y-14">
          <div
            v-for="x in 5"
            class="slide rounded-md px-4 sm:px-8 md:px-10 py-8 md:py-10 border border-[#EA6A1C] bg-white"
          >
            <p class="text-start">
              We consistently found high quality candidates for very niche positions and a
              high internal hiring bar. Noon was a game-changer for us!
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
        <div class="absolute w-full h-10 bg-white top-0 left-0 smoke-rectangle"></div>
        <div
          class="absolute w-full h-10 bg-white bottom-0 left-0 smoke-rectangle -scale-100"
        ></div>
      </div>
    </div>
  </div>
</template>

<style>
.smoke-rectangle {
  background: linear-gradient(to bottom, #fcf7f3 0%, rgba(255, 165, 0, 0) 100%);
}

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
    transform: translateY(-133%); /* Adjust based on slide height */
  }
}

/* Auto-scrolling effect using CSS animations */
.slider {
  animation: scroll 8s infinite linear;
  /* transform: translateY(0%);
  transform: translateY(-133%); */
}
</style>
