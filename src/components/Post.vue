<template>
  <div class="container-fluid post-list">
    <div class="post-count">
      <b>전체글 <span style="color: darkorange; margin-right: 5px;">{{ postCount }}</span></b>
    </div>
    <div class="post-content" v-for="(data,i) in post" :key="i">
      <router-link :to="'/detail/'+data.number">{{ data.title }}</router-link><br/>
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
    target : Number,
  }
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