<template>
    <div class='login'>
        <Button long type="primary" size="large" @click="login">登录</Button>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Button } from 'view-design'
    import { login } from "@/commjs/api.js";
    import md5 from 'js-md5.js'

    @Component( {
	    components: {
		    Button,
	    },
    } )
    export default class Login extends Vue {
	    // CalcuMD5 ( pwd ) {
		//     pwd = pwd.toUpperCase();
		//     pwd = md5( pwd );
		//     return pwd;
	    // }
	
	    login () {
		    let param = {
			    "account": "zhangyuhong3",
			    "password": "zyh.123456"
		    };
		    login( param ).then( res => {
		        this.$store.commit("setuserName", res.result.name)
			    this.$router.push({name: 'home'})
		    } );
	    }
    }
</script>

<style scoped lang="scss">

</style>
