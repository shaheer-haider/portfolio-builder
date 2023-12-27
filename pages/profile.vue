<template>
  <div class="bg-bgSecondary min-h-[600px] pb-16 pt-8 page-container">
    <div class="m-auto flex justify-center gap-10">
      <img src="@/assets/images/edit-avatar.png" class="w-[150px] h-[150px] mt-7" alt="" />
      <div class="max-w-[800px]">
        <form @submit.prevent="saveProfileFormSubmit" class="grid grid-cols-2 gap-x-5">
          <div
            v-for="field in formFields"
            class="text-fgPrimary relative space-y-1 py-3"
            :class="field.class"
          >
            <label
              :for="field.id"
              class="text-gray-500 block transition-all"
              :class="
                field.focused || field.value
                  ? 'text-lg'
                  : 'translate-y-8 cursor-text text-xl'
              "
            >
              {{ field.label }}
            </label>
            <input
              @focusin="field.focused = true"
              @focusout="field.focused = false"
              @input="(e) => (field.value = e.target.value)"
              type="text"
              :id="field.id"
              :name="field.id"
              class="border-b-2 border-gray-300 focus:outline-none focus:border-fgSecondary text-xl font-light pb-2 text-fgSecondary w-full"
            />
          </div>
          <div class="py-10 space-x-2">
            <button class="btn-primary">SAVE</button>
            <button class="btn-secondary">CANCEL</button>
          </div>
        </form>
        <div class="space-y-4 pt-6">
          <p class="text-3xl font-bold">Change Password</p>
          <p class="text-lg">Click the button below to receive a password reset email.</p>
          <button class="btn-primary">CHANGE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "profile",
});

const formFields = ref([
  {
    id: "firstName",
    label: "First Name",
    value: "",
    focused: false,
    class: "w-80",
  },
  {
    id: "lastName",
    label: "Last Name",
    value: "",
    focused: false,
    class: "w-80",
  },
  {
    id: "email",
    label: "Email",
    value: "",
    focused: false,
    class: "w-full col-span-2",
  },
  {
    id: "linkedin",
    label: "Your LinkedIn Profile URL",
    value: "",
    focused: false,
    class: "w-full col-span-2",
  },
]);

function getFormValues(formFields) {
  return formFields.map((e) => {
    const data = {};
    data[e.id] = e.value;
    return data;
  });
}
function saveProfileFormSubmit() {
  const formValues = getFormValues(formFields.value)
  console.log(formValues)

}
</script>
