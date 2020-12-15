<template>
  <div class="navs">
    <div id="navbar" class="navbar navbar-1 d-none d-md-block">
      <div class="container">
        <div
          class="row d-flex justify-content-between align-items-center w-100"
        >
          <div class="col-8">
            <div class="mNav d-flex">
              <a href="#landing">घर</a>
              <a href="#featured">विशेष</a>
              <a href="#trending">राजनीतिक</a>
              <a href="#entertainment">मनोरञ्जन</a>
              <a href="#sports">खेलकुद</a>
              <a href="#business">व्यापार</a>
            </div>
          </div>
          <div class="col-4">
            <div class="d-flex justify-content-end align-items-center">
              <img src="@/assets/svgs/search.svg\" alt="" srcset="" />
              <img src="@/assets/svgs/user.svg" alt="" srcset="" />
              <div class="divider-lg mx-2" v-if="temp != ''"></div>
              <div class="weather" v-if="temp != ''">
                <div class="d-flex align-items-center">
                  <img src="@/assets/svgs/weather.svg" alt="" class="src" />
                  <div class="details d-flex flex-column align-items-center">
                    <div class="value">{{ temp }} &#8451;</div>
                    <div class="location">
                      काठमाडौं
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="navbar" class="navbar navbar-2 d-block d-md-none">
      <div class="container d-flex justify-content-center">
        <div class="row w-100">
          <div class="col-10">
            <div class="title pl-3">
              <div class="row d-flex align-items-center w-100">
                <img src="@/assets/logo.png" alt="" srcset="" />
                <div class="display-4">
                  गुनासो चौतारी
                </div>
              </div>
            </div>
          </div>
          <div class="col-2 d-flex justify-content-end align-items-center">
            <div class="menu" @click="onMenuClick">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
const fetch = require("node-fetch");

export default {
  name: "Navbar",
  data() {
    return {
      temp: "",
    };
  },
  mounted: function() {
    window.onscroll = function() {
      myFunction();
    };

    var navbar;

    window.onresize = () => {
      navbar =
        window.innerWidth >= 768
          ? document.querySelector(".navbar-1")
          : document.querySelector(".navbar-2");
    };

    navbar =
      window.innerWidth >= 768
        ? document.querySelector(".navbar-1")
        : document.querySelector(".navbar-2");

    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }

    const weatherApi = "ea6898b1835dc55389ec148a406082bb";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=${weatherApi}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.temp = data.main.feels_like;
      })
      .catch((e) => console.log("Error getting weather", e));
  },
  methods: {
    onMenuClick() {
      let mobileNav = document.querySelector(".mobile-nav");
      let menu = document.querySelector(".menu");
      mobileNav.classList.toggle("yes-display");
      menu.classList.toggle("menu-change");
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
