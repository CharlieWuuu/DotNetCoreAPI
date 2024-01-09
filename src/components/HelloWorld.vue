<template>
  <div id="app" class="container">
      <h3 class="d-flex justify-content-center">Vue JS Front End</h3>
      <h5 class="d-flex justify-content-center">Employee Management Portal</h5>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
    margin: 0 10px;
}
.btn{
  border:1px solid #42b983;
}
</style>
