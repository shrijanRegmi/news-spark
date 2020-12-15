<template>
  <div class="business-news">
    <div class="row">
      <div class="col-lg-8">
        <h3>व्यापार समाचार</h3>
        <BusinessNewsItem :news="getNews[0]" />
        <BusinessNewsItem :news="getNews[0]" />
        <BusinessNewsItem :news="getNews[0]" />
      </div>
      <div class="col-lg-4 mt-5 mt-lg-0">
        <h4>सब भन्दा सेयर गरिएको</h4>
        <MostShareItem class="mt-3" count="1" />
        <MostShareItem class="mt-4" count="2" />
        <MostShareItem class="mt-4" count="3" />
        <MostShareItem class="mt-4" count="4" />
        <MostShareItem class="mt-4" count="5" />
        <MostShareItem class="mt-4" count="6" />
        <MostShareItem class="mt-4" count="7" />
      </div>
    </div>
  </div>
</template>

<script>
import BusinessNewsItem from "./business_news_item";
import MostShareItem from "../sports/most_share_item";
import { mapGetters } from "vuex";

export default {
  name: "Business",
  components: {
    BusinessNewsItem,
    MostShareItem,
  },
  computed: mapGetters(["getNews"]),
};
</script>

<style></style>
