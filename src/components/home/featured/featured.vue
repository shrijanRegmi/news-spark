<template>
  <div class="featured-news">
    <h3>Featured News</h3>
    <div id="featuredCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div class="row">
            <div class="col">
              <FeaturedItem />
            </div>
            <div class="col">
              <FeaturedItem />
            </div>
            <div class="col">
              <FeaturedItem />
            </div>
            <div class="col">
              <FeaturedItem />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <FeaturedItem />
            </div>
            <div class="col">
              <FeaturedItem />
            </div>
            <div class="col">
              <FeaturedItem />
            </div>
            <div class="col">
              <FeaturedItem />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <FeaturedItem />
            </div>
            <div class="col">
              <FeaturedItem />
            </div>
            <div class="col">
              <FeaturedItem />
            </div>
            <div class="col">
              <FeaturedItem />
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#featuredCarousel"
        role="button"
        data-slide="prev"
      >
        <i class="fas fa-chevron-left"></i>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#featuredCarousel"
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
import FeaturedItem from "./featured_item";

export default {
  name: "FeaturedNews",
  components: {
    FeaturedItem,
  },
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
