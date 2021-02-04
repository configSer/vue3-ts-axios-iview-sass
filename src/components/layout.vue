<template>
    <div class='layout'>
        <div class="top">
            <span>{{ userName }}</span>
            <Button type="success" size="small" @click="logout">退出</Button>
        </div>
        <div class="view-content">
            <router-view />
        </div>
        <div class="bottom">
            <router-link to="/home">home</router-link>
            <router-link to="/about">about</router-link>
        </div>
    </div>
</template>

<script lang="ts">
  
  import { Component, Vue, Watch } from 'vue-property-decorator';
  import { Button } from 'view-design'
  
  @Component( {
      components: {
          Button,
      },
  } )
  export default class Layout extends Vue {
      userName = this.$store.state.userName;
      logout () {
          this.$router.push( { name: 'login' } )
      }
  }
</script>

<style scoped lang="scss">
    .layout{
        display: flex;
        flex-direction: column;
        height: 100%;
        .top{
            height: 60px;
            border-bottom: 1px solid #efefef;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            padding: 0 20px;
        }
        .view-content{
            height: calc(100% - 60px);
            padding: 0 20px;
            overflow-x: hidden;
            overflow-y: auto;
        }
        .bottom{
            height: 60px;
            border-top: 1px solid #efefef;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
    }
</style>
