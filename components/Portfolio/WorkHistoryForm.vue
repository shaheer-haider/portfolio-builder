<template>
  <div>
    <div class="flex justify-between w-full">
      <h3 class="text-xl font-semibold">Work History</h3>
      <button
        type="button"
        @click="
          () => inputFieldsSet.push(JSON.parse(JSON.stringify(inputFieldInterface)))
        "
        class="text-lg font-semibold border border-transparent text-bgBright hover:border-bgBright pl-2 pr-3 py-1 rounded transition-all"
      >
        <Icon class="block text-2xl" name="material-symbols:add" />
        <span>add another</span>
      </button>
    </div>
    <div
      class="border border-fgPrimary border-dashed rounded px-2 py-2 -mx-1 space-y-2 mt-2"
      v-for="(inputFields, index) in inputFieldsSet"
    >
      <template v-for="field in inputFields">
        <input
          v-if="field.type == 'text'"
          :required="field.required"
          @input="triggerEmit"
          type="text"
          v-model="field.value"
          :placeholder="field.label"
          class="px-3 py-2 border rounded border-fgPrimary text-fgSecondary focus:outline-none focus:border-fgSecondary w-full"
        />
        <div v-else-if="field.type == 'checkbox'" class="flex items-center gap-2 py-2">
          <input
            v-model="field.value"
            @input="triggerEmit"
            type="checkbox"
            :name="field.id"
            :id="field.id"
            class="px-3 py-2"
          />
          <label class="select-none" :for="field.id">{{ field.label }}</label>
        </div>
        <div v-else-if="field.type == 'textarea'">
          <textarea
            v-model="field.value"
            type="text"
            @input="triggerEmit"
            :placeholder="field.label"
            class="px-3 py-2 border rounded border-fgPrimary text-fgSecondary focus:outline-none focus:border-fgSecondary w-full h-24"
          ></textarea>
        </div>
        <div
          v-else-if="field.type == 'fromTo'"
          class="flex flex-col md:flex-row justify-between w-full max-w-[600px] lg:ml-4"
        >
          <div class="md:space-x-3">
            <span class="font-semibold text-lg">From</span>
            <input
              v-model="field.value.from.month"
              :required="field.required"
              @input="triggerEmit"
              type="number"
              placeholder="Month"
              min="1"
              max="12"
              class="px-3 py-2 border rounded border-fgPrimary text-fgSecondary focus:outline-none focus:border-fgSecondary w-full md:w-28"
            />
            <input
              v-model="field.value.from.year"
              :required="field.required"
              type="number"
              @input="triggerEmit"
              min="1000"
              max="9999"
              placeholder="Year"
              class="px-3 py-2 border rounded border-fgPrimary text-fgSecondary focus:outline-none focus:border-fgSecondary w-full md:w-20 appearance-none"
            />
          </div>
          <div class="md:space-x-3">
            <span class="font-semibold text-lg">To</span>
            <input
              v-model="field.value.to.month"
              @input="triggerEmit"
              type="number"
              placeholder="Month"
              min="1"
              max="12"
              class="px-3 py-2 border rounded border-fgPrimary text-fgSecondary focus:outline-none focus:border-fgSecondary w-full md:w-28"
            />
            <input
              v-model="field.value.to.year"
              @input="triggerEmit"
              type="number"
              min="1000"
              max="9999"
              placeholder="Year"
              class="px-3 py-2 border rounded border-fgPrimary text-fgSecondary focus:outline-none focus:border-fgSecondary w-full md:w-20 appearance-none"
            />
          </div>
        </div>

        <div v-else-if="field.type == 'multi-select'" class="space-y-3 mt-4 pt-2">
          <div class="relative">
            <div class="absolute right-0 top-0 h-full flex items-center gap-x-1 mr-1">
              <div class="h-[50%] w-[2px] bg-fgPrimary block"></div>
              <Icon
                class="text-2xl text-fgPrimary"
                :class="field.focusInput ? 'rotate-180' : ''"
                name="material-symbols:keyboard-arrow-down-rounded"
              />
            </div>
            <div
              @click="field.focusInput = !field.focusInput"
              class="h-[42px] py-2 px-4 bg-bgSecondary select-none border rounded border-fgPrimary text-fgSecondary focus:outline-none focus:border-fgSecondary w-full"
            >
              Select Options
            </div>
            <div
              v-if="field.focusInput"
              class="absolute w-full max-h-[250px] overflow-y-auto bg-white top-[calc(100%_+_1px)] border border-fgPrimary rounded"
            >
              <div
                v-for="(option, index) in field?.options?.filter(
                  (op) => !field.value.includes(op.value)
                )"
                class="py-1 px-3 hover:bg-bgPrimary cursor-pointer"
                @click="
                  () => {
                    field.value.push(option.value);
                    field.focusInput = false;
                  }
                "
                :class="index !== 0 && 'border-t'"
              >
                <span>{{ option.value }}</span>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap gap-x-2 gap-y-1">
            <span
              class="border border-fgSecondary px-2 pt-[2px] rounded-lg"
              v-for="(value, valIndex) in field.value"
              >{{ value }}

              <button
                type="button"
                @click="
                  () => {
                    field.value?.splice(valIndex, 1);
                  }
                "
              >
                x
              </button>
            </span>
          </div>
        </div>

        <div v-else class="space-y-1">
          <label class="font-bold text-lg">
            {{ field.label }}
          </label>
          <div v-for="(item, index) in field.value" class="relative">
            <input
              required
              v-model="item.value"
              @input="triggerEmit"
              type="text"
              class="px-3 py-2 border rounded border-fgPrimary text-fgSecondary focus:outline-none focus:border-fgSecondary w-full"
            />
            <button
              v-if="field.value.length > 1"
              type="button"
              @click="
                () => {
                  field.value.splice(index, 1);
                }
              "
            >
              <Icon
                class="block text-2xl absolute top-2 right-2 text-bgBright"
                name="material-symbols-light:delete-outline"
              />
            </button>
          </div>
          <div class="w-full flex justify-end mt-2">
            <button
              type="button"
              @click="() => field.value.push({ value: '' })"
              class="text-lg font-semibold border text-fgSecondary border-fgSecondary pl-2 pr-3 py-1 rounded transition-all"
            >
              <Icon class="block text-2xl" name="material-symbols:add" />
              <span>add more</span>
            </button>
          </div>
        </div>
      </template>
      <div class="flex justify-end">
        <button
          v-if="inputFieldsSet.length > 1"
          type="button"
          @click="inputFieldsSet.splice(index, 1)"
          class="text-lg font-semibold border border-transparent text-bgBright hover:border-bgBright pl-2 pr-3 py-1 rounded transition-all !-mt-2"
        >
          <Icon class="block text-2xl" name="material-symbols-light:delete-outline" />
          <span>Remove</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["value"]);
