<template>
  <div class="interesting">
    <div
      id="interestingCarousel-lg"
      class="carousel slide d-none d-lg-block"
      data-ride="carousel"
    >
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div class="row">
            <div class="col">
              <InterestingItem />
            </div>
            <div class="col">
              <InterestingItem />
            </div>
            <div class="col">
              <InterestingItem />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <InterestingItem />
            </div>
            <div class="col">
              <InterestingItem />
            </div>
            <div class="col">
              <InterestingItem />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <InterestingItem />
            </div>
            <div class="col">
              <InterestingItem />
            </div>
            <div class="col">
              <InterestingItem />
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#interestingCarousel-lg"
        role="button"
        data-slide="prev"
      >
        <i class="fas fa-chevron-left"></i>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#interestingCarousel-lg"
        role="button"
        data-slide="next"
      >
        <i class="fas fa-chevron-right"></i>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div
      id="interestingCarousel-md"
      class="carousel slide d-none d-md-block d-lg-none"
      data-ride="carousel"
    >
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div class="row">
            <div class="col">
              <InterestingItem />
            </div>
            <div class="col">
              <InterestingItem />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <InterestingItem />
            </div>
            <div class="col">
              <InterestingItem />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <InterestingItem />
            </div>
            <div class="col">
              <InterestingItem />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <InterestingItem />
            </div>
            <div class="col">
              <InterestingItem />
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#interestingCarousel-md"
        role="button"
        data-slide="prev"
      >
        <i class="fas fa-chevron-left"></i>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#interestingCarousel-md"
        role="button"
        data-slide="next"
      >
        <i class="fas fa-chevron-right"></i>
        <span class="sr-only">Next</span>
      </a>
    </div>

    <div
      id="interestingCarousel-sm"
      class="carousel slide d-block d-md-none"
      data-ride="carousel"
    >
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div class="row">
            <div class="col">
              <InterestingItem />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <InterestingItem />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <InterestingItem />
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="row">
            <div class="col">
              <InterestingItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InterestingItem from "./interesting_item";

export default {
  name: "Interesting",
  components: {
    InterestingItem,
  },
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
