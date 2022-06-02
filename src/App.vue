<template>
  <nav-bar></nav-bar>
  <router-view></router-view>
</template>


<script>
import NavBar from './components/layout/NavBar.vue';

// import items from './components/data/item.js';
export default {
  components: {
    NavBar,
  },
};
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  background-color: #f8f1d6;
  overflow-x: hidden;
}

body .rating {
  height: 1rem;
  width: 1rem;
  padding: 0.25rem 0.35rem;
  border-radius: 0.25rem;
  font-weight: bold;
  font-size: 0.8rem;
}

body .highRating {
  background-color: #009400;
  color: #fff;
}

body .avgRating {
  background-color: yellow;
  color: #6b6b6b;
}

body .lowRating {
  background-color: #f00;
  color: #fff;
}
</style>