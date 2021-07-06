<template>
  <nav
    class="tw-flex tw-justify-between tw-mt-8"
    v-if="$parent.pagination && $parent.tableData.length > 0"
  >
    <!-- entries -->
    <div class="tw-flex tw-items-center tw-gap-1.5 tw-font-semibold tw-text-brown-light">
      <span>Show</span>
      <select
        class="form-control e-select tw-min-w-[70px] tw-text-brown-light"
        v-model="$parent.perPage"
        style="background-position: 90%;"
      >
        <option value="5">5</option>
        <option value="10" selected>10</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <span>entries</span>
    </div>

    <!-- pagination  -->
    <div class="tw-flex tw-items-center tw-space-x-2.5 tw-text-brown-light">
      <!-- prev btn -->
      <button
        :disabled="$parent.currentPage === 1"
        @click.prevent="$parent.changePage($parent.currentPage - 1)"
      >Previous</button>

      <!-- pages -->
      <ul class="tw-flex tw-items-center tw-space-x-2.5">
        <li
          :class="`tw-cursor-pointer ${page == $parent.pagination.meta.current_page ? 'tw-font-semibold tw-underline' : ''}`"
          v-for="(page, key) in $parent.pagesNumber"
          :key="key"
          @click.prevent="$parent.changePage(page)"
          v-text="page"
        ></li>
      </ul>

      <!-- next btn -->
      <button
        :disabled="$parent.currentPage === $parent.pagination.meta.last_page"
        @click.prevent="$parent.changePage($parent.currentPage + 1)"
      >Next</button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  },
};
</script>

<style scoped>
/*  */
</style>