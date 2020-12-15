<template>
  <div class="featured-news">
    <h3>विशेष समाचार</h3>

    <div
      id="featuredCarousel-lg"
      class="carousel slide d-none d-lg-block"
      data-ride="carousel"
    >
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div class="row">
            <div class="col">
              <FeaturedItem :news="getFeatured[0]" />
            </div>
            <div class="col">
              <FeaturedItem :news="getFeatured[1]" />
            </div>
            <div class="col">
              <FeaturedItem :news="getFeatured[2]" />
            </div>
            <div class="col">
              <FeaturedItem :news="getFeatured[3]" />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <FeaturedItem :news="getFeatured[4]" />
            </div>
            <div class="col">
              <FeaturedItem :news="getFeatured[5]" />
            </div>
            <div class="col">
              <FeaturedItem :news="getFeatured[6]" />
            </div>
            <div class="col">
              <FeaturedItem :news="getFeatured[7]" />
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#featuredCarousel-lg"
        role="button"
        data-slide="prev"
      >
        <i class="fas fa-chevron-left"></i>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#featuredCarousel-lg"
        role="button"
        data-slide="next"
      >
        <i class="fas fa-chevron-right"></i>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div
      id="featuredCarousel-md"
      class="carousel slide d-none d-md-block d-lg-none"
      data-ride="carousel"
    >
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div class="row">
            <div class="col">
              <FeaturedItem :news="getFeatured[0]"/>
            </div>
            <div class="col">
              <FeaturedItem :news="getFeatured[1]"/>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <FeaturedItem :news="getFeatured[2]"/>
            </div>
            <div class="col">
              <FeaturedItem :news="getFeatured[3]"/>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <FeaturedItem :news="getFeatured[4]"/>
            </div>
            <div class="col">
              <FeaturedItem :news="getFeatured[5]"/>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <FeaturedItem :news="getFeatured[6]"/>
            </div>
            <div class="col">
              <FeaturedItem :news="getFeatured[7]"/>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#featuredCarousel-md"
        role="button"
        data-slide="prev"
      >
        <i class="fas fa-chevron-left"></i>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#featuredCarousel-md"
        role="button"
        data-slide="next"
      >
        <i class="fas fa-chevron-right"></i>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div
      id="featuredCarousel-sm"
      class="carousel slide d-block d-md-none"
      data-ride="carousel"
    >
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div class="row">
            <div class="col">
              <FeaturedItem :news="getFeatured[0]"/>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <FeaturedItem :news="getFeatured[1]"/>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <FeaturedItem :news="getFeatured[2]"/>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <FeaturedItem :news="getFeatured[3]"/>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <FeaturedItem :news="getFeatured[4]"/>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <FeaturedItem :news="getFeatured[5]"/>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <FeaturedItem :news="getFeatured[6]"/>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <FeaturedItem :news="getFeatured[7]"/>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#featuredCarousel-sm"
        role="button"
        data-slide="prev"
      >
        <i class="fas fa-chevron-left"></i>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#featuredCarousel-sm"
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
import { mapGetters } from "vuex";

export default {
  name: "FeaturedNews",
  components: {
    FeaturedItem,
  },
  computed: mapGetters(["getFeatured"]),
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
