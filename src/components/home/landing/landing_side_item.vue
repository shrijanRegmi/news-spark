<template>
  <div class="landing-side-item">
    <div class="row">
      <div class="col-3">
        <img
          :src="`${require(`@/assets/images/resized/${news.img}`)}`"
          alt=""
          height="75px"
          width="100%"
        />
      </div>
      <div class="col-9">
        <div class="d-flex">
          <p class="type">{{ news.category }}</p>
          <p class="slash-icon mx-3">/</p>
          <p class="date">{{ news.date }}</p>
        </div>
        <h6>{{ news.short }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingSideItem",
  props: {
    news: Object,
  },
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
