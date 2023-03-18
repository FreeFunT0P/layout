<template>
  <div class="footerWrapper">
    <img src="@/assets/image/logo-2.png" alt="">
    <div class="contactsContainer">
      <h3>Контакти</h3>
      <a class="telNum" href="tel:+380502632008">+380502632008</a>
      <a class="eMail" href="mailto:ivantarantaev@ukr.net">ivantarantaev@ukr.net</a>
    </div>
    <div class="linksContainer">
      <h3>Сторінки</h3>
      <div class="column">
        <h5>Головна</h5>
        <h5>Послуги</h5>
        <h5>Відгуки</h5>
      </div>
      <div class="column">
        <h5>Блог</h5>
        <h5>Контакти</h5>
        <h5>Про мене</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBar"
}
</script>

<style lang='scss'>
  .footerWrapper{
    background-color: #f5f5f5;
    width: 90%;
    margin: auto;
    max-width: 1050px;
    min-width: 700px;
    padding: 1%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;


    img{
      width: 100%;
      max-width: 100px;
    }

    .contactsContainer{
      width: 200px;
      max-width: 300px;
      display:inline-block;

      a{
        display: block;
        margin-top: 20px;
      }
      a:hover{
        color: #6174ae;
      }
    }

    .linksContainer{
      margin-right: 50px;

      .column{
        display: inline-block;
        margin-right: 20px;

        h5{
          display: block;
        }
        h5:hover{
          cursor: pointer;
          color: #6174ae;
        }
      }
    }
  }

</style>
