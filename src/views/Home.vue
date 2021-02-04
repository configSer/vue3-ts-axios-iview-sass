<template>
  <div class="home">
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in swiperImgs">
          <img :src="item.url" :key="item.id" alt="">
        </div>
    </div>
    
    <div class="swiper-pagination"></div>
</div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" :list="listData" />
    <Button type="success" long @click="logout">退出</Button>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Swiper from "swiper/swiper-bundle.min.js"
    import "swiper/swiper-bundle.min.css"
    import HelloWorld from '@/components/HelloWorld.vue';
    import { Button } from 'view-design'

    @Component( {
	    components: {
		    HelloWorld,
		    Button,
	    },
    } )
    export default class Home extends Vue {
	
	    swiperImgs = [
		    {
			    url: require( '../images/swiper/background (1).jpg' ),
			    id: '1231'
		    }, {
			    url: require( '../images/swiper/background (2).jpg' ),
			    id: '1232'
		    }, {
			    url: require( '../images/swiper/background (3).jpg' ),
			    id: '1233'
		    }, ]
	    listData = [
		    { name: 'zhangsan' }, { name: 'zhangsan' }, { name: 'zhangsan' }, { name: 'zhangsan' } ]
	
	    logout () {
		    this.$router.push( { name: 'login' } )
	    }
	
	    mounted () {
		    new Swiper( ".swiper-container", {
			    loop: true, //循环
			    pagination: { //分页符
				    el: '.swiper-pagination',
			    },
		    } )
	    }
    }
</script>

<style scoped lang="scss">
  .home {
	  img {
		  width: 100%;
		  height: 200px;
	  }
  }
</style>
