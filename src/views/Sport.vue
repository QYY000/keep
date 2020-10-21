<template>
  <div class="sport">
    <div class="father">
    <!-- ___________________________顶部导航栏__________________________ -->
    <mt-header class="header">
      <div class="header_left" slot="left">运动</div>
      <div class="header_right" slot="right">
          <router-link to="/reg"><img src="../../public/img/community/search.png" alt=""> </router-link>
      </div>
    </mt-header>
    <!-- ___________________________顶部导航栏__________________________ -->
    </div>
    <!-- 底部导航栏 -->
  </div>
</template>

<style>
.sport .father{
  width: 100%;
  position: fixed;
  top: 0;
  left:0;
  z-index: 1000;
}
.sport .mint-header{
  background-color: #fff;
}
.sport .header .header_left{
  font-size: 20px;
  color: #000;
}

</style>