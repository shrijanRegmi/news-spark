<template>
  <div class="news-view mt-5">
    <div class="container">
      <div class="display-4">
        {{ news.title }}
      </div>
      <div
        class="img-container mt-3"
        :style="{
          backgroundImage: `url(${require(`@/assets/images/${news.img}`)})`,
        }"
      ></div>
      <p class="long mt-3" v-html="news.long"></p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NewsView",
  data() {
    return {
      id: this.$route.params.id,
      news: {},
    };
  },
  computed: mapGetters(["getNews"]),
  created() {
    const thisNews = this.getNews.filter((news) => news.id == this.id);
    this.news = thisNews[0];
  },
};
</script>

<style lang="sass">
@import "@/styles/news_view.scss";
</style>
