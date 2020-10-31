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
    <div class="message">
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
        <h2>{{nickname}}</h2>
        <div class="fontsmall"><span>{{sex==1?'男':'女'}}</span><span>|</span><span>湖北</span></div>
        <!-- 关注粉丝 -->
        <ul>
          <li>
            <p>{{attentionCount}}</p>
            <p>关注</p>
          </li>
          <li>
            <p>0</p>
            <p>粉丝</p>
          </li>
          <li>
            <p>0</p>
            <p>获赞</p>
          </li>
        </ul>
      </div>
    </div>
      <!-- 溢出隐藏的数据部分 -->
      <div class="data"  >
        <note-page class="note_page">
          <template v-slot:image><img src="../../public/img/qq.png" ></template>
          <template v-slot:title_target>目标记录本</template>
          <template v-slot:title_h3>创建我的目标记录本</template>
          <template v-slot:title_p>记下向目标前进的自己</template>
        </note-page>
        <note-page class="note_page">
          <template v-slot:image><img src="../../public/img/wb.png" ></template>
          <template v-slot:title_target>运动数据</template>
          <template v-slot:title_h3>创建我的目标记录本</template>
          <template v-slot:title_p>记下我的运动数据</template>
        </note-page>
         <note-page class="note_page">
          <template v-slot:image><img src="../../public/img/wx.png" ></template>
          <template v-slot:title_target>社区数据</template>
          <template v-slot:title_h3>创建我的社区记录本</template>
          <template v-slot:title_p>记下我的社区动态</template>
        </note-page>
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
  width: 100%;height: 150px;
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
.me .username .fontsmall{
  margin: 20px 0;
}
.me .username ul{
  list-style: none;
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.me .username ul p{
  margin-bottom: 10px;
}
.me  .data{
  width: 100%;height: 292px;
  margin-bottom: 55px;
  overflow-y: auto;
}
/* 引入的插槽数据 */
.me  .data .node_page{
  margin-top: 10px;
}
</style>

<script>
import slotBtn from '../components/Button'
import notePage from '../components/Notes'
export default {
  components:{slotBtn,notePage},
  data(){
    return {
      nickname:localStorage.getItem('nickname'),
      sex:localStorage.getItem('sex'),
      isLogin:localStorage.getItem('isLogin'),
      // 关注数量
      attentionCount:0
    }
  },
  created(){
  //  this.bus.$on('attention',this.attention.bind(this))
  //  console.log(this.bus)
  // },
  // methods:{
  //   attention(task){
  //     console.log(this.task)
  //     this.attentionCount=this.task
  //   }
    this.attentionCount=localStorage.getItem("attentionCount")
  }

}
</script>