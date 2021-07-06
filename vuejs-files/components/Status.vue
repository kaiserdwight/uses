<template>
  <button
    :class="`badge ${active ? 'tw-text-green-600' : 'tw-text-red-600'}`"
    :title="title"
    @click.prevent="toggle"
  >
    <slot :isActive="active">
      <!-- https://heroicons.com/ solid/thumbs-up -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="tw-inline-block tw-h-4 tw-w-4 tw-mr-1"
        viewBox="0 0 20 20"
        fill="currentColor"
        v-if="active"
      >
        <path
          d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
        />
      </svg>
      <!-- https://heroicons.com/ solid/thumbs-down -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="tw-inline-block tw-h-4 tw-w-4 tw-mr-1"
        viewBox="0 0 20 20"
        fill="currentColor"
        v-else
      >
        <path
          d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"
        />
      </svg>

      <span v-text="active ? 'Activated' : 'Deactivated'"></span>
    </slot>
  </button>
</template>

<script>
export default {
  props: {
    attributes: { type: Object, required: true },
    endpoint: { type: String, required: true },
  },

  data() {
    return {
      active: this.attributes.status,
    };
  },
  computed: {
    title() {
      return this.active ? "Click to Deactivate" : "Click to Activate";
    },
  },
  methods: {
    /* toggleStatus() {
      const payload = {
        status: !this.active,
      };

      axios
        .put(this.endpoint, payload)
        .then(({ data }) => {
          this.active = !this.active;
          flash(data.success);
        })
        .catch(({ response }) => {
          flash(response.data.message, "danger");
        });
    }, */
    toggle() {
      this.active ? this.destroy() : this.create();
    },
    destroy() {
      axios
        .put(this.endpoint, {
          status: false,
        })
        .then(({ data }) => {
          this.active = false;
          flash(data.success, "warning");
        })
        .catch(({ response }) =>
          flash("Something went wrong. Please try again.", "danger")
        );
    },
    create() {
      axios
        .put(this.endpoint, {
          status: true,
        })
        .then(({ data }) => {
          this.active = true;
          flash(data.success, "success");
        })
        .catch(({ response }) =>
          flash("Something went wrong. Please try again.", "danger")
        );
    },
  },
};
</script>