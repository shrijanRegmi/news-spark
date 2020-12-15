<template>
  <div class="mobile-nav text-center">
    <div class="content">
      <div class="links d-flex flex-column align-items-center">
        <a href="#landing" @click="onLinkClick">घर</a>
        <a href="#featured" @click="onLinkClick">विशेष</a>
        <a href="#trending" @click="onLinkClick">राजनीतिक</a>
        <a href="#entertainment" @click="onLinkClick">मनोरञ्जन</a>
        <a href="#sports" @click="onLinkClick">खेलकुद</a>
        <a href="#business" @click="onLinkClick">व्यापार</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileNavbar",
  methods: {
    onLinkClick() {
      let mobileNav = document.querySelector(".mobile-nav");
      let menu = document.querySelector(".menu");
      mobileNav.classList.remove("yes-display");
      menu.classList.remove("menu-change");
    },
  },
};
</script>

<style></style>
