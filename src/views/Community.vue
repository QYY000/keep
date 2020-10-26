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
    <div class="article" v-for="(p,i) of 4" :key="i">
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
       这场“穿越时空”的展览利用了军博展览大楼一层西侧3个
       展厅，以时间为脉络，设置“正义担当 决策出兵”“
       运动歼敌 稳定战线”“以打促谈 越战越强”“实现停
       战 胜利归国”“抗美援朝战争胜利的伟大意义和历史
       贡献”5个部分，以及“中国人民志愿军思想政治工作”“
       后勤保障工作”“伟大的抗美援朝运动”“最可爱的人”“不
       忘初心 牢记使命 永远奋斗”5`-个专题，全方位展现在中
       国共产党坚强领导下，中国人民志愿军英勇战斗、越战
       越强，中国人民众志成城、攻坚克难，最终取得抗美援朝
       战争胜利的伟大历程。
      </div>
       <router-link to="/login">全部</router-link>
      <!-- 照片 -->
      <div class="picture">
        <div class="img">
          <img src="../../public/img/community/life2.jpg" alt="">
          <img src="../../public/img/community/life3.jpg" alt="">
          <img src="../../public/img/community/life1.jpg" alt="">
        </div>
        <!-- <div class="img">
        </div>
        <div class="img">
        </div> -->
      </div>
      <div class="comment">
        <span class="fontsmall">公告</span>
        <img src="../../public/img/community/gonggao (1).png" >
        <router-link to='/login' >
          <span class="fontsmall">评论</span>
          <img src="../../public/img/community/information.png" >     
        </router-link>
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
  width: 100%;height: 330px;
  box-sizing: border-box;
  padding: 10px 25px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
}
.community:first-child{
  margin-top: 40px;
}
.community .article .article_top{
  display: flex;
  justify-content: space-between;
  border-top: #ccc8c8 dashed 1px;
  padding-top: 15px
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
/*怎么实现多行文本省略号*/ 
.community .article .article_text {
  height: 80px;width:325px; 
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  white-space: normal;
  -webkit-box-orient: vertical;

}
.community .article a{
  color: #707070;
  display: inline-block;
  margin:5px 0;
}
.community .article .picture .img img{
width: 32.5%;height: 110px;
border-radius: 5px;
margin: 4px 1px;
}
/*图片的点击放大可以使用H5全屏API 移动端没有鼠标事件 hover不合理*/ 
/* .community .article .picture img:hover{   
  transform: scale(2);
  border-radius: 0; */
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto; */
/* } */
.community .article .comment img{
  margin: 0 8px
}

</style>

