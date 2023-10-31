<template>
  <HeaderNav/>
  <div class="container-fluid d-flex justify-content-between" style="width: 60%;">
    <PostList/>
    <MenuNav/>
  </div>
</template>

<script>

import HeaderNav from "@/Header.vue";
import PostList from "@/Post.vue";
import MenuNav from "@/components/Menu.vue";

export default {
  name: 'App',
  components: {
    MenuNav,
    PostList,
    HeaderNav

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
