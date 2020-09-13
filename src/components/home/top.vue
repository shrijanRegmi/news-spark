<template>
  <div class="top">
    <div class="container">
      <div class="row d-flex justify-content-between align-items-center">
        <div class="col-4">
          <div class="red-container">
            <h6>प्रचलित समाचार</h6>
          </div>
        </div>
        <div class="col-8">
          <div class="d-flex justify-content-end align-items-center">
            <div class="date mr-3 d-none d-sm-block">
              <p>२८ भदौ २०७७, आइतवार</p>
            </div>
            <div class="divider-sm mr-3"></div>
            <div class="social-container d-flex">
              <div>
                <img
                  src="@/assets/svgs/twitter_logo.svg"
                  alt=""
                  srcset=""
                  class="social-logo"
                />
              </div>
              <div>
                <img
                  src="@/assets/svgs/facebook_logo.svg"
                  alt=""
                  srcset=""
                  class="social-logo"
                />
              </div>
              <div>
                <img
                  src="@/assets/svgs/youtube_logo.svg"
                  alt=""
                  srcset=""
                  class="social-logo"
                />
              </div>
              <div>
                <img
                  src="@/assets/svgs/instagram_logo.svg"
                  alt=""
                  srcset=""
                  class="social-logo"
                />
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
  name: "Top",
};
</script>

<style lang="scss">
@import "@/styles/home.scss";
</style>
