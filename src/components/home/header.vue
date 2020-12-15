<template>
  <div class="header">
    <TopSection />
    <div class="container">
      <MiddleSection class="d-none d-md-block" />
    </div>
    <Navbar />
    <MobileNav />
  </div>
</template>

<script>
import TopSection from "./top";
import MiddleSection from "./middle";
import Navbar from "./navbar";
import MobileNav from "@/components/home/mobile_navbar";

export default {
  name: "Header",
  components: {
    TopSection,
    MiddleSection,
    Navbar,
    MobileNav,
  },
};
</script>

<style></style>
