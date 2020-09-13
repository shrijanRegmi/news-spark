<template>
  <div class="trending-news">
    <div class="row">
      <div class="col-lg-8">
        <h3>राजनीतिक समाचार</h3>
        <div class="top-section">
          <div class="row">
            <div class="col-md">
              <TrendingNewsItem />
            </div>

            <div class="col-md">
              <TrendingNewsItem />
            </div>
          </div>
        </div>

        <div class="bottom-section">
          <div class="row">
            <div class="col-md"><LandingSideItem /></div>
            <div class="col-md"><LandingSideItem /></div>
          </div>
          <div class="row">
            <div class="col-md"><LandingSideItem /></div>
            <div class="col-md"><LandingSideItem /></div>
          </div>
          <div class="row">
            <div class="col-md"><LandingSideItem /></div>
            <div class="col-md"><LandingSideItem /></div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 most-views mt-5 mt-lg-0">
        <h4>धेरै हेरिएको</h4>

        <LandingSideItem />
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
