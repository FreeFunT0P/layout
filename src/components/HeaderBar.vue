<template>
  <div class="headerWrapper">
    <h4>Головна</h4>
    <h4>Послуги</h4>
    <h4>Відгуки</h4>
    <h4>Про мене</h4>
    <h4>Блог</h4>
    <h4>Контакти</h4>
    <el-button class="button1">Консультація</el-button>
    <img src="@/assets/image/logo-2.png" alt="">
  </div>
</template>

<script>

export default {
  name: 'HeaderPage'
}
</script>

<style lang='scss'>
.headerWrapper{
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1050px;
  min-width: 700px;
  padding: 1%;

  h4{
    white-space: nowrap;
  }
  h4:hover{
    box-shadow:  0 3px 0 rgb(0 0 0 / 100%);
    cursor: pointer;
    transition: 0.5s;
  }

  img{
    width: 100%;
    max-width: 82px;
  }

}

</style>
