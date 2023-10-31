<template>

  <div>
    <h4>상세보기</h4>
   <h5>{{ post[$route.params.id].title}}</h5>
    <p>{{ post[$route.params.id].content}}</p>
  </div>
</template>

<script>
  export default {
    name:"postDetail",
    props:{
      post : Array,
    }
  }

</script>

<style>

</style>

