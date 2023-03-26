<template>
  <div class="servicesWrapper">
    <div>
      <h1>Послуги</h1>
    </div>
    <div class="servicesLinksWrapper">
      <div class="servicesLink" @click="goto('Захист бізнесу')">
        <img src="@/assets/image/icon-payment-1.svg" alt="">
        <h4>Захист бізнесу</h4>
      </div>
      <div class="servicesLink" @click="goto('Створення бізнесу')">
        <img src="@/assets/image/free-icon-idea-1.svg" alt="">
        <h4>Створення бізнесу</h4>
      </div>
      <div class="servicesLink" @click="goto('Договірне право')">
        <img src="@/assets/image/free-icon-certificate-1.svg" alt="">
        <h4>Договірне право</h4>
      </div>
      <div class="servicesLink" @click="goto('Юридичний аудит')">
        <img src="@/assets/image/premium-icon-audit-1.svg" alt="">
        <h4>Юридичний аудит</h4>
      </div>
      <div class="servicesLink" @click="goto('Банкрутство')">
        <img src="@/assets/image/premium-icon-bankrupt-1.svg" alt="">
        <h4>Банкрутство</h4>
      </div>
      <div class="servicesLink" @click="goto('Міграційне право')">
        <img src="@/assets/image/premium-icon-documentation-1.svg" alt="">
        <h4>Міграційне право</h4>
      </div>
      <div class="servicesLink" @click="goto('Кримінальні справи')">
        <img src="@/assets/image/premium-icon-criminal-1.svg" alt="">
        <h4>Кримінальні справи</h4>
      </div>
      <div class="servicesLink" @click="goto('Нерухомість')">
        <img src="@/assets/image/layer-build-1.svg" alt="">
        <h4>Нерухомість</h4>
      </div>
      <div class="servicesLink" @click="goto('Кадровий облік')">
        <img src="@/assets/image/free-icon-employee-1.svg" alt="">
        <h4>Кадровий облік</h4>
      </div>
      <div class="servicesLink" @click="goto('Судові спори')">
        <img src="@/assets/image/premium-icon-lawyer-1.svg" alt="">
        <h4>Судові спори</h4>
      </div>
    </div>
    <div class="servicesButtonWrapper" v-if="$route.name !== 'services'">
      <el-button class="button2" @click="gotoServicesComp">Усі послуги</el-button>
    </div>

  </div>
</template>

<script>

import router from '@/routes/router'

export default {
  name: 'ServicesBar',
  methods:{
    goto(val) {
      //state: { val: val } передает нагрузку в history.state. Это плохой подход, при передаче ссылки на другой комп теряется нагрузка.
      // params: { val: val } передает в this.$router.currentRoute.params но при условии что парамс засунуты в путь.
      // Таким образом нужно в пути передавать идентификатор а в компоненте по идентификатору дергать нагрузку из хранилища
      router.push({name: 'OneService', params: { val: val }})
    },
    gotoServicesComp() {
      router.push({name: 'services'})
    }
  },
}
</script>

<style lang='scss'>
.servicesWrapper{
  width: 90%;
  margin: auto;
  max-width: 1050px;
  min-width: 700px;
  padding: 1%;

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

  .servicesLinksWrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .servicesLink{
      width: 165px;
      height: 165px;
      margin: 20px;
      box-shadow: 0 0 20px 0 rgba(0,0,0,0.40);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      color: #6174ae;
    }
    .servicesLink:hover{
      cursor: pointer;
      text-decoration: underline;
    }
    h4{
      color: #052651;
      -webkit-margin-before: 0.5em;
    }
    img{
      margin-top: 10px;
    }

  }

  .servicesButtonWrapper {
    display: block;
    text-align: center;
  }
}

</style>