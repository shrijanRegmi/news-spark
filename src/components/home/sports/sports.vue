<template>
  <div class="sports-news">
    <h3>खेल समाचार</h3>
    <div class="row mt-3">
      <div class="col-lg-4 mt-2">
        <TrendingNewsItem :news="getSports[0]" />
        <BorderBtn class="mt-3" />
      </div>
      <div class="col-lg-8 mt-4 mt-lg-0">
        <div class="row">
          <div v-for="news in getSports" :key="news.id" class="col-md-6">
            <LandingSideItem :news="news" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TrendingNewsItem from "../trending/trending_news_item";
import LandingSideItem from "../landing/landing_side_item";
import BorderBtn from "../../border_btn";
import { mapGetters } from "vuex";

export default {
  name: "SportsNews",
  components: {
    TrendingNewsItem,
    LandingSideItem,
    BorderBtn,
  },
  computed: mapGetters(["getSports"]),
};
</script>

<style lang="scss" scoped>
@import "@/styles/home.scss";
</style>
