<template>
  <div class="landing-side">
    <div class="row">
      <div class="col-4">
        <div class="mBtn">सम्बन्धित</div>
      </div>
      <div class="col-4">
        <div class="mBtn">ब्रेकिंग</div>
      </div>
      <div class="col-4">
        <div class="mBtn">लोकप्रिय</div>
      </div>
    </div>

    <div class="content mt-4">
      <LandingSideItem :news="getNews[0]" />
      <LandingSideItem :news="getNews[0]" />
      <LandingSideItem :news="getNews[0]" />
      <LandingSideItem :news="getNews[0]" class="landing-slide-item-last" />
    </div>
  </div>
</template>

<script>
import LandingSideItem from "./landing_side_item";
import { mapGetters } from "vuex";

export default {
  name: "LandingSide",
  components: {
    LandingSideItem,
  },
  computed: mapGetters(["getNews"]),
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
