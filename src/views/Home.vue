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
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Swiper from "swiper/swiper-bundle.min.js"
    import "swiper/swiper-bundle.min.css"

    @Component( {
	    components: {
		   
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
	
	
	    mounted () {
		    new Swiper( ".swiper-container", {
			    loop: true, //循环
                autoplay: true,
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
