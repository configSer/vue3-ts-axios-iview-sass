<template>
    <div class='login'>
        <div class="contant">
            <Input type="text" v-model="user" placeholder="请输入用户名" />
            <Input type="password" v-model="psw" placeholder="请输入密码" />
            <Button long type="primary" size="large" @click="login">登录</Button>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Button, Input } from 'view-design'
    import { login } from "@/commjs/api.js";
    // import md5 from 'js-md5.js'

    @Component( {
	    components: {
		    Button,
            Input
	    },
    } )
    export default class Login extends Vue {
	    // CalcuMD5 ( pwd ) {
		//     pwd = pwd.toUpperCase();
		//     pwd = md5( pwd );
		//     return pwd;
	    // }
	    user = '';
	    psw = ''
     
	    login () {
	        if ( this.user && this.psw ) {
                let param = {
                    "account": this.user,
                    "password": this.psw
                };
                login( param ).then( res => {
                    this.$store.commit("setuserName", res.result.name)
                    this.$router.push({name: 'home'})
                } );
            } else {
	            this.$Message.warning('请补全登录信息')
            }
            
	    }
    }
</script>

<style scoped lang="scss">
    .login{
        .contant{
            height: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
        }
    }
</style>
