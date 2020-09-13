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
              <div class="divider-lg mx-2"></div>
              <div class="weather">
                <div class="d-flex align-items-center">
                  <img src="@/assets/svgs/weather.svg" alt="" class="src" />
                  <div class="details d-flex flex-column align-items-center">
                    <div class="value">
                      13 &#8451;
                    </div>
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
      <div class="container text-center">
        <div
          class="row d-flex justify-content-between align-items-center w-100"
        >
          <div class="mNav d-flex">
            <a href="#landing">घर</a>
            <a href="#featured">विशेष</a>
            <a href="#trending">राजनीतिक</a>
          </div>
        </div>

        <div
          class="row d-flex justify-content-between align-items-center w-100 mt-2"
        >
          <div class="mNav d-flex">
            <a href="#entertainment">मनोरञ्जन</a>
            <a href="#sports">खेलकुद</a>
            <a href="#business">व्यापार</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
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
      console.log(window.pageYOffset, sticky);
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
  },
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
