<template>
  <div class="home">
    <Header />
    <div class="container">
      <Landing />
      <FeaturedNews />
      <TrendingNews />
    </div>
    <StackedNews />
  </div>
</template>

<script>
import Header from "@/components/home/header";
import Landing from "@/components/home/landing/landing";
import FeaturedNews from "@/components/home/featured/featured";
import TrendingNews from "@/components/home/trending/trending";
import StackedNews from "@/components/home/stacked/stacked";

export default {
  name: "Home",
  components: {
    Header,
    Landing,
    FeaturedNews,
    TrendingNews,
    StackedNews,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/home.scss";
</style>
