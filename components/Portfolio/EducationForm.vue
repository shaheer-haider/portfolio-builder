<template>
  <div>
    <div class="flex justify-between w-full">
      <h3 class="text-xl font-semibold">Education</h3>
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
          v-model="field.value"
          @input="triggerEmit"
          type="text"
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
            @input="triggerEmit"
            type="text"
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
              @input="triggerEmit"
              type="number"
              :required="field.required"
              placeholder="Month"
              min="1"
              max="12"
              class="px-3 py-2 border rounded border-fgPrimary text-fgSecondary focus:outline-none focus:border-fgSecondary w-full md:w-28"
            />
            <input
              v-model="field.value.from.year"
              @input="triggerEmit"
              type="number"
              :required="field.required"
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

const inputFieldInterface = [
  {
    id: "schoolName",
    value: "",
    label: "School Name",
    type: "text",
    required: true,
  },
  {
    id: "fieldOfStudy",
    value: "",
    label: "Field of study",
    type: "text",
    required: true,
  },
  {
    id: "degreeType",
    value: "",
    label: "Degree type",
    type: "text",
    required: true,
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
    required: false,
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
];

const inputFieldsSet = ref(
  props.value || [JSON.parse(JSON.stringify(inputFieldInterface))]
);
function triggerEmit() {
  emits("updateValue", inputFieldsSet.value);
}
</script>
