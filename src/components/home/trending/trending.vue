<template>
  <div class="trending-news">
    <h3>Trending News</h3>

    <div class="row">
      <div class="col-8">
        <div class="top-section">
          <div class="row">
            <div class="col">
              <div
                class="img-container"
                :style="{
                  'background-image': `url(${require('@/assets/images/sample-2.jpg')})`,
                }"
              ></div>

              <div class="d-flex">
                <p class="type">TECHNOLOGY</p>
                <p class="slash-icon mx-3">/</p>
                <p class="date">March 26, 2020</p>
              </div>

              <div class="details">
                <h4>Nancy Zhang a Chinese busy woman and Dhaka</h4>
                <p>
                  The property, complete with 30-seat screening from room, a
                  100-seat amphitheater and a swimming pond with sandy shower…
                </p>
              </div>
            </div>

            <div class="col">
              <div
                class="img-container"
                :style="{
                  'background-image': `url(${require('@/assets/images/sample-1.jpeg')})`,
                }"
              ></div>

              <div class="d-flex">
                <p class="type">TECHNOLOGY</p>
                <p class="slash-icon mx-3">/</p>
                <p class="date">March 26, 2020</p>
              </div>

              <div class="details">
                <h4>Nancy Zhang a Chinese busy woman and Dhaka</h4>
                <p>
                  The property, complete with 30-seat screening from room, a
                  100-seat amphitheater and a swimming pond with sandy shower…
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bottom-section">
          <div class="row">
            <div class="col"><LandingSideItem /></div>
            <div class="col"><LandingSideItem /></div>
          </div>
          <div class="row">
            <div class="col"><LandingSideItem /></div>
            <div class="col"><LandingSideItem /></div>
          </div>
          <div class="row">
            <div class="col"><LandingSideItem /></div>
            <div class="col"><LandingSideItem /></div>
          </div>
        </div>
      </div>

      <div class="col-4 most-views">
        <h4>Most Views</h4>

        <LandingSideItem />
        <LandingSideItem />
        <LandingSideItem />
        <LandingSideItem />
        <LandingSideItem />
        <LandingSideItem />
        <LandingSideItem />
      </div>
    </div>
  </div>
</template>

<script>
import LandingSideItem from "../landing/landing_side_item";

export default {
  name: "TrendingNews",
  components: {
    LandingSideItem,
  },
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
