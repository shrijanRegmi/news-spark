<template>
  <div class="business-news">
    <h3>Business News</h3>

    <div class="row">
      <div class="col-9">
        <BusinessNewsItem />
        <BusinessNewsItem />
        <BusinessNewsItem />
        <BusinessNewsItem />
      </div>
    </div>
  </div>
</template>

<script>
import BusinessNewsItem from "./business_news_item";

export default {
  name: "Business",
  components: {
    BusinessNewsItem,
  },
};
</script>

<style></style>
