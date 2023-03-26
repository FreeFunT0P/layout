<template>
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
</template>



<script>
import SloganBar from '@/components/Main/MainPageComponents/SloganBar'
import ServicesBar from '@/components/Main/MainPageComponents/ServicesBar'
import ReviewsBar from '@/components/Main/MainPageComponents/ReviewsBar'
import DossierBar from '@/components/Main/MainPageComponents/DossierBar'
import WhyMe from '@/components/Main/MainPageComponents/WhyMe'
import BlogBar from '@/components/Main/MainPageComponents/BlogBar'

export default {
  name: 'MainPageRout',
  components: {
    SloganBar,
    ServicesBar,
    ReviewsBar,
    DossierBar,
    WhyMe,
    BlogBar,
  }
}
</script>

<style lang='scss'>

</style>