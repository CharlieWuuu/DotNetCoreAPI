<template>
  <div class="Home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Home Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
