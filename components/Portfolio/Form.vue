<template>
  <div>
    <form @submit.prevent="continueButtonHandler" class="space-y-10">
      <template v-for="fieldData in activeTabFields">
        <PortfolioInputField v-if="checkCondition(fieldData)" :fieldData="fieldData" />
      </template>
      <div class="flex flex-col sm:flex-row gap-y-4 justify-between">
        <button
          @click="backButtonHandler"
          :disabled="currentTabIndex == 0"
          type="button"
          class="btn-primary-white disabled:text-bgPrimary disabled:hover:shadow-none disabled:cursor-not-allowed"
        >
          <Icon name="ep:arrow-left-bold" />
          BACK
        </button>
        <button type="submit" class="btn-primary">
          {{ currentTabIndex == PortfolioFormsData.length - 1 ? 'SUBMIT' : 'CONTINUE' }}
          <Icon name="ep:arrow-right-bold" />
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
const emits = defineEmits(["updateCurrentTabIndex"]);
const props = defineProps({
  currentTabIndex: {
    type: Number,
    default: 0,
  },
  activeTab: {
    type: String,
    required: true,
  },
  PortfolioFormsData: {
    type: Array,
    required: true,
  },
});

const activeTabFields = computed(() => {
  return props.PortfolioFormsData.find((e) => e.id == props.activeTab)?.formData;
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

function continueButtonHandler() {
  const fieldValues = props.PortfolioFormsData.map((e) =>
    e.formData.map((f) => {
      const d = {};
      d[f.id] = f.value;
      return d;
    })
  );
  emits("updateCurrentTabIndex", props.currentTabIndex + 1);

  console.log(fieldValues);
}

function backButtonHandler() {
  emits("updateCurrentTabIndex", props.currentTabIndex - 1);
}
</script>
