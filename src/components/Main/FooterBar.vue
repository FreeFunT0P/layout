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
        <h5 @click="goto('main')">Головна</h5>
        <h5 @click="goto('services')">Послуги</h5>
        <h5 @click="goto('review')">Відгуки</h5>
      </div>
      <div class="column">
        <h5 @click="goto('blog')">Блог</h5>
        <h5 @click="goto('contacts')">Контакти</h5>
        <h5 @click="goto('dossier')">Про мене</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterBar",
  methods: {
    goto(val) {
      switch (val) {
        case 'main':
          this.$router.push({name: 'main'})
          break
        case 'services':
          this.$router.push({name: 'services'})
          break
        case 'review':
          this.$router.push({name: 'review'})
          break
        case 'dossier':
          this.$router.push({name: 'dossier'})
          break
        case 'blog':
          this.$router.push({name: 'blog'})
          break
        case 'contacts':
          this.$router.push({name: 'contacts'})
          break
      }
    },
  },
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
