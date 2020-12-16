<template>
  <router-link :to="`/news-view/${news.id}`" :news="news">
    <div class="trending-news-item">
      <div
        class="img-container"
        :style="{
          backgroundImage: `url(${require(`@/assets/images/${news.img}`)})`,
        }"
      ></div>

      <div class="d-flex">
        <p class="type">{{ news.category }}</p>
        <p class="slash-icon mx-3">/</p>
        <p class="date">{{ news.date }}</p>
      </div>

      <div class="details">
        <h4>{{ news.title }}</h4>
        <p>
          {{ news.short }}
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    news: Object,
  },
};
</script>

<style></style>
