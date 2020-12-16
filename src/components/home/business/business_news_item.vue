<template>
  <router-link :to="`/news-view/${news.id}`" :news="news"
    ><div class="business-news-item mb-4 mb-md-0">
      <div class="row">
        <div class="col-md">
          <div
            class="img-container"
            :style="{
              'background-image': `url(${require(`@/assets/images/${news.img}`)})`,
              'background-position': 'center',
            }"
          ></div>
        </div>
        <div class="col-md mt-4 mt-md-0">
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
            <BorderBtn class="mt-4" />
          </div>
        </div>
      </div></div
  ></router-link>
</template>

<script>
import BorderBtn from "@/components/border_btn";

export default {
  name: "BusinessNewsItem",
  components: {
    BorderBtn,
  },
  props: {
    news: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/home.scss";
</style>
