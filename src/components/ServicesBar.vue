<template>
  <div class="servicesWrapper">
    <div>
      <h1>Послуги</h1>
    </div>
    <div class="servicesLinksWrapper">
      <div class="servicesLink">
        <img src="@/assets/image/icon-payment-1.svg" alt="">
        <h4>Захист бізнесу</h4>
      </div>
      <div class="servicesLink">
        <img src="@/assets/image/free-icon-idea-1.svg" alt="">
        <h4>Створення бізнесу</h4>
      </div>
      <div class="servicesLink">
        <img src="@/assets/image/free-icon-certificate-1.svg" alt="">
        <h4>Договірне право</h4>
      </div>
      <div class="servicesLink">
        <img src="@/assets/image/premium-icon-audit-1.svg" alt="">
        <h4>Юридичний аудит</h4>
      </div>
      <div class="servicesLink">
        <img src="@/assets/image/premium-icon-bankrupt-1.svg" alt="">
        <h4>Банкрутство</h4>
      </div>
      <div class="servicesLink">
        <img src="@/assets/image/premium-icon-documentation-1.svg" alt="">
        <h4>Міграційне право</h4>
      </div>
      <div class="servicesLink">
        <img src="@/assets/image/premium-icon-criminal-1.svg" alt="">
        <h4>Кримінальні справи</h4>
      </div>
      <div class="servicesLink">
        <img src="@/assets/image/layer-build-1.svg" alt="">
        <h4>Нерухомість</h4>
      </div>
      <div class="servicesLink">
        <img src="@/assets/image/free-icon-employee-1.svg" alt="">
        <h4>Кадровий облік</h4>
      </div>
      <div class="servicesLink">
        <img src="@/assets/image/premium-icon-lawyer-1.svg" alt="">
        <h4>Судові спори</h4>
      </div>
    </div>
    <div class="servicesButtonWrapper">
      <el-button class="button2">Усі послуги</el-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ServicesBar'
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