const emits = defineEmits(["updateValue"]);

const inputFieldInterface = ref([
  {
    id: "employeeName",
    value: "",
    label: "Employee Name",
    type: "text",
    required: true,
  },
  {
    id: "title",
    value: "",
    label: "Title",
    type: "text",
    required: true,
  },
  {
    id: "location",
    value: "",
    label: "Location (optional)",
    type: "text",
    required: false,
  },
  {
    id: "currentWork",
    value: "",
    label: "I currently work here",
    type: "checkbox",
    required: false,
  },
  {
    id: "workFromTo",
    value: {
      from: {
        month: null,
        year: null,
      },
      to: {
        month: null,
        year: null,
      },
    },
    label: "I currently work here",
    type: "fromTo",
    required: true,
  },
  {
    id: "summary",
    value: "",
    label: "Summary (optional)",
    type: "textarea",
    required: false,
  },
  {
    id: "details",
    value: [{ value: "" }],
    label: "Details",
    type: "multi-text",
    required: false,
  },
  {
    id: "skills",
    label: "Skills",
    value: [],
    type: "multi-select",
    required: true,
    options: [],
    focusInput: false,
  },
]);

async function loadSkillOptions() {
  // const options = await axios
  const options = [
    {
      label: "Software Engineering",
      value: "Software Engineering",
    },
    {
      label: "Hardware Engineering",
      value: "Hardware Engineering",
    },
  ];
  inputFieldInterface.value.find((obj) => obj.id == "skills").options = options;
}
await loadSkillOptions();

const inputFieldsSet = ref(
  props.value || [JSON.parse(JSON.stringify(inputFieldInterface.value))]
);
function triggerEmit() {
  emits("updateValue", inputFieldsSet.value);
}
</script>
