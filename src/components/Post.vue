<template>
  <div class="container-fluid post-list">
    <div class="post-count">
      <b>전체글 <span style="color: darkorange; margin-right: 5px;">{{ postCount }}</span></b>
    </div>
    <div class="post-content" v-for="(data,i) in post" :key="i">
<!--      <router-link :to="'/detail/'+data.number">{{ data.title }}</router-link><br/>-->
      <p @mouseover="handleMouseOver" @mouseout="handleMouseOut" @click="$router.push(`detail/`+data.number)" style="text-decoration: underline;"> {{ data.title }}</p><br/>
      <!--  $router.push = router-link    -->
      <p>{{ data.date }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'postList',
  data() {
    return {
      postCount: 0,
    }
  },
  props: {
    post: Array,
  },
  methods: {
    handleMouseOver() {
      document.body.style.cursor = 'pointer';
    },
    handleMouseOut() {
      document.body.style.cursor = 'auto'; // 기본 커서로 변경
    },
  },
}
</script>

<style>
.post-list {
  width: 60%;

}

.post-count {
  border-bottom: 1px solid grey;
}
.post-content{
  margin-bottom: 30px;
}
</style>