<template>
  <div class="headerWrapper">
    <h4 @click="goto('main')">Головна</h4>
    <h4 @click="goto('services')">Послуги</h4>
    <h4 @click="goto('review')">Відгуки</h4>
    <h4 @click="goto('dossier')">Про мене</h4>
    <h4 @click="goto('blog')">Блог</h4>
    <h4 @click="goto('contacts')">Контакти</h4>
    <el-button class="button1" @click="openDialog()">Консультація</el-button>
    <img src="@/assets/image/logo-2.png" alt="">
    <el-dialog
        v-model="centerDialogVisible"
        title="Залиште свої контакти і ми обов'язково з вами зв'яжемося"
        width="30%"
        align-center
        center
    >
      <span>
        <el-input style="margin-bottom: 20px" class="inp" v-model="name" placeholder="Ваше ім'я" clearable />
        <el-input class="inp" v-model="tel" placeholder="Ваш телефон" clearable />
      </span>
      <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" class="button2" @click="centerDialogVisible = false">Відправити</el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'HeaderPage',
  data() {
    return {
      centerDialogVisible: false,
      name: '',
      tel: '',
    }
  },
  methods: {
    openDialog(){
      this.centerDialogVisible = true
    },
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
