<template>
  <div class="image-video-news">
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <div
            class="img-container"
            :style="{
              'background-image': `url(${require('@/assets/images/sample-3.jpg')})`,
            }"
          ></div>
        </div>
        <div class="col">
          <div
            class="img-container"
            :style="{
              'background-image': `url(${require('@/assets/images/sample-3.jpg')})`,
            }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageVideoNews",
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
