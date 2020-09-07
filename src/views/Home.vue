<template>
  <div class="home">
    <Header />
    <div class="container">
      <Landing />
    </div>
  </div>
</template>

<script>
import Header from "@/components/home/header";
import Landing from "@/components/home/landing/landing";
export default {
  name: "Home",
  components: {
    Header,
    Landing,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/home.scss";
</style>
