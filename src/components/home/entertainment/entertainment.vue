<template>
  <div class="entertainment-news">
    <h3>मनोरन्जन समाचार</h3>
    
    <div class="row mt-4">
      <div class="col-md">
        <TrendingNewsItem />
      </div>
      <div class="col-md">
        <TrendingNewsItem />
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-md">
        <TrendingNewsItem />
      </div>
      <div class="col-md">
        <TrendingNewsItem />
      </div>
    </div>
  </div>
</template>

<script>
import TrendingNewsItem from "../trending/trending_news_item";

export default {
  name: "EntertainmentNews",
  components: {
    TrendingNewsItem,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/home.scss";
</style>
