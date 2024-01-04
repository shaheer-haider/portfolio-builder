<template>
  <div>
    <PortfolioWorkHistoryForm
      v-if="props.fieldData.type == 'work_history'"
      @updateValue="(e) => (props.fieldData.value = e)"
      :value="props.fieldData.value"
    />
    <PortfolioEducationForm
      v-else-if="props.fieldData.type == 'education'"
      @updateValue="(e) => (props.fieldData.value = e)"
      :value="props.fieldData.value"
    />
    <template v-else>
      <p class="font-medium text-lg space-x-1">
        {{ props.fieldData.label }}
        <span class="text-bgBright" v-if="props.fieldData.required">*</span>
      </p>
      <input
        v-if="props.fieldData.type == 'text'"
        v-model="props.fieldData.value"
        :required="props.fieldData.required"
        type="text"
        :placeholder="props.fieldData.placeholder"
        class="px-3 py-2 mt-2 border rounded border-fgPrimary text-fgSecondary focus:outline-none focus:border-fgSecondary w-full"
      />
      <div v-else-if="props.fieldData.type == 'radio'" class="space-y-3 mt-4">
        <div v-for="(option, index) in props.fieldData.options()" class="space-x-2">
          <input
            v-model="props.fieldData.value"
            :id="props.fieldData.id + index"
            :required="props.fieldData.required"
            :value="option.value"
            type="radio"
            :name="props.fieldData.id"
          />
          <label :for="props.fieldData.id + index" class="space-x-2">
            <span class="text-fgSecondary text-lg">{{ option.label }}</span>
            <span class="text-fgPrimary">{{ option.mini_label }}</span>
          </label>
        </div>
      </div>
      <div v-else-if="props.fieldData.type == 'checkbox'" class="space-y-3 mt-4">
        <div v-for="(option, index) in props.fieldData.options()" class="space-x-2">
          <input
            v-model="props.fieldData.value"
            :id="props.fieldData.id + index"
            :value="option.value"
            :name="props.fieldData.id"
            type="checkbox"
          />
          <label :for="props.fieldData.id + index" class="space-x-2">
            <span class="text-fgSecondary text-lg">{{ option.label }}</span>
            <span class="text-fgPrimary">{{ option.mini_label }}</span>
          </label>
        </div>
      </div>
      <div v-else-if="props.fieldData.type == 'select'" class="space-y-3 mt-4 pt-2">
        <div class="relative">
          <div class="absolute right-0 top-0 h-full flex items-center gap-x-1 mr-1">
            <div class="h-[50%] w-[2px] bg-fgPrimary block"></div>
            <Icon
              class="text-2xl text-fgPrimary"
              name="material-symbols:keyboard-arrow-down-rounded"
            />
          </div>
          <select
            v-model="props.fieldData.value"
            :required="props.fieldData.required"
            class="appearance-none px-3 py-2 bg-bgSecondary border rounded border-fgPrimary text-fgSecondary focus:outline-none focus:border-fgSecondary w-full"
          >
            <option selected disabled>Select...</option>
            <option v-for="option in props.fieldData.options()" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </div>
      </div>
      <div v-else-if="props.fieldData.type == 'multi-select'" class="space-y-3 mt-4 pt-2">
        <div class="relative">
          <div class="absolute right-0 top-0 h-full flex items-center gap-x-1 mr-1">
            <div class="h-[50%] w-[2px] bg-fgPrimary block"></div>
            <Icon
              class="text-2xl text-fgPrimary"
              :class="props.fieldData.focusInput ? 'rotate-180': ''"
              name="material-symbols:keyboard-arrow-down-rounded"
            />
          </div>

          <div
            @click="props.fieldData.focusInput = !props.fieldData.focusInput"
            class="h-[42px] py-2 px-4 bg-bgSecondary select-none border rounded border-fgPrimary text-fgSecondary focus:outline-none focus:border-fgSecondary w-full"
          >
            Select Options
          </div>
          <div
            v-if="props.fieldData.focusInput"
            class="absolute w-full max-h-[250px] overflow-y-auto bg-white top-[calc(100%_+_1px)] border border-fgPrimary rounded"
          >
            <div
              v-for="(option, index) in props.fieldData.options().filter(op => !props.fieldData.value.includes(op.value))"
              class="py-1 px-3 hover:bg-bgPrimary cursor-pointer"
              @click="
                () => {
                  props.fieldData.value.push(option.value);
                  props.fieldData.focusInput = false;
                }
              "
              :class="index !== 0 && 'border-t'"
            >
              <span>{{ option.value }}</span>
            </div>
          </div>
          <!-- <select
            @input="(e) => props.fieldData.value?.push(e.target.value)"
            :required="props.fieldData.required"
            class="appearance-none px-3 py-2 bg-bgSecondary border rounded border-fgPrimary text-fgSecondary focus:outline-none focus:border-fgSecondary w-full"
          >
            <option selected disabled>Select...</option>
            <option
            @click="(e) => props.fieldData.value?.push(e.target.value)"
              v-for="option in props.fieldData
                .options()"
              :value="option.value"
              :disabled="props.fieldData.value.includes(option.value)"
            >
              {{ option.label }}
            </option>
          </select> -->
        </div>
        <div class="flex flex-wrap gap-x-2 gap-y-1">
          <span
            class="border border-fgSecondary px-2 pt-[2px] rounded-lg"
            v-for="(value, valIndex) in props.fieldData.value"
            >{{ value }}

            <button
              type="button"
              @click="
                () => {
                  props.fieldData.value?.splice(valIndex, 1);
                }
              "
            >
              x
            </button>
          </span>
        </div>
      </div>
      <div v-else-if="props.fieldData.type == 'month_year'" class="space-y-3 space-x-2">
        <input
          v-model="props.fieldData.value.month"
          :required="props.fieldData.required"
          type="number"
          placeholder="Month"
          min="1"
          max="12"
          class="px-3 py-2 border rounded border-fgPrimary text-fgSecondary focus:outline-none focus:border-fgSecondary w-28"
        />
        <input
          v-model="props.fieldData.value.year"
          :required="props.fieldData.required"
          type="number"
          min="1000"
          max="9999"
          placeholder="Year"
          class="px-3 py-2 border rounded border-fgPrimary text-fgSecondary focus:outline-none focus:border-fgSecondary w-20 appearance-none"
        />
      </div>
      <div v-else-if="props.fieldData.type == 'skills'" class="space-y-3 space-x-2">
        <PortfolioSkillsTable :fieldData="props.fieldData" />
      </div>
    </template>
  </div>
</template>

<script setup>
const emits = defineEmits(["updateValue"]);
const props = defineProps({
  fieldData: {
    type: Object,
    required: true,
  },
});
</script>
