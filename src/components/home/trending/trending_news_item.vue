<template>
  <div class="trending-news-item">
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
        The property, complete with 30-seat screening from room, a 100-seat
        amphitheater and a swimming pond with sandy shower…
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
