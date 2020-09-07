<template>
  <div class="header">
    <TopSection />
    <div class="container">
      <MiddleSection />
      <Navbar />
    </div>
  </div>
</template>

<script>
import TopSection from "./top";
import MiddleSection from "./middle";
import Navbar from "./navbar";
export default {
  name: "Header",
  components: {
    TopSection,
    MiddleSection,
    Navbar,
  },
};
</script>

<style></style>
