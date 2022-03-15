<template>
  <div
    class="tw-flex tw-justify-center tw-items-center tw-p-2.5 tw-bg-white tw-rounded-xl tw-w-full tw-h-full tw-min-h-[14rem] tw-text-center"
    @dragover="dragover"
    @dragleave="dragleave"
    @drop="drop"
    @click="chooseImage"
  >
    <input
      type="file"
      class="tw-w-px tw-h-px tw-opacity-0 tw-overflow-hidden tw-absolute"
      @change="selectImage"
      ref="uploadField"
      accept=".jpg, .jpeg, .png"
    />

    <label class="tw-m-0 tw-text-brown tw-cursor-pointer">
      <div v-if="source">
        <img class="tw-max-h-64" :src="source" />
      </div>

      <div class="tw-flex tw-flex-col tw-justify-center tw-items-center" v-else>
        <!-- heroicons outline/upload -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="tw-h-20 tw-w-tw-h-20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        <p class="tw-mt-4">Choose an image or drag it here</p>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    path: { type: String, required: false },
  },

  data() {
    return {
      imageData: "",
    };
  },

  created() {
    if (this.$attrs.value) {
      return (this.imageData = this.path
        ? `${this.path}/${this.$attrs.value}`
        : this.$attrs.value);
    } else if (this.imageData) {
      return this.imageData;
    }
  },

  computed: {
    source() {
      if (this.$attrs.value && !this.imageData.includes("data:image")) {
        return (this.imageData = this.path
          ? `${this.path}/${this.$attrs.value}`
          : this.$attrs.value);
      } else if (this.imageData) {
        return this.imageData;
      }

      return "";
    },
  },

  methods: {
    chooseImage() {
      this.$refs.uploadField.click();
    },

    selectImage(event) {
      const fileReader = new FileReader();
      const files = this.$refs.uploadField.files;
      const acceptableTypes = ["image/jpg", "image/jpeg", "image/png"];

      if (!acceptableTypes.includes(files[0].type)) {
        return alert("Wrong Image Format!");
      }

      if (files && files[0]) {
        fileReader.readAsDataURL(files[0]);
        fileReader.onload = (evt) => {
          this.imageData = evt.target.result;
        };
        this.$emit("input", files[0]);
      }
    },
    drop(event) {
      event.preventDefault();

      this.$refs.uploadField.files = event.dataTransfer.files;
      this.selectImage();

      // Clean up
      event.currentTarget.classList.add("tw-opacity-100");
      event.currentTarget.classList.remove("tw-opacity-70");
    },
    dragover(event) {
      event.preventDefault();

      if (!event.currentTarget.classList.contains("tw-opacity-70")) {
        event.currentTarget.classList.remove("tw-opacity-100");
        event.currentTarget.classList.add("tw-opacity-70");
      }
    },
    dragleave(event) {
      event.currentTarget.classList.add("tw-opacity-100");
      event.currentTarget.classList.remove("tw-opacity-70");
    },
  },
};
</script>