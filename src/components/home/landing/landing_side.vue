<template>
  <div class="landing-side">
    <div class="row">
      <div class="col-4">
        <div class="mBtn">RELATED</div>
      </div>
      <div class="col-4">
        <div class="mBtn">BUSINESS</div>
      </div>
      <div class="col-4">
        <div class="mBtn">POPULAR</div>
      </div>
    </div>

    <div class="content mt-4">
      <LandingSideItem />
      <LandingSideItem />
      <LandingSideItem />
      <LandingSideItem class="landing-slide-item-last" />
    </div>
  </div>
</template>

<script>
import LandingSideItem from "./landing_side_item";
export default {
  name: "LandingSide",
  components: {
    LandingSideItem,
  },
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
