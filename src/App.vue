<template>
  <div id="app">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/swipe">Swipe</router-link> |
      <router-link to="/capture">Capture</router-link> |
      <router-link to="/Nav">Nav</router-link> |
      <router-link to="/Splash">Splash</router-link> |
      <router-link to="/getYoutube">youtube</router-link> |
      <router-link to="/filepond">OCR</router-link> |
      <router-link to="/Chart">Chart.js</router-link>
    </div>
    <transition name='component-fade' mode='out-in'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      prevHeight: 0
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  transition-timing-function: ease;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
