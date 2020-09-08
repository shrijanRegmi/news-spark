<template>
  <div class="featured-item">
    <div class="parent-container">
      <div
        class="img-container"
        :style="{
          'background-image': `url(${require('@/assets/images/sample-5.jpg')})`,
        }"
      >
        <div class="content">
          <div class="d-flex">
            <p class="type font-weight-bold">TECHNOLOGY</p>
            <p class="slash-icon mx-3">/</p>
            <p class="date">March 26, 2020</p>
          </div>

          <p class="title">
            Venezuela elan govt and opposit the property collect
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeaturedItem",
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
