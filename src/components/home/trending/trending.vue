<template>
  <div class="trending-news">
    <h3>Trending News</h3>

    <div class="row">
      <div class="col-8">
        <div class="top-section">
          <div class="row">
            <div class="col">
              <TrendingNewsItem />
            </div>

            <div class="col">
              <TrendingNewsItem />
            </div>
          </div>
        </div>

        <div class="bottom-section">
          <div class="row">
            <div class="col"><LandingSideItem /></div>
            <div class="col"><LandingSideItem /></div>
          </div>
          <div class="row">
            <div class="col"><LandingSideItem /></div>
            <div class="col"><LandingSideItem /></div>
          </div>
          <div class="row">
            <div class="col"><LandingSideItem /></div>
            <div class="col"><LandingSideItem /></div>
          </div>
        </div>
      </div>

      <div class="col-4 most-views">
        <h4>Most Views</h4>

        <LandingSideItem />
        <LandingSideItem />
        <LandingSideItem />
        <LandingSideItem />
        <LandingSideItem />
        <LandingSideItem />
        <LandingSideItem />
      </div>
    </div>
  </div>
</template>

<script>
import LandingSideItem from "../landing/landing_side_item";
import TrendingNewsItem from "./trending_news_item";

export default {
  name: "TrendingNews",
  components: {
    LandingSideItem,
    TrendingNewsItem,
  },
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
