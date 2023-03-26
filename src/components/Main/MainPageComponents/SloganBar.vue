<template>
  <div class="sloganWrapper">
    <div class="sloganFilling">
      <h1>Професійна юридична допомога від досвідченого адвоката</h1>
      <h4>
        Надання різноманітної юридичної допомоги в сфері: бізнесу,
        інтелектуальної власності, нерухомості, судовий захист,
        юридичний супровід та інше
      </h4>
      <el-button v-if="$route.name !== 'slogan'" class="button2" @click="goto()">Детальніше</el-button>
    </div>
    <img src="@/assets/image/femida.png" alt="">
  </div>
</template>

<script>
import router from "@/routes/router";

export default {
  name: "SloganBar",
  methods:{
    goto() {
      router.push({name: 'slogan'})
    }
  },
}
</script>

<style lang='scss'>
.sloganWrapper{
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1050px;
  min-width: 700px;
  padding: 1%;
  background-color: #f5f5f5;
  color: #052651;

}

</style>