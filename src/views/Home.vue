<template>
  <div class="home">
    <Header />
    <div class="container">
      <Landing />
      <FeaturedNews />
    </div>
  </div>
</template>

<script>
import Header from "@/components/home/header";
import Landing from "@/components/home/landing/landing";
import FeaturedNews from "@/components/home/featured/featured";

export default {
  name: "Home",
  components: {
    Header,
    Landing,
    FeaturedNews,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/home.scss";
</style>
