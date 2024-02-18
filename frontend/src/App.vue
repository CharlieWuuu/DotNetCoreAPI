<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/department">Department</router-link> |
    <router-link to="/employee">Employee</router-link> |
  </nav>
  <router-view/>
</template>

<!-- lang="scss" 代表用 SCSS 寫成；「scoped」屬性可讓這個 CSS 只作用於這個元件 -->
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}

</style>
