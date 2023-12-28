<template>
  <div>
    <form class="space-y-10">
      <template v-for="fieldData in activeTabFields">
        <PortfolioInputField v-if="checkCondition(fieldData)" :fieldData="fieldData" />
      </template>
    </form>
  </div>
</template>

<script setup>
import portfolioFormsData from "@/assets/data/portfolioFormsData.json";

const props = defineProps({
  activeTab: {
    type: String,
    required: true,
  },
});

const PortfolioFormsData = ref(portfolioFormsData);
const activeTabFields = computed(() => {
  return PortfolioFormsData.value.find((e) => e.id == props.activeTab)?.formData;
});

function checkCondition(fieldData) {
  if (!fieldData?.condition) {
    return true;
  }

  const dependencyField = activeTabFields.value.find((e) => e.id == fieldData?.condition);

  if (!dependencyField) {
    return true;
  }

  if (fieldData?.negative) {
    return ["no", "false", false].includes(dependencyField?.value);
  } else {
    if (["yes", "true", true].includes(dependencyField?.value)) {
      return true;
    } else {
      return false;
    }
  }
}
</script>
