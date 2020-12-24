<template>
  <div class="news-view mt-3 mt-md-5">
    <div class="container">
      <h3>
        {{ news.title }}
      </h3>
      <div
        class="img-container mt-3"
        :style="{
          backgroundImage: `url(${require(`@/assets/images/${news.img}`)})`,
        }"
      ></div>
      <p class="long mt-3" v-html="news.long"></p>

      <div class="more-content">
        <hr />

        <h5>
          यो पनि हेर्नुहोस्
        </h5>
        <div class="row">
          <div class="col-md-6" v-for="news in getNews" :key="news.id">
            <LandingSideItem :news="news" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LandingSideItem from "@/components/home/landing/landing_side_item";

export default {
  name: "NewsView",
  components: {
    LandingSideItem,
  },
  data() {
    return {
      id: this.$route.params.id,
      news: {},
    };
  },
  computed: mapGetters(["getNews"]),
  created() {
    window.scrollTo(0, 0);
    const thisNews = this.getNews.filter((news) => news.id == this.id);
    this.news = thisNews[0];
  },
  metaInfo() {
    return {
      title: "गुनासो चौतारी",
      meta: [
        {
          name: "description",
          content: "This is description",
        },
        { property: "og:title", content: "This is title" },
        { property: "og:site_name", content: "गुनासो चौतारी" },
        {
          property: "og:description",
          content: "This is desc",
        },
        { property: "og:type", content: "News" },
        {
          property: "og:url",
          content: "https://gunasochautari.com/",
        },
        {
          property: "og:image",
          content: "https://gunasochautari.com/img/logo.1d5c9cdd.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/news_view.scss";
</style>
