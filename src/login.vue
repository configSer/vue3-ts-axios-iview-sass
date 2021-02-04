<template>
    <div class='login'>
        <Button long  type="primary" size="large" @click="login">登录</Button>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Button } from 'view-design'
    
    @Component( {
        components: {
            Button,
        },
    } )
    export default class Login extends Vue {
        login() {
            this.$store.commit( 'setuserName', '王五' );
            this.$router.push({name: 'home'})
        }
    }
</script>

<style scoped lang="scss">

</style>
