<template>
  <div class="index">
    <div class="father">
    <!-- ___________________________顶部导航栏__________________________ -->
    <mt-header class="header" v-model="active">
      <div class="header_left" slot="left">首页</div>
      <div class="header_right" slot="right">
          <router-link to="/reg">注册/</router-link>
          <router-link to="/login">登录</router-link>
      </div>
    </mt-header>
    <!-- ___________________________顶部导航栏__________________________ -->

    <!-- ___________________________顶部选项卡____________________________ -->
    <div class="navbar" >
      <mt-navbar v-model="active">
        <mt-tab-item id="1">推荐</mt-tab-item>
        <mt-tab-item id="2">计划</mt-tab-item>
        <mt-tab-item id="3">活动</mt-tab-item>
      </mt-navbar>
    </div>
    <!-- ___________________________顶部选项卡____________________________ -->
    </div>
    <!--____________________________控制面板_______________________________-->   
    <div class="home" >
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="1">
          <div v-for="(p,i) of 100" :key = "i">{{i}}</div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">2222</mt-tab-container-item>
        <mt-tab-container-item id="3">3333</mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!--____________________________控制面板_______________________________--> 


    <!--____________________________底部导航_______________________________--> 
    <div class="tabbar">
      <my-footer></my-footer>
    </div>
    <!--____________________________底部导航_______________________________--> 

  </div>
</template>

<style>
/*顶部导航栏*/ 
.index .father{
  width: 100%;
  position: fixed;
  top: 0;
  left:0;
  z-index: 1000;
}
.index .mint-header{
  background-color: #fff;
}
.index .header{
  font-size: 18px;
  color: #000;
  letter-spacing: 2px;
}
.index a{
  color: #000;
  text-decoration: none;
  font-size: 12px
}
/*顶部选项卡*/ 
.index .mint-navbar .mint-tab-item{
  border-bottom: none;
  color: #707070
}
.index .mint-navbar .mint-tab-item.is-selected{
  border-bottom: #000 solid 1px ;
}
/*控制面板*/ 
.index .home{
  width: 100%;
  margin-top: 90px;
  margin-bottom: 55px;
}
</style>

<script>
export default {
  data(){
    return {
      active:"1"
    }
  }
}
</script>

