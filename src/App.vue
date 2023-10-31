<template>
  <HeaderNav/>
  <div class="container-fluid d-flex justify-content-between" style="width: 60%;">
    <router-view :post="post"/>
    <!--    <PostList :post="post"/>-->
    <MenuNav/>
  </div>
</template>

<script>

import HeaderNav from "@/components/Header.vue";
import MenuNav from "@/components/Menu.vue";
import data from "@/assets/blog";

export default {
  name: 'App',
  components: {
    MenuNav,
    HeaderNav
  },
  data() {
    return {
      post: data,
      target : 0,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
