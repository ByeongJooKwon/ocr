<template>
  <div>
    <Nav-Home v-if="pageSet === 'FirActive'" />
    <Nav-Search v-else-if="pageSet === 'SecActive'" />
    <Nav-Push v-else-if="pageSet === 'ThrActive'" />
    <Nav-Setting v-else />
    <Bottom-Nav v-on:ComponentsPass="changePage" />
  </div>
</template>

<script>
import NavHome from './NavComponents/Home'
import NavSearch from './NavComponents/Search'
import NavPush from './NavComponents/Push'
import NavSetting from './NavComponents/Setting'
import BottomNav from '../components/BottomNav'
export default {
  data: () => {
    return {
      pageSet: 'FirActive'
    }
  },
  components: {
    NavHome,
    NavSearch,
    NavPush,
    NavSetting,
    BottomNav
  },
  methods: {
    changePage (txt) {
      this.pageSet = txt
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
