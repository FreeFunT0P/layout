<template>
  <div class="dossierWrapper">
    <div class="dossierInfoWrapper">
      <h1>Про мене</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h2>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>

      <div class="achievementsWrapper">
        <div class="achievementWrapper">
          <img src="@/assets/image/icon-education.svg" alt="">
          <h5>Дві вищих освіти, рекомендації від відомих людей</h5>
        </div>
        <div class="achievementWrapper">
          <img src="@/assets/image/layer.svg" alt="">
          <h5>Досвід роботи понад 5 років</h5>
        </div>
      </div>
      <div class="dossierButtonWrapper" v-if="$route.name !== 'dossier'">
        <el-button class="button2" @click="goto">Більше інформації</el-button>
      </div>
    </div>
    <div class="imgDossierWrapper">
      <img src="@/assets/image/pexels-karolina-grabowska-7875860-1-e1655277552472-800x610.jpg" alt="">
    </div>
  </div>
</template>

<script>
import router from "@/routes/router";

export default {
  name: 'DossierBar',
  methods:{
    goto() {
      router.push({name: 'dossier'})
    }
  },
}
</script>

<style lang='scss'>

.dossierWrapper{
  width: 90%;
  margin: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  max-width: 1050px;
  min-width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  .dossierInfoWrapper{
    width: 60%;

    h1{
      position: relative;
      padding-left: 25px;
      font-weight: 300;
    }
    h1:before{
      content: '';
      width: 5px;
      height: 38px;
      background-color: #052651;
      border-radius: 10px;
      position: absolute;
      left: 0;
      top: calc(50% - 19px);
      z-index: 1;
    }

    .achievementsWrapper{
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-left: 50px;
      padding-right: 50px;

      .achievementWrapper{
        display: flex;
        align-items: center;
        width: 210px;
        height: 80px;

        img{
          margin-right: 10px;
        }
      }
    }
    .dossierButtonWrapper{
      display: block;
      text-align: center;
    }
  }

  .imgDossierWrapper{
    width: 40%;
    height: 100%;

    img{
      max-width:100%;
      height:auto;
    }
  }
}

</style>
