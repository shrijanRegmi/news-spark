<template>
  <div class="interesting-item">
    <div class="row">
      <div class="col-4 p-0">
        <div class="img-container-parent">
          <div
            class="img-container"
            :style="{
              'background-image': `url(${require('@/assets/images/sample-2.jpg')})`,
            }"
          ></div>
        </div>
      </div>
      <div class="col-8">
        <div class="details">
          <h6>
            Japan’s virus success has puzzled the world. Is its luck running
            out?
          </h6>
          <p>People have been infected</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InterestingItem",
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
