<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
    import { Component, Vue, Watch } from 'vue-property-decorator';

    @Component( {
	    components: {}
    } )
    export default class Layout extends Vue {
	    @Watch( '$route' )
	    routeChange ( to, from ) {
		    if ( from.name === 'login' ) {
			    console.log( '验证token' )
		    } else if ( to.name === 'login' ) {
			    console.log( '清除token' )
		    }
	    }
	
	    created () {
		    if ( sessionStorage.getItem( 'state' ) ) {
			    this.$store.replaceState(
				    Object.assign(
					    {},
					    this.$store.state,
					    JSON.parse( sessionStorage.getItem( 'state' ) )
				    )
			    )
			    sessionStorage.removeItem( 'state' )
		    }
		    window.addEventListener( 'beforeunload', _ => {
			    sessionStorage.setItem( 'state', JSON.stringify( this.$store.state ) )
		    } )
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
