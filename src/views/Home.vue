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
        <table-list :columns="tableColumns" :data="currentTableData"></table-list>
        <pagination :total="total"
                    :page-size="pageSize"
                    :current="pageNumber"
                    :page-size-opts="pageSizeOptions"
                    @on-change="pageNumberChange"
                    @on-page-size-change="pageSizeChange"
                    show-sizer
                    show-total
                    size="small"
        ></pagination>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Swiper from "swiper/swiper-bundle.min.js"
    import "swiper/swiper-bundle.min.css"
    import { carModelList } from "@/commjs/api.js";
    import { Table as tableList, Page as pagination } from 'view-design'

    @Component( {
	    components: {
            tableList,
            pagination
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
		    }
        ]
        pageSizeOptions = [10, 50, 100, 200]
        tableColumns = [
            {
                title: '车型ID',
                key: 'carModelId'
            },
            {
                title: '车型名称',
                key: 'carModelName'
            },
            {
                title: '品牌ID',
                key: 'brandId'
            },
            {
                title: '品牌名称',
                key: 'brandName'
            }
        ]
        currentTableData = [];
        carModelTable = []
        total = 0
        pageNumber = 1
        pageSize = 10
	    created () {
		    carModelList().then(res => {
		        let result = res.result;
                let carModelList = []
		        result && result.forEach(item => {
		            item.carModelList && item.carModelList.forEach(temp => {
		                temp.brandId = item.brandId;
		                temp.brandName = item.brandName;
		                carModelList.push(temp)
                    })
                })
                this.carModelTable = carModelList;
                this.currentTableData = this.carModelTable.slice(0, this.pageNumber * this.pageSize)
                this.total = carModelList.length;
            })
	    }
	
	    mounted () {
		    new Swiper( ".swiper-container", {
			    loop: true, //循环
			    autoplay: true,
			    pagination: { //分页符
				    el: '.swiper-pagination',
			    },
		    } )
	    }
	    
        pageNumberChange(pageNum) {
            this.pageNumber = pageNum
            let start = (this.pageNumber - 1) * this.pageSize;
            let end = this.pageNumber * this.pageSize > this.carModelTable.length ? this.carModelTable.length : this.pageNumber * this.pageSize
            this.currentTableData = this.carModelTable.slice(start, end);
        }
        
        pageSizeChange(pageSize) {
            this.pageNumber = 1;
            this.pageSize = pageSize
            let start = (this.pageNumber - 1) * this.pageSize;
            let end = this.pageNumber * this.pageSize > this.carModelTable.length ? this.carModelTable.length : this.pageNumber * this.pageSize
            this.currentTableData = this.carModelTable.slice(start, end);
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
