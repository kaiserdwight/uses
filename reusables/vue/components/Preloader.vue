<template>
  <div class="loading" v-if="$parent.loading || $parent.submitting">
    <img src="/img/preloader.svg" />
  </div>
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

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  img {
    height: fit-content;
  }
}
</style>