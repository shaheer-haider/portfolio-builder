<template>
  <div class="mx-auto min-h-screen pt-10 pb-20">
    <div class="flex flex-col lg:flex-row h-full justify-center gap-8">
      <div
        class="bg-white border lg:shadow-[0px_4px_4px_#00000040] px-4 py-4 min-w-[256px] h-max rounded lg:sticky top-10 left-0"
      >
        <h2 class="text-2xl mb-6 text-fgSecondary px-1">My Profile</h2>
        <div class="space-y-[2px]">
          <a
            v-for="(tab, index) in PortfolioFormsData"
            class="text-xl text-[#666666] cursor-pointer"
            @click="currentTabIndex = index"
          >
            <div
              class="flex items-center px-2 py-3 rounded-md"
              :class="activeTab.id == tab.id ? 'bg-[#9ac5eb] text-white' : ''"
            >
              <div class="w-8">
                <span v-if="currentTabIndex - 1 < index" class="font-semibold"
                  >{{ index + 1 }}.</span
                >
                <Icon
                  v-else
                  class="text-4xl block -m-2"
                  :class="activeTab.id == tab.id ? 'text-white' : 'text-[#69BA41]'"
                  name="material-symbols:fitbit-check-small"
                />
              </div>
              <p>{{ tab.label }}</p>
            </div>
          </a>
        </div>
      </div>
      <div class="w-full max-w-[700px] lg:px-0 px-4">
        <h2 class="text-4xl mb-4 text-fgSecondary">{{ activeTab.label }}</h2>
        <hr class="mb-12" />
        <template v-if="activeTab?.tagline?.length">
          <h2 class="text-lg mb-4 text-fgSecondary" v-html="activeTab.tagline"></h2>
          <hr class="mb-12" />
        </template>
        <PortfolioForm
          @updateCurrentTabIndex="updateCurrentTabIndex"
          :currentTabIndex="currentTabIndex"
          :PortfolioFormsData="PortfolioFormsData"
          :activeTab="activeTab.id"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import portfolioFormsData from "@/assets/data/portfolioFormsData.json";

definePageMeta({
  layout: "portfolio",
});

function updateCurrentTabIndex(value) {
  currentTabIndex.value = value;
}

const PortfolioFormsData = ref(portfolioFormsData);

const currentTabIndex = ref(0);
const activeTab = computed(() => {
  if (currentTabIndex.value < 0) return PortfolioFormsData.value[0];
  else if (currentTabIndex.value >= PortfolioFormsData.value?.length)
    return PortfolioFormsData.value[PortfolioFormsData.value.length - 1];
  else return PortfolioFormsData.value[currentTabIndex.value];
});
</script>
