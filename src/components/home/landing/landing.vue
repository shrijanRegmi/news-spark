<template>
  <div class="landing">
    <Interesting />
    <div class="row">
      <div class="col-lg-8">
        <VideoNews />
      </div>
      <div class="col-lg-4">
        <LandingSide />
      </div>
    </div>
  </div>
</template>

<script>
import Interesting from "./interesting";
import VideoNews from "./video_news";
import LandingSide from "./landing_side";

export default {
  name: "Landing",
  components: {
    Interesting,
    VideoNews,
    LandingSide,
  },
};
</script>

<style></style>
