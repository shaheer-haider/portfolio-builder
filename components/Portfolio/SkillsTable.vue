<template>
  <div>
    <div class="space-y-3 mt-4 pt-2">
      <div class="relative">
        <div class="absolute right-0 top-0 h-full flex items-center gap-x-1 mr-1">
          <div class="h-[50%] w-[2px] bg-fgPrimary block"></div>
          <Icon
            class="text-2xl text-fgPrimary"
            name="material-symbols:keyboard-arrow-down-rounded"
          />
        </div>

        <input
          v-model="inputValue"
          @focusout="focusInput = false"
          @focusin="
            () => {
              focusInput = true;
              lockSelectFocus = true;
            }
          "
          class="appearance-none px-3 py-2 bg-bgSecondary border rounded border-fgPrimary text-fgSecondary focus:outline-none focus:border-fgSecondary w-full"
          placeholder="Search..."
        />

        <div
          v-if="focusInput || lockSelectFocus"
          class="absolute w-full max-h-[250px] overflow-y-auto bg-white top-[calc(100%_+_1px)] border border-fgPrimary rounded"
        >
          <div
            v-for="(option, index) in props.fieldData.options
              ?.filter((e) => !inputValue || e.toLowerCase().includes(inputValue))
              .filter((e) => !props.fieldData.value.includes(e))"
            class="py-1 px-3 hover:bg-bgPrimary cursor-pointer"
            @click="
              () => {
                props.fieldData.value.push({ name: option, level: null });
                lockSelectFocus = false;
              }
            "
            :class="index !== 0 && 'border-t'"
          >
            <span>{{ option }}</span>
          </div>
        </div>
      </div>
      <table v-if="props.fieldData.value?.length" class="w-full text-center">
        <thead>
          <tr>
            <th class="border-b py-1 w-[350px]"></th>
            <th class="border-b py-1">Beginner</th>
            <th class="border-b py-1">Intermediate</th>
            <th class="border-b py-1">Advanced</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="skill in props.fieldData.value">
            <td class="border-b py-2 w-[350px] text-left pl-2 flex items-center gap-x-1">
              <Icon
                @click="
                  () => {
                    const index = props.fieldData.value.indexOf(skill);
                    if (index !== -1) {
                      props.fieldData.value.splice(index, 1);
                    }
                  }
                "
                class="text-xl cursor-pointer hover:text-red-600"
                name="material-symbols-light:delete-outline"
              />
              <span>{{ skill.name }}</span>
            </td>
            <td class="border-b py-2">
              <input v-model="skill.level" type="radio" name="python" value="beginner" />
            </td>
            <td class="border-b py-2">
              <input
                v-model="skill.level"
                type="radio"
                name="python"
                value="intermediate"
              />
            </td>
            <td class="border-b">
              <input
                class="py-2"
                v-model="skill.level"
                type="radio"
                name="python"
                value="advanced"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["fieldData"]);
const focusInput = ref(false);
const lockSelectFocus = ref(false);
const inputValue = ref();
</script>
