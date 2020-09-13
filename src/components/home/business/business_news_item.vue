<template>
  <div class="business-news-item mb-4 mb-md-0">
    <div class="row">
      <div class="col-md">
        <div
          class="img-container"
          :style="{
            'background-image': `url(${require('@/assets/images/sample-6.jpg')})`,
          }"
        ></div>
      </div>
      <div class="col-md mt-4 mt-md-0">
        <div class="d-flex">
          <p class="type">TECHNOLOGY</p>
          <p class="slash-icon mx-3">/</p>
          <p class="date">March 26, 2020</p>
        </div>

        <div class="details">
          <h4>Nancy Zhang a Chinese busy woman and Dhaka</h4>
          <p>
            The property, complete with 30-seat screening from room, a 100-seat
            amphitheater and a swimming pond with sandy shower…
          </p>
          <BorderBtn class="mt-4"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BorderBtn from "@/components/border_btn";

export default {
  name: "BusinessNewsItem",
  components: {
    BorderBtn,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/home.scss";
</style>
