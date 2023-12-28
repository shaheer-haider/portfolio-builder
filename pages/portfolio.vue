<template>
  <div class="mx-auto min-h-screen pt-10 pb-20">
    <div class="flex h-full justify-center gap-8">
      <div
        class="bg-white border shadow-[0px_4px_4px_#00000040] px-4 py-4 min-w-[256px] h-max rounded sticky top-10 left-0"
      >
        <h2 class="text-2xl mb-6 text-fgSecondary px-1">My Profile</h2>
        <div class="space-y-[2px]">
          <a
            v-for="(tab, index) in profileTabs"
            class="text-xl text-[#666666] cursor-pointer"
            @click="activeTab = tab"
          >
            <div
              class="flex items-center px-2 py-3 rounded-md"
              :class="activeTab.id == tab.id ? 'bg-[#9ac5eb] text-white' : ''"
            >
              <div class="w-8">
                <span v-if="!tab.completed" class="font-semibold">{{ index + 1 }}.</span>
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
      <div class="w-full max-w-[700px]">
        <h2 class="text-4xl mb-4 text-fgSecondary">{{ activeTab.label }}</h2>
        <hr class="mb-12" />
        <template v-if="activeTab?.tagline?.length">
          <h2 class="text-lg mb-4 text-fgSecondary" v-html="activeTab.tagline"></h2>
          <hr class="mb-12" />
        </template>
        <PortfolioForm :activeTab="activeTab.id" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "portfolio",
});

const profileTabs = ref([
  { id: "personal-info", label: "Personal Info", completed: true },
  { id: "location", label: "Location", completed: true },
  { id: "role", label: "Role", completed: true },
  {
    id: "experience",
    label: "Experience",
    completed: false,

    tagline:
      "Fill out your education and experience manually or <span class='text-bgBright'>click here</span> to upload a resume or LinkedIn profile.",
  },
  { id: "skills", label: "Skills", completed: false },
  { id: "career", label: "Career", completed: false },
  { id: "share", label: "Share", completed: false },
]);

const activeTab = ref(profileTabs.value[1]);
</script>
