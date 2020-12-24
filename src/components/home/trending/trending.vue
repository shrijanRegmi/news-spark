<template>
  <div class="trending-news">
    <div class="row">
      <div class="col-lg-8">
        <h3>राजनीतिक समाचार</h3>
        <div class="top-section">
          <div class="row">
            <div class="col-md">
              <TrendingNewsItem :news="getPolitics[0]" />
            </div>

            <div class="col-md">
              <TrendingNewsItem :news="getPolitics[1]" />
            </div>
          </div>
        </div>

        <div class="bottom-section">
          <div class="row">
            <div class="col-md-6" v-for="(news, index) in getPolitics" :key="news.id">
              <LandingSideItem v-if="index > 1" :news="news" />
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 most-views mt-5 mt-lg-0">
        <h4>धेरै हेरिएको</h4>
        <div v-for="(news, index) in getNews" :key="news.id">
          <LandingSideItem v-if="index < 6" :news="news" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LandingSideItem from "../landing/landing_side_item";
import TrendingNewsItem from "./trending_news_item";
import { mapGetters } from "vuex";

export default {
  name: "TrendingNews",
  components: {
    LandingSideItem,
    TrendingNewsItem,
  },
  computed: mapGetters(["getPolitics", "getNews"]),
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
