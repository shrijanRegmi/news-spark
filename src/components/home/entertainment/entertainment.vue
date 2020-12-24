<template>
  <div class="entertainment-news">
    <h3>मनोरन्जन समाचार</h3>

    <div class="row mt-4">
      <div class="col-md-6" v-for="news in getEntertainment" :key="news.id">
        <TrendingNewsItem :news="news" />
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
  computed: mapGetters(["getEntertainment"]),
};
</script>

<style lang="scss" scoped>
@import "@/styles/home.scss";
</style>
