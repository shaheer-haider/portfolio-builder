<template>
    <div>
      <div class="flex justify-between w-full">
        <h3 class="text-xl font-semibold">Education</h3>
        <button
          class="text-lg font-semibold border border-transparent text-bgBright hover:border-bgBright pl-2 pr-3 py-1 rounded transition-all"
        >
          <Icon class="block text-2xl" name="material-symbols:add" />
          <span>add another</span>
        </button>
      </div>

      <div
        class="border border-fgPrimary border-dashed rounded px-2 py-2 -mx-1 space-y-2 mt-2"
        v-for="inputFields in inputFieldsSet"
      >
        <template v-for="field in inputFields">
          <input
            v-if="field.type == 'text'"
            type="text"
            :placeholder="field.label"
            class="px-3 py-2 border rounded border-fgPrimary text-fgSecondary focus:outline-none focus:border-fgSecondary w-full"
          />
          <div v-else-if="field.type == 'checkbox'" class="flex items-center gap-2 py-2">
            <input type="checkbox" :name="field.id" :id="field.id" class="px-3 py-2" />
            <label class="select-none" :for="field.id">{{ field.label }}</label>
          </div>
          <div v-else-if="field.type == 'textarea'">
            <textarea
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
              type="number"
              placeholder="Month"
              min="1000"
              max="9999"
              class="px-3 py-2 border rounded border-fgPrimary text-fgSecondary focus:outline-none focus:border-fgSecondary w-full md:w-28"
            />
            <input
              v-model="field.value.from.year"
              type="number"
              placeholder="Year"
              class="px-3 py-2 border rounded border-fgPrimary text-fgSecondary focus:outline-none focus:border-fgSecondary w-full md:w-20 appearance-none"
            />
          </div>
          <div class="md:space-x-3">
            <span class="font-semibold text-lg">To</span>
            <input
              v-model="field.value.to.month"
              type="number"
              placeholder="Month"
              min="1000"
              max="9999"
              class="px-3 py-2 border rounded border-fgPrimary text-fgSecondary focus:outline-none focus:border-fgSecondary w-full md:w-28"
            />
            <input
              v-model="field.value.to.year"
              type="number"
              placeholder="Year"
              class="px-3 py-2 border rounded border-fgPrimary text-fgSecondary focus:outline-none focus:border-fgSecondary w-full md:w-20 appearance-none"
            />
          </div>
        </div>
        </template>
        <div class="flex justify-end">
          <button
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
      required: true,
    },
    {
      id: "summary",
      value: "",
      label: "Summary (optional)",
      type: "textarea",
      required: true,
    },
  ];

  const inputFieldsSet = ref([inputFieldInterface]);
  </script>
