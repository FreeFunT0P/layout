<template>
  <div class="OneBlogEntriesBar">
    <div>
      <h1>{{this.value}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OneBlogEntries',
  data() {
    return {
      value: '',
    }
  },
  mounted() {
    this.value = history.state.val
    console.log(this.value)
  }
}
</script>

<style lang='scss'>
.OneBlogEntriesBar {
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
    height: 50px;
    background-color: #00814b;
    border-radius: 10px;
    position: absolute;
    left: 0;
    top: calc(50% - 19px);
    z-index: 1;
  }

}
</style>