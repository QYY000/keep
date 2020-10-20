<template>
    <div class="footer">
        <div class="tabbar">
            <mt-tabbar fixed v-model="tabbar">
                <mt-tab-item id="index">首页
                    <img src="../../public/img/footer/index.svg" slot="icon">
                </mt-tab-item>
                <mt-tab-item id="community">社区
                    <img src="../../public/img/footer/community.svg" slot="icon">
                </mt-tab-item >
                <mt-tab-item id="sport">运动
                    <img src="../../public/img/footer/sport.svg" slot="icon"> 
                </mt-tab-item>
                <mt-tab-item id="me">我的
                    <img src="../../public/img/footer/me.svg" slot="icon">                    
                </mt-tab-item>
            </mt-tabbar>
        </div>
    </div>
</template>

<style>
.tabbar{
    width: 100%;
}
.tabbar .mint-tabbar>.mint-tab-item{
    color: #707070
}
.tabbar .mint-tabbar>.mint-tab-item.is-selected{
    color: #000;
}
</style>


<script>
export default {
    data(){
        return {
            tabbar:'index'
        }
    },
    watch:{
        tabbar(value){
            if(value=='index'){
                this.tabbar='index'
                this.$router.push('/')
            }
             if(value=='community'){
                this.tabbar='community'
                this.$router.push('/community')
            }
            if(value=='sport'){
                this.tabbar='sport'
                this.$router.push('/sport')
            }
            if(value=='me') {
                this.tabbar='me'
                this.$router.push('/me')
            }
        }
    }
}
</script>
