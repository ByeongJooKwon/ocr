<template>
  <div class="test">
    {{ contents }}
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      contents: 'IRGO PRO Version this is test2 by ByeongJooKwon22'
    }
  },
  created () {
    console.log(history.state)
    // history.replaceState
  }
}
</script>

<style>

</style>
