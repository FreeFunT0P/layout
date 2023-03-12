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
    <div class="reviewsBar">
      <reviews-bar />
    </div>
    <div class="dossierBar">
      <dossier-bar />
    </div>
    <div class="whyMeBar">
      <why-me />
    </div>
    <div class="blogBar">
      <blog-bar />
    </div>

  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import SloganBar from '@/components/SloganBar'
import ServicesBar from '@/components/ServicesBar'
import ReviewsBar from '@/components/ReviewsBar'
import DossierBar from '@/components/DossierBar'
import WhyMe from '@/components/WhyMe'
import BlogBar from '@/components/BlogBar'

export default {
  name: 'MainPage',
  components: {
    HeaderBar,
    SloganBar,
    ServicesBar,
    ReviewsBar,
    DossierBar,
    WhyMe,
    BlogBar,
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
