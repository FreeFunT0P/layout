<template>
  <div class="whyMeWrapper">
    <div class="imgWhyMeWrapper">
      <img src="@/assets/image/rectangle-21-e1655277619305.jpg" alt="">
    </div>
    <div class="whyMeInfoWrapper">
      <h1>Чому обирають саме мене?</h1>
      <div
          class="selectedListEl"
          :class="{ active: selectList === 'selectList1', inactive: selectList !== 'selectList1' }"
          id="selectList1"
          v-on:click="changeSelectList('selectList1')"
      >
        <h4>Великий досвід та велика кількість справ</h4>
      </div>
      <span :class="{ activeSpan: selectList === 'selectList1', inactiveSpan: selectList !== 'selectList1' }">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In a metus pellentesque, scelerisque ex sed, volutpat nisi.
        Curabitur tortor mi, eleifend ornare lobortis non.
        Nulla porta purus quis iaculis ultrices.
        Proin aliquam sem at nibh hendrerit sagittis.
        Nullam ornare odio eu lacus tincidunt malesuada.
        Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare.
      </span>

      <div
          class="selectedListEl"
          :class="{ active: selectList === 'selectList2', inactive: selectList !== 'selectList2' }"
          id="selectList2"
          v-on:click="changeSelectList('selectList2')"
      >
        <h4>Велика теоретична база</h4>
      </div>
      <span :class="{ activeSpan: selectList === 'selectList2', inactiveSpan: selectList !== 'selectList2' }">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In a metus pellentesque, scelerisque ex sed, volutpat nisi.
        Curabitur tortor mi, eleifend ornare lobortis non.
        Nulla porta purus quis iaculis ultrices.
        Proin aliquam sem at nibh hendrerit sagittis.
        Nullam ornare odio eu lacus tincidunt malesuada.
        Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare.
      </span>

      <div
          class="selectedListEl"
          :class="{ active: selectList === 'selectList3', inactive: selectList !== 'selectList3' }"
          id="selectList2"
          v-on:click="changeSelectList('selectList3')"
      >
        <h4>Lorem ipsum dolor sit amet</h4>
      </div>
      <span :class="{ activeSpan: selectList === 'selectList3', inactiveSpan: selectList !== 'selectList3' }">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In a metus pellentesque, scelerisque ex sed, volutpat nisi.
        Curabitur tortor mi, eleifend ornare lobortis non.
        Nulla porta purus quis iaculis ultrices.
        Proin aliquam sem at nibh hendrerit sagittis.
        Nullam ornare odio eu lacus tincidunt malesuada.
        Sed eu vestibulum elit. Curabitur tortor mi, eleifend ornare.
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'WhyMe',
  data() {
    return {
      selectList:'selectList1'
    }
  },
  methods: {
    changeSelectList(element){
      this.selectList = element
    }
  }
}
</script>

<style lang='scss'>
.whyMeWrapper {
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

  .imgWhyMeWrapper{
    width: 40%;
    height: 100%;

    img{
      max-width:100%;
      height:auto;
    }
  }

  .whyMeInfoWrapper{
    width: 60%;


    h1{
      position: relative;
      padding-left: 25px;
      font-weight: 300;
      margin-left: 20px;

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

    .selectedListEl{
      width: 400px;
      height: 40px;
      margin-left: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }
    .selectedListEl:hover{
      color: white;
      background-color: black;
      cursor: pointer;
      transition: 0.5s;
    }

    .active{
      color: white;
      background-color: black;
    }

    .inactive{
      background-color: white;
      color: black;
    }

    .activeSpan{
      margin-left: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .inactiveSpan{
      display: none;
    }

  }
}
</style>