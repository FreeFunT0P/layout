<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import MainPage from '@/components/MainPage'
export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
#app {
  height: 100vh;
  width: 100vw;
  display: block;
  background-color: white;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
