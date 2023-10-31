<template>
  <div class="container-fluid post-list">
    <div class="post-count">
      <b>전체글 <span style="color: darkorange; margin-right: 5px;">{{ postCount }}</span></b>
    </div>
    <div class="post-content">
      <a>제목임</a><br/>
      <a>내용임</a>
      <img/>그림임
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
}
</script>

<style>
.post-list{
  width: 60%;

}
.post-count {
  border-bottom: 1px solid grey;

}
</style>