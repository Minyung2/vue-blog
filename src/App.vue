<template>
  <HeaderNav/>
  <div class="container-fluid d-flex justify-content-between" style="width: 60%;">
    <PostList :post="post"/>
    <MenuNav/>
  </div>
</template>

<script>

import HeaderNav from "@/components/Header.vue";
import PostList from "@/components/Post.vue";
import MenuNav from "@/components/Menu.vue";
import data from "@/assets/blog";
export default {
  name: 'App',
  components: {
    MenuNav,
    PostList,
    HeaderNav
  },
  data(){
    return{
      post : data,
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
