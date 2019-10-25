<template>
  <div class="home">
    <HelloWorld msg="Welcome to IRGO Test Web"/>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  img {
    width: 100%;
  }
</style>
