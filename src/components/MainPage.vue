<template>
  <div class="main-wrapper">
    <div class="headerBar">
      <header-bar />
    </div>
    <div class="routs">
      <router-view/>
    </div>
    <div class="footerBar">
      <footer-bar />
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/Main/HeaderBar'
import FooterBar from '@/components/Main/FooterBar'


export default {
  name: 'MainPage',
  components: {
    HeaderBar,
    FooterBar
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
