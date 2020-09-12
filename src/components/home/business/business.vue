<template>
  <div class="business-news">
    <div class="row">
      <div class="col-8">
        <h3>Business News</h3>
        <BusinessNewsItem />
        <BusinessNewsItem />
        <BusinessNewsItem />
        <BusinessNewsItem />
      </div>
      <div class="col-4">
        <h3>Most Share</h3>
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

export default {
  name: "Business",
  components: {
    BusinessNewsItem,
    MostShareItem,
  },
};
</script>

<style></style>
