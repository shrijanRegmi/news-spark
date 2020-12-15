<template>
  <div class="stacked-news">
    <div class="main-container">
      <ImageVideoNews />
      <div class="container">
        <div class="content">
          <h1 class="text-white">
            कोरोना भाइरस स्वास्थ्य: कोभिड-१९ को फोक्सोमा दीर्घकालीन असर कस्तो
          </h1>
          <p class="text-white">
            कोभिड-१९ ले सङ्क्रमित मानिसहरूको फोक्सोमा तीन महिनाभन्दा धेरै
            समयपश्चात् पनि खराबी गराइरहेको पाइएको अनुसन्धानकर्ताहरूले बताएका
            छन्।
          </p>
          <BorderBtn />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageVideoNews from "@/components/home/stacked/image_video";
import BorderBtn from "@/components/border_btn";

export default {
  name: "StackedNews",
  components: {
    ImageVideoNews,
    BorderBtn,
  },
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
