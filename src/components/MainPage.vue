<template>
  <div class="main-wrapper">
    <div class="headerBar">
      <header-bar />
    </div>
    <div class="sloganBar">
      <slogan-bar />
    </div>
    <div class="servicesBar">
      <services-bar />
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import SloganBar from '@/components/SloganBar'
import servicesBar from '@/components/ServicesBar'

export default {
  name: 'MainPage',
  components: {
    HeaderBar,
    SloganBar,
    servicesBar,
  },
}
</script>

<style lang='scss'>

.main-wrapper {

  .headerBar {
    display: block;
    position: sticky;
    background: #FFFFFF;
    box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
    top: 0;
    z-index: 99;
  }
}


</style>