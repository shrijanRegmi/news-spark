<template>
  <div class="most-share-item">
    <div class="row">
      <div class="col-3">
        <div class="number">
          <h4>{{ count }}</h4>
        </div>
      </div>
      <div class="col-9">
        <div class="d-flex">
          <p class="type">TECHNOLOGY</p>
          <p class="slash-icon mx-3">/</p>
          <p class="date">March 26, 2020</p>
        </div>
        <h6>Copa America: Luis Suarez from devastated US</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MostShareItem",
  props: {
    count: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/home.scss";
</style>
