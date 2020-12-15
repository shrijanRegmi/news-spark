<template>
  <div class="video-news">
    <iframe
      class="img-container"
      src="https://www.youtube.com/embed/AiQBZj5A8O4"
      allowfullscreen
      frameBorder="0"
    ></iframe>

    <div id="vidNewsCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div class="row">
            <div class="col">
              <VideoNewsItem />
            </div>
            <div class="col">
              <VideoNewsItem />
            </div>
            <div class="col">
              <VideoNewsItem />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <VideoNewsItem />
            </div>
            <div class="col">
              <VideoNewsItem />
            </div>
            <div class="col">
              <VideoNewsItem />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <VideoNewsItem />
            </div>
            <div class="col">
              <VideoNewsItem />
            </div>
            <div class="col">
              <VideoNewsItem />
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev d-none d-sm-flex"
        href="#vidNewsCarousel"
        role="button"
        data-slide="prev"
      >
        <i class="fas fa-chevron-left"></i>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next d-none d-sm-flex"
        href="#vidNewsCarousel"
        role="button"
        data-slide="next"
      >
        <i class="fas fa-chevron-right"></i>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
import VideoNewsItem from "./video_news_item";

export default {
  name: "VideoNews",
  components: {
    VideoNewsItem,
  },
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
