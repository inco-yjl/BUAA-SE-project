<template>
  <div id="app">
    <navigation></navigation>
     <router-view/>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>

<script>
  import navigation from './components/Navigation'
  export default {
    name: 'App',
    components:{
      navigation
    },
  }

</script>