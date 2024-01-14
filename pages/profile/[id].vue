<template>
  <div class="bg-bgSecondary min-h-[600px] pb-16 pt-8 page-container">
    <div class="m-auto flex flex-col lg:flex-row justify-center gap-10">
      <div class="relative w-[150px] h-[150px] rounded-full overflow-hidden  lg:m-0 mt-7 m-auto">
        <input
          @change="(e) => updateProfielPic(e)"
          class="w-full h-full absolute top-0 right-0 opacity-0 cursor-pointer"
          type="file"
          accept="img"
        />
        <img :src="profilePic" class="w-[150px] h-[150px]" />
      </div>
      <div class="max-w-[800px] px-8 m-auto lg:m-0">
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
          <div class="py-10 gap-2 flex flex-wrap">
            <button class="btn-primary w-28 sm:w-max">SAVE</button>
            <button class="btn-secondary w-28 sm:w-max">CANCEL</button>
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
const userId = useRoute().params.id;
const profilePic = ref(null);

function fetchProfilePic() {
  profilePic.value = null || "/edit-avatar.png"; // get profile pic
}
fetchProfilePic();

function updateProfielPic(e) {
  const files = e.target.files;
  if (!files.length) return;


  const FR = new FileReader();

  FR.addEventListener("load", function (evt) {
    profilePic.value = evt.target.result;
  });

  const image = files[0];
  FR.readAsDataURL(image)
}

definePageMeta({
  layout: "profile",
});

const formFields = ref([
  {
    id: "firstName",
    label: "First Name",
    value: "",
    focused: false,
    class: "w-full md:w-80 col-span-2 md:col-span-1",
  },
  {
    id: "lastName",
    label: "Last Name",
    value: "",
    focused: false,
    class: "w-full md:w-80 col-span-2 md:col-span-1",
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
  const formValues = getFormValues(formFields.value);
  console.log(formValues);
}
</script>
