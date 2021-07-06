<template>
  <div class="input-group">
    <input
      :class="classes"
      :type="type"
      :placeholder="placeholder"
      :required="required"
      :value="$attrs.value"
      @input="handleInput"
    />

    <div class="input-group-append">
      <div class="input-group-text" @click="showPassword">
        <i class="fas" :class="eyeIcon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
    },
    inputClass: {
      type: String | Array,
      required: false,
    },
  },

  data() {
    return {
      type: "password",
    };
  },

  computed: {
    classes() {
      return ["form-control", this.inputClass];
    },

    eyeIcon() {
      return this.type == "password" ? "fa-eye-slash" : "fa-eye";
    },
  },

  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },

    showPassword() {
      if (this.type == "password") {
        return (this.type = "text");
      }

      return (this.type = "password");
    },
  },
};
</script>