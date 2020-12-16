<template>
  <router-link :to="`/news-view/${news.id}`" :news="news">
    <div class="landing-side-item">
      <div class="row">
        <div class="col-3">
          <div
            class="img"
            :style="{
              'background-image': `url(${require(`@/assets/images/resized/${news.img}`)})`,
              'background-size': 'cover',
              'background-postion': 'center',
              width: '100%',
              height: '75px',
            }"
          ></div>
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
  </router-link>
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
