<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button type="primary" long @click="setUserName">这是一个按钮</Button>
    <Input style="margin-top: 10px" v-model="userName" />
  </div>
</template>


<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator';
  import { Button, Input } from 'view-design'

  @Component( {
	  components: {
		  Button,
		  Input
	  },
  } )
  export default class About extends Vue {
	  userName = this.$store.state.userName;
	 
	  setUserName () {
		  this.userName = '王五';
		  this.$store.commit( 'setuserName', '王五' );
	  }
	
	  @Watch( 'userName' )
      onUserNameChanged (userName: any) {
		  this.$store.commit( 'setuserName', userName );
	  }
  }
  
</script>

<style lang="scss">

</style>
