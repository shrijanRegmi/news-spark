<template>
  <div class="entertainment-news">
    <h3>मनोरन्जन समाचार</h3>

    <div class="row mt-4">
      <div class="col-md">
        <TrendingNewsItem :news="getNews[0]" />
      </div>
      <div class="col-md">
        <TrendingNewsItem :news="getNews[0]" />
      </div>
    </div>

    <div class="row mt-3">
      <div class="col-md">
        <TrendingNewsItem :news="getNews[0]" />
      </div>
      <div class="col-md">
        <TrendingNewsItem :news="getNews[0]" />
      </div>
    </div>
  </div>
</template>

<script>
import TrendingNewsItem from "../trending/trending_news_item";
import { mapGetters } from "vuex";

export default {
  name: "EntertainmentNews",
  components: {
    TrendingNewsItem,
  },
  computed: mapGetters(["getNews"]),
};
</script>

<style lang="scss" scoped>
@import "@/styles/home.scss";
</style>
