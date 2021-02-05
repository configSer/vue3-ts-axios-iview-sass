<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Input v-model="userName" />
    <Button style="margin-top: 10px" type="primary" long @click="setUserName">提交</Button>
  </div>
</template>


<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator';
  import { Button, Input, Message } from 'view-design'

  @Component( {
	  components: {
		  Button,
		  Input
	  },
  } )
  export default class About extends Vue {
	  userName = this.$store.state.userName;
	
	  setUserName () {
		  if ( this.userName ) {
			  this.$Modal.success( {
				  content: '我的名字叫' + this.$store.state.userName
			  } );
		  } else {
			  this.$Message.warning( '请给我取名' );
		  }
	  }
	
	  @Watch( 'userName' ) onUserNameChanged ( userName: any ) {
		  this.$store.commit( 'setuserName', userName );
	  }
	
	  mounted () {
		  this.getPage()
	  }
	
	  getPage () {
		
	  }
  }
  
</script>

<style lang="scss">

</style>
