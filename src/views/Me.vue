<template>
  <div class="me">
    <div class="father">
    <!-- ___________________________顶部导航栏__________________________ -->
    <mt-header class="header">
      <div class="header_left" slot="left">我</div>
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
    <!-- 底部导航栏 -->
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
  background-color: #fff;
}
.me .header .header_left{
  font-size: 20px;
  color: #000;
}
.me .header .header_right a{
  display: inline-block;
  margin:0 5px
}
</style>
