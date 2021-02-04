<template>
    <div class='layout'>
        <div class="view-content">
            <router-view />
        </div>
        <div class="bottom">
            <router-link to="/home">home</router-link>
            <router-link to="/about">about</router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .layout{
        display: flex;
        flex-direction: column;
        height: 100%;
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
