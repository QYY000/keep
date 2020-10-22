<template>
  <div class="community">
    <div class="father">
    <!-- ___________________________顶部导航栏__________________________ -->
    <mt-header class="header">
      <div class="header_left" slot="left">社区</div>
      <div class="header_right" slot="right">
          <router-link to="/reg"><img src="../../public/img/community/search.png" alt=""> </router-link>
      </div>
    </mt-header>
    <!-- ___________________________顶部导航栏__________________________ -->
    </div>
    <!-- ___________________________控制面板__________________________ -->
    <div class="article">
      <!-- 头像 昵称 关注 -->
      <div class="article_top">
        <div class="left">
          <img src="../../public/img/community/touxiang1.jpg" alt="">
        <span class="fontsmall">
          <p>_是丫丫呀</p>
          乐活达人
        </span>
        </div>
        <button>关注</button>
      </div>
      <!-- 动态内容 -->
      <div class="article_text">
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Nobis dolore consequuntur
         blanditiis. Ex, quaerat, assumenda nam ratio
         ne fuga dicta ab, suscipit nemo voluptatibus est 
         eligendi. Magnam, excepturi. Aliquid cupiditate ex
         plicabo maiores quam nobis ducimus illo temporib
         us, odio quisquam quidem ut porro assumenda dolori
         bus sit dignissimos cumque perferendis cum. Quis sa
         piente facere accusamus optio eius amet, alias volupta
         tes laboriosam officia aspernatur inventore? Fuga repudi
         andae assumenda hic dignissimos. Id voluptas voluptatibus 
         nihil porro, perferendis explicabo, recusandae dolorem 
         ratione inventore magnam reprehenderit laboriosam? Maxime q
         uibusdam illum dolores harum ad recusandae sapiente alias re
         prehenderit fugit optio, deleniti velit hic quidem blan
         ditiis mollitia deserunt dolor?
      </div>
    </div>
    <!-- ___________________________控制面板__________________________ -->
    
  </div>
</template>

<style>

.community .father{
  width: 100%;
  position: fixed;
  top: 0;
  left:0;
  z-index: 1000;
  box-sizing: border-box
}
.community .mint-header{
  background-color: #fff;
}
.community .header .header_left{
  font-size: 20px;
  color: #000;
}
.community .article {
  width: 100%;height: 300px;
  box-sizing: border-box;
  margin-top: 40px;
  padding: 10px 25px;
  overflow: hidden;
}
.community .article .article_top{
  display: flex;
  justify-content: space-between
}
.community .article .article_top .left{
  display: flex;
  justify-content: center;
  align-items: center
}
.community .article .article_top .left p{
  font-size: 16px;
  margin-bottom: 10px
}
.community .article .article_top img{
  width: 50px;height: 50px;
  border-radius: 50%;
  margin-right: 10px
}
.community .article .article_top button{
  width: 60px;
  height: 30px;
  background-color: lightgreen;
  color: #fff;
  border: none;
  border-radius: 18px;
}
.community .article .article_text{
  height: 80px;width:325px; 
  /* word-break: break-all;
  overflow: hidden;
  
  text-overflow: ellipsis;
   */
  white-space: nowrap;
  text-overflow: ellipsis;
overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
}
</style>

