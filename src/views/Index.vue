<template>
  <div class="index" >
    <div class="father">
    <!-- ___________________________顶部导航栏__________________________ -->
    <mt-header class="header" v-model="active">
      <div class="header_left" slot="left">首页</div>
      <div class="header_right" slot="right" v-if="isLogin">
        <router-link to="/me">注销</router-link>
      </div>
      <div class="header_right" slot="right"  v-else>
          <router-link to="/reg">注册 | </router-link>
          <router-link to="/login">登录</router-link>    <!--localStorage存储用户登录的信息 ？？？？？？？？-->
      </div>                                              <!--做判断，状态为1则显示搜图标，为0显示登录-->
      
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
        <!-- ————面板1  推荐——— -->
        <mt-tab-container-item id="1">
          <div class="circle">
            <div class="circle_icon1">
              <ul>
                <li><img src="../../public/img/index/kecheng_2.png"> <p class="fontsmall">找课程</p> </li>
                <li><img src="../../public/img/index/kecheng.svg"><p class="fontsmall">找课程</p> </li>
                <li><img src="../../public/img/index/fire.svg"><p class="fontsmall">找课程</p> </li>
                <li><img src="../../public/img/index/naozhong.svg"><p class="fontsmall">找课程</p> </li>
                <li><img src="../../public/img/index/shipin.svg"><p class="fontsmall">找课程</p> </li>
              </ul>
            </div>
            <div class="circle_icon2">
              <ul>
                <li><img src="../../public/img/index/fuji.svg"><p class="fontsmall">腹肌</p></li>
                <li><img src="../../public/img/index/meirong.svg"><p class="fontsmall">美容</p></li>
                <li><img src="../../public/img/index/shouyao.svg"><p class="fontsmall">瘦腰</p></li>
                <li><img src="../../public/img/index/tunbu.svg"><p class="fontsmall">丰臀</p></li>
                <li><img src="../../public/img/index/zengji.svg"><p class="fontsmall">增肌</p></li>
              </ul>
            </div>
          </div>
        <!-- 轮播图 -->
          <div class="slide">
            <mt-swipe
            :showIndicators="true"
            :auto='5000'
            :speed='500'
            >
              <mt-swipe-item><img src="../../public/img/index/swipe_1.jpg" alt=""></mt-swipe-item>
              <mt-swipe-item><img src="../../public/img/index/swipe_2.jpg" alt=""></mt-swipe-item>
              <mt-swipe-item><img src="../../public/img/index/slide_3.jpg" alt=""></mt-swipe-item>
              <mt-swipe-item><img src="../../public/img/index/slide_4.jpg" alt=""></mt-swipe-item>
            </mt-swipe>
          </div>
          <!-- 推荐计划 -->
          <div class="allplan" >

              <div class="plan" v-for="(p,i) of 4" :key="i">
                <div class="top">
                  <p>推荐计划</p>
                  <router-link to="'/" class="fontsmall">全部计划</router-link>
                </div>
                <div class="bottom">
                  <p>个性定制训练计划</p>
                </div>

            </div>
          </div>
        <!-- 推荐课程 -->
        <div class="allvideo" >

              <div class="plan" v-for="(p,i) of 4" :key="i">
                <div class="top">
                  <p>直播课程</p>
                  <router-link to="'/" class="fontsmall">全部计划</router-link>
                </div>
                <div class="bottom">
                  <p>舒缓瑜伽 全身舒展</p>
                </div>

            </div>
          </div>
        </mt-tab-container-item>
        
        <!-- ————面板2   计划plan———— -->        
        <mt-tab-container-item id="2">
           <control-plan></control-plan>
        </mt-tab-container-item>
        <!-- ————面板2   活动———— -->                
        <mt-tab-container-item id="3">3333</mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!--____________________________控制面板_______________________________--> 


    <!--____________________________底部导航_______________________________--> 
    <div class="tabbar">
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
.index .header .header_left{
  font-size: 20px;
  color: #000;
}

.index a{
  color: #707070;
  text-decoration: none;
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
/*控制面板1*/ 
/*图标1*/ 
.index .circle_icon1 ul{
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center
}
.index .circle_icon1 ul li{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: bisque;
  text-align: center;
  position: relative;
}
.index .circle_icon1 ul li:first-child{
  background-color: rgb(159, 172, 230);
}
.index .circle_icon1 ul li:nth-child(2){
  background-color: rgb(216, 223, 152);
}
.index .circle_icon1 ul li:nth-child(3){
  background-color: rgb(224, 193, 233);
}
.index .circle_icon1 ul li:nth-child(4){
  background-color: rgb(193, 233, 213);
}
.index .circle_icon1 ul li:last-child{
  background-color: rgb(233, 193, 193);
}
.index .circle_icon1 ul li img{
  display: inline-block;
  width: 32px;height: 32px;
  margin-top: 7px;
  color: #fff
}
.index .circle_icon1 ul li>p{
  color: #707070;
  position: absolute;
  top: 60px;
  left: 7px
}
/*图标2*/ 
.index .circle_icon2 ul{
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center
}
.index .circle_icon2 ul li{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-align: center;
  background-color: #fff;
}

.index .circle_icon2 ul li img{
  display: inline-block;
  width: 32px;height: 32px;
  margin-top: 7px;
  color: #fff
}
/* 轮播图 */
.index .home .slide{
  width:100%;height: 100px;
  border-radius: 20%;
  margin-top: 40px;
  margin-bottom: 20px

}
.index .home .slide img{
  max-height:7em ;
  width: 100%;
}
/* 推荐计划+直播课程 */
.index .home .allplan{
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
}
.index .home .allvideo{
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
}
.index .home .plan{
  width: 260px;
  padding: 5px 5px;
  margin: 5px 0;

}
.index .home .plan .top{
  width: 260px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.index .home .plan .top p{
  padding-left: 8px;
  font-weight: bold
}
.index .home .plan .top a{
  padding-right: 10px;
  padding-top: 8px
}
.index .home .allplan .plan .bottom p{
  height: 100px;
  color:#fff;
  font-size: 14px;
  text-align: center;
  line-height:100px ;
  border-radius: 5px;
  background-image: url('../../public/img/index/allplan.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.index .home .allvideo .plan .bottom p{
  height: 100px;
  color:#fff;
  font-size: 14px;
  text-align: center;
  line-height:100px ;
  border-radius: 5px;
  background-image: url('../../public/img/index/allvideo.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<script>
import controlPlan from '../components/Indexcontrol.vue'
export default {
  name:'index',
  components:{controlPlan},
  data(){
    return {
      active:"1"
    }
  }
}
</script>

