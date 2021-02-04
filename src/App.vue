<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    import { Component, Vue, Watch } from 'vue-property-decorator';

    @Component( {
      components: {
    
      }
    } )
    export default class Layout extends Vue {
      @Watch('$route')
      routeChange(to, from)  {
        if ( from.name === 'login' ) {
          alert('验证token')
        } else if ( to.name === 'login' ) {
          alert('清除token')
        }
      }
    }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
