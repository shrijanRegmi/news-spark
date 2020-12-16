<template>
  <router-link :to="`/news-view/${news.id}`" :news="news">
    <div class="featured-item">
      <div class="parent-container">
        <div
          class="img-container"
          :style="{
            'background-image': `url(${require(`@/assets/images/${news.img}`)})`,
            'background-position': 'center',
          }"
        >
          <div class="content">
            <div class="d-flex">
              <p class="type font-weight-bold">{{ news.category }}</p>
              <p class="slash-icon mx-3">/</p>
              <p class="date">{{ news.date }}</p>
            </div>

            <p class="title">
              {{ news.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "FeaturedItem",
  props: {
    news: Object,
  },
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
