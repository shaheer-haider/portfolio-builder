<template>
  <div class="bg-bgPrimary min-h-screen">
    <div class="h-[125px] flex justify-end py-8 px-12">
      <div class="flex items-center h-max gap-x-1 text-xl">
        <span class="">{{ username }}</span>
        <span class="font-bold">&nbsp;&bull;&nbsp;</span>
        <button class="h-max text-fgBright font-bold">SIGN OUT</button>
      </div>
    </div>
    <NuxtPage class="w-full h-full" />
    <div class="h-[100px]"></div>
  </div>
</template>

<script setup>
const username = "pdotdeep";
</script>
