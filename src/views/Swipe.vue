<template>
  <div class="about">
    <h1>This is IRGO preview</h1>
    <div class="btn">
      <button v-on:click="prevView">PREV</button>
      <span class="div_center">|</span>
      <button v-on:click="nextView">NEXT</button>
    </div>
    <swipe class="swipe" :options="swipeOptions" ref="slideSwipe">
      <swipe-item><Test-Comp/></swipe-item>
      <swipe-item><Test-Comp2/></swipe-item>
    </swipe>
    <div>
      <router-link :to="{ name: 'NotFound'}">tt</router-link><br><br>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TestComp from './test1'
import TestComp2 from './test2'
export default {
  components: {
    TestComp,
    TestComp2
  },
  data: () => {
    return {
      isView: false,
      swipeOptions: {
        startSlide: 0,
        speed: 300,
        // auto: 4000,
        continuous: false,
        disableScroll: false,
        stopPropagation: false,
        callback: function (index, slide) { console.log('slide changes') },
        transitionEnd: function (index, slide) { console.log('slide transition ends') }
      }
    }
  },
  methods: {
    nextView: function () {
      const _this = this
      _this.$refs.slideSwipe.next()
    },
    prevView: function () {
      const _this = this
      _this.$refs.slideSwipe.prev()
    }
  },
  computed: () => {
    console.log(history.state)
  }
}
</script>

<style scoped>
  .swipe .test {
    height: 40vh;
    border: 1px solid gray;
  }
  .btn {
    margin-bottom: 1rem;
  }
  .div_center {
    margin-left: 1rem;
    margin-right: 1rem;
  }
</style>
