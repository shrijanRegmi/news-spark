<template>
  <div class="home">
    <div class="container">
      <Landing id="landing" />
      <FeaturedNews id="featured" />
      <TrendingNews id="trending" />
    </div>
    <StackedNews />
    <div class="container">
      <EntertainmentNews id="entertainment" />
      <SportsNews id="sports" />
      <BusinessNews id="business" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/home/header";
import Landing from "@/components/home/landing/landing";
import FeaturedNews from "@/components/home/featured/featured";
import TrendingNews from "@/components/home/trending/trending";
import StackedNews from "@/components/home/stacked/stacked";
import EntertainmentNews from "@/components/home/entertainment/entertainment";
import SportsNews from "@/components/home/sports/sports";
import BusinessNews from "@/components/home/business/business";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Header,
    Landing,
    FeaturedNews,
    TrendingNews,
    StackedNews,
    EntertainmentNews,
    SportsNews,
    BusinessNews,
  },
  computed: mapGetters(["getNews"]),
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
