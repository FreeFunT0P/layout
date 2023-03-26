<template>
  <div class="contactsWrapper">
    <div class="contactsContainer">
      <h3>Контакти</h3>
      <img src="@/assets/image/logo-2.png" alt="">
      <a class="telNum" href="tel:+380502632008">+380502632008</a>
      <a class="eMail" href="mailto:ivantarantaev@ukr.net">ivantarantaev@ukr.net</a>
    </div>
    <div class="feedbackContainer">
      <h3>Зворотній зв'язок</h3>
      <el-input class="inp" v-model="name" placeholder="Ваше ім'я" clearable />
      <el-input class="inp" v-model="email" placeholder="Ваш e-mail" clearable />
      <el-input class="inp" v-model="theme" placeholder="Тема повідомлення" clearable />
      <el-input class="inp" v-model="text" placeholder="Текст повідомлення" clearable />
      <el-button class="button2">Відправити</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactsBar',
  data() {
    return {
      name: '',
      email: '',
      theme: '',
      text: '',
    }
  },
}
</script>

<style lang='scss'>
.contactsWrapper {
  background-color: #FFFFFF;
  width: 90%;
  margin: auto;
  max-width: 1050px;
  min-width: 700px;
  padding: 1%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .contactsContainer{

    h3{
      position: relative;
      padding-left: 25px;
      font-weight: 300;
    }
    h3:before{
      content: '';
      width: 5px;
      height: 38px;
      background-color: #00814b;
      border-radius: 10px;
      position: absolute;
      left: 0;
      top: calc(50% - 19px);
      z-index: 1;
    }

    img{
      width: 100%;
      max-width: 100px;
    }

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

  .feedbackContainer{
    width: 500px;
    text-align: center;

    .inp {
      margin-top: 15px;
      width: 400px;

    }

  }

}

</style>