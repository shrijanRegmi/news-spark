<template>
  <div class="home">
    <Header />
    <div class="container">
      <Landing />
      <FeaturedNews />
      <TrendingNews />
    </div>
    <StackedNews />
    <div class="container">
      <EntertainmentNews />
      <SportsNews />
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
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/home.scss";
</style>
