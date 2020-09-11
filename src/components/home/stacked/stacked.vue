<template>
  <div class="stacked-news">
    <div class="main-container">
        <ImageVideoNews />
    </div>
  </div>
</template>

<script>
import ImageVideoNews from "@/components/home/stacked/image_video";

export default {
  name: "StackedNews",
  components: {
    ImageVideoNews,
  },
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
