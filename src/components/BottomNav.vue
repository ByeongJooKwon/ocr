<template>
  <nav class="bottom-nav">
    <a class="bottom-nav__action" v-bind:class="{'activate': data.FirActive}" href="#" v-on:click="changePage('FirActive')">
      <svg class="bottom-nav__icon" viewBox="0 0 24 24">
        <path fill="#000000" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
      </svg>
      <!-- <span class="bottom-nav__label">Recents</span> -->
    </a>
    <a class="bottom-nav__action" v-bind:class="{'activate': data.SecActive}" href="#" v-on:click="changePage('SecActive')">
      <svg class="bottom-nav__icon" viewBox="0 0 24 24">
        <path fill="#000000" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
      </svg>
      <!-- <span class="bottom-nav__label">Favorites</span> -->
    </a>
    <a class="bottom-nav__action" v-bind:class="{'activate': data.ThrActive}" href="#" v-on:click="changePage('ThrActive')">
      <svg class="bottom-nav__icon" viewBox="0 0 24 24">
        <path fill="#000000" d="M16,17H7V10.5C7,8 9,6 11.5,6C14,6 16,8 16,10.5M18,16V10.5C18,7.43 15.86,4.86 13,4.18V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18M11.5,22A2,2 0 0,0 13.5,20H9.5A2,2 0 0,0 11.5,22Z" />
      </svg>
      <!-- <span class="bottom-nav__label">Nearby</span> -->
    </a>
    <a class="bottom-nav__action" v-bind:class="{'activate': data.FouActive}" href="#" v-on:click="changePage('FouActive')">
      <svg class="bottom-nav__icon" viewBox="0 0 24 24">
        <path fill="#000000" d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z" />
      </svg>
      <!-- <span class="bottom-nav__label">Search</span> -->
    </a>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      data: {
        FirActive: true,
        SecActive: false,
        ThrActive: false,
        FouActive: false
      }
    }
  },
  methods: {
    changePage (txt) {
      for (var key in this.$data.data) {
        this.$data.data[key] = false
      }
      this.data[txt] = true
      this.$emit('ComponentsPass', txt)
    }
  }
}
</script>

<style lang='scss' scoped>
@import '~material-bottom-nav';
.bottom-nav {
  @include bottom-nav($background-color: #FFFFFF, $active-color: #8080ff, $inactive-color: #BBBBBB, $hide-inactive-labels: true);
}
.activate {
  color: #8080ff;
  padding-top: 11px;
}
</style>
