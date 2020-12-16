<template>
  <div id="app">
    <Header />

    <router-view>
      <Home />
      <NewsView />
    </router-view>
  </div>
</template>

<script>
import Header from "@/components/home/header";
import Home from "./views/Home";
import NewsView from "./views/News_View";

export default {
  components: {
    Header,
    Home,
    NewsView,
  },
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}

#app {
  font-family: "Mukta", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #fafafa;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.border-btn {
  border: 1px solid #2c3e50;
  width: 120px;
  text-align: center;

  p {
    padding: 0px;
    margin: 0px;
  }
}

.border-btn:hover {
  background-color: #1191ff;
  border-color: #1191ff;
  transition: 0.5s;
  p {
    color: #fff;
  }
}

.top-scroller {
  position: absolute;
  right: 0;
  width: 80px;
  height: 110px;
  background-color: #ff5555;
  border-radius: 20px;
  float: right;
}
</style>
