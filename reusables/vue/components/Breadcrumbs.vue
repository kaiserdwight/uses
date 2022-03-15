<template>
  <div class="tw-ml-52 2xl:tw-mx-auto">
    <div class="tw-mx-auto tw-mt-4 tw-pt-2 tw-pb-11 tw-px-6 tw-w-full tw-max-w-7xl">
      <ul class="tw-mx-10 2xl:tw-mx-5 tw-text-tan tw-text-sm">
        <li class="tw-inline">
          <a href="/" class="tw-underline tw-text-tan hover:tw-text-tan">Home</a>
        </li>

        <li class="tw-inline" v-for="(link, key) in lists" :key="key">
          <span class="ml-1">>>></span>

          <router-link
            :to="{ path: link.path }"
            class="tw-underline tw-text-tan hover:tw-text-tan"
            v-text="link.name"
          ></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: {},
    };
  },

  created() {
    window.events.$on("breadcrumbs", (data) => {
      this.lists = data.paths;
    });
  },
};
</script>