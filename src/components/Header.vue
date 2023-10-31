<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand blog-home" href="#">Blog</a>
      <div class="input-group mb-3 custom-search">
        <input type="text" class="form-control input-group-sm" placeholder="Search..." aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2">검색</button>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name:'headerNav',
}
</script>
<style>
.blog-home{
  margin-left: 150px;
}
.custom-search{
  max-width: 400px;
  margin-right: 700px;
}
</style>