<template>
  <div class="serviceBar">
    <div>
      <h1>{{this.$route.params.val}}</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'OneService',
  data() {
    return {
      value: '',
    }
  },
  mounted() {
    this.value = history.state.val
  }
}
</script>

<style lang='scss'>
  .serviceBar {
    width: 90%;
    height: 500px;
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
      background-color: #00814b;
      border-radius: 10px;
      position: absolute;
      left: 0;
      top: calc(50% - 19px);
      z-index: 1;
    }

  }

</style>