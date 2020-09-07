<template>
  <div class="navbar">
    <div class="row d-flex justify-content-between align-items-center w-100">
      <div class="col-8">
        <div class="mNav">
          <router-link to="/">Home</router-link>
          <router-link to="/">Pages</router-link>
          <router-link to="/">Posts</router-link>
          <router-link to="/">World</router-link>
          <router-link to="/">Sport</router-link>
          <router-link to="/">Contact</router-link>
        </div>
      </div>
      <div class="col-4">
        <div class="d-flex justify-content-end align-items-center">
          <img src="@/assets/svgs/search.svg" alt="" srcset="" />
          <img src="@/assets/svgs/user.svg" alt="" srcset="" />
          <div class="divider-lg mx-2"></div>
          <div class="weather">
            <div class="d-flex align-items-center">
              <img src="@/assets/svgs/weather.svg" alt="" class="src" />
              <div class="details d-flex flex-column align-items-center">
                <div class="value">
                  13 &#8451;
                </div>
                <div class="location">
                  Kathmandu
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
