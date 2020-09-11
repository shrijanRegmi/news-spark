<template>
  <div class="sports-news">
    <h3>Sports News</h3>

    <div class="row mt-3">
      <div class="col-9">
        <div class="row">
          <div class="col-6 mt-2">
            <TrendingNewsItem />
            <BorderBtn class="mt-3" />
          </div>
          <div class="col-6">
            <LandingSideItem />
            <LandingSideItem />
            <LandingSideItem />
            <LandingSideItem />
            <LandingSideItem />
          </div>
        </div>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
import TrendingNewsItem from "../trending/trending_news_item";
import LandingSideItem from "../landing/landing_side_item";
import BorderBtn from "../border_btn";

export default {
  name: "SportsNews",
  components: {
    TrendingNewsItem,
    LandingSideItem,
    BorderBtn,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/home.scss";
</style>
