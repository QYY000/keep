<template>
  <div class="me">
    <div class="father">
    <!-- ___________________________顶部导航栏__________________________ -->
    <mt-header class="header">
      <div class="header_left" slot="left">个人</div>
      <div class="header_right" slot="right">
          <router-link to="/me">
          <img src="../../public/img/me/Group-.png" >
          </router-link>
          <router-link to="/login">           
          <img src="../../public/img/me/saoyisao.png" > 
          </router-link>
          <router-link to="/community">
          <img src="../../public/img/me/message.png" > 
          </router-link>
      </div>
    </mt-header>
    <!-- ___________________________顶部导航栏__________________________ -->
    </div>
    <!-- ___________________________控制面板__________________________ -->
    <div class="top">

    </div>
    <div class="bottom">
      <div class="headerPic">
        <div class="img">
          <img src="../../public/img/community/touxiang1.jpg" alt="">

          <span class="updataMessage">
              <slot-btn class="fontsmall">
                <template v-slot:button>修改资料
                </template>
              </slot-btn>
          </span>
        </div>
        
      </div>
      <!-- 昵称 -->
      <div class="username">
        <h3>加油_小可爱呢</h3>
        <div class="fontsmall">女</div>
      </div>

    </div>
    <!-- ___________________________控制面板__________________________ -->
  </div>

</template>

<style>

.me .father{
  width: 100%;
  position: fixed;
  top: 0;
  left:0;
  z-index: 1000;
}
.me .mint-header{
  background-color: rgb(42, 35, 51);
}
.me .header .header_left{
  font-size: 20px;
  color: #fff;
}
.me .header .header_right a{
  display: inline-block;
  margin:0 5px;
  margin-top: -50px;
}
.me .top{
  width: 100%;height: 200px;
  background-color: rgb(42, 35, 51);
}
.me .bottom .headerPic{
  position: relative;
}
/* 我的头像 */
.me .bottom .headerPic .img{
  border-radius: 50%;
  background-color: #fff;
  width: 100px;height: 100px;
  margin: 0;
  margin-top: -48px;
  margin-left: 10px;
  display: flex;
  
}
.me .bottom .headerPic img{
  width: 80%;height: 80%;
  border-radius: 50%;
  padding: 10px;
}
.me .bottom .headerPic span{
  position: absolute;
  top: 50%;
  right: 20px;
}
/* 用户信息昵称性别 */
.me .bottom .username{
  margin-left: 10px;
}
/* 修改资料的按钮 */
.me .bottom .updateMessage{
  color: #707070;
}
</style>

<script>
import slotBtn from '../components/Button'
export default {
  components:{slotBtn}
}
</script>