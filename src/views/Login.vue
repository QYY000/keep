<template>
    <div class="login">
         <!-- ___________________________顶部导航栏__________________________ -->
    <mt-header fixed title="KEEP">
      <div class="header_left" slot="left" >
          <router-link to="/">
              <mt-button icon='back'></mt-button>
          </router-link>
      </div>
      <div slot="right">
          <router-link to="/reg">注册</router-link>
      </div>
    </mt-header>
    <!-- ___________________________顶部导航栏__________________________ -->

     <!-- ___________________________登录体__________________________ -->
    <div class="form">
        <!-- 表单元素 -->
        <mt-field
            type="text"
            label="用户名"
            placeholder='请输入您的用户名'
            v-model="username"
            :state="usernameState"
            disableclear
            @blur.native.capture="usernameTest()"
            :attr="{maxlength:12}"
            
        >
        </mt-field>
        <mt-field
            type="password"
            label="密码"
            placeholder='请输入您的用密码'
            v-model="password"
            :state="passwordState"
            disableclear            
            @blur.native.capture="passwordTest()"
            :attr="{maxlength:12}"
            
        ></mt-field>
        <!-- 注册按钮 -->
        <div class="button">
            <mt-button type="primary" size="large" @click="login()" :class="{show:show,off:off}" >登录</mt-button>
        </div>
        <!-- 忘记密码 -->
        <div class="forget">
            <p>短信登录</p>
            <router-link to="/">忘记密码？</router-link>
        </div>
        <!-- 微信QQ登录 -->
            <p class="text"> ——————其他登录方式——————</p>
        <div class="weixin" @click="ohtersLogin">
            <div class="qq">
                <img src="../../public/img/qq.png" >
                <div class="code"  v-show="others">  <!--添加蒙层（遮罩）-->
                    <p>扫码登录</p>
                    <img src="../../public/img/code.svg">
                </div>
            </div>
            <div class="wx">
                <img src="../../public/img/wx.png" >               
            </div>
            <div class="wb">
                <img src="../../public/img/wb.png" >                
            </div>
        </div>
    </div>
    <!-- ___________________________登录体__________________________ -->
    </div>
</template>

<style>
.login {
    position: relative;
}
.login .mint-header{
    background-color: #fff
}
.login a{
    color: #000
}
.login .mint-header{
    background-color: #fff;
    color: #000
}
/*登录体*/ 
.login .form{
    margin-top:50px
}
.login .mint-cell .mint-cell-wrapper{
    font-size: 15px;
    text-align: center;
    border-bottom: #707070 solid 1px;
    margin: 10px 20px;
    background-image: none;
    
}
/*登录按钮*/ 
.login .button .mint-button.off{
    color: #fff;
    background-color: #707070;
    width: 90%;
    margin: 20px auto
}
.login .button .mint-button.show{
    color: #fff;
    background-color: #000;
    width: 90%;
    margin: 20px auto
}
.login .forget {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin:10px 20px;
    font-size: 12px
}
/*忘记密码*/ 
.login .forget a{
    color: #22A4FF
}
/*登录方式字体*/ 
.login .text{
    font-size: 14px;
    text-align: center;
    margin-top: 50px
}
/*登录方式*/ 
.login .weixin{
    display: flex;
    justify-content: space-around;
    margin: 30px 30px;
    overflow: hidden;
}
/*二维码*/ 
.login .code{
    width: 250px;
    height: 250px;
    background-color: #fff;
    border: #000 1px solid;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
}
.login .code img{
    width: 150px;height: 150px;
    border: #000 3px solid;
    padding: 10px;
}
.login .code p{
    margin:10px 0;
}
</style>

<script>
export default {
    data(){
        return {
            username:'',
            password:'',
            usernameState:'',
            passwordState:' ',
            // 按钮颜色切换
            show:false,
            off:true,
            // 登录方式
            others:false

        }
    },
    methods:{
        login(){
            // console.log(this.username+this.password+"可以向服务器发送请求")
            this.axios.get('/login',{
                params:{
                    username:this.username,
                    password:this.password
                    }
            }).then(res=>{
                console.log(res)
                if(res.data.code==1){
                    // console.log('登录成功')
                    this.$router.push('/')
                    // 用户登录成功之后，将登录成功的状态isLogin=true
                }else{
                    // console.log("用户名或密码错误！")
                    this.$toast("用户名或密码错误")
                }
            })
        },
        usernameTest(){
            let usernameRegExp=/^[0-9A-Za-z]{4,12}$/;
            if(this.username==''){
                this.$toast('用户名不能为空')
            }else{
                if(usernameRegExp.test(this.username)){
                this.usernameState='success'
            }else{
                this.$toast({
                    message:"用户名格式错误"
                })
                this.usernameState='error'                
            }
            }
        },
        passwordTest(){
            if(this.password==''){
                this.$toast('密码不能为空')
            }else{
                let passwordRegExp=/^[0-9A-Za-z]{4,12}$/;
            if(passwordRegExp.test(this.password)){
                this.passwordState='success'
                this.show=true 
            }else{
                this.$toast({
                    message:"密码格式错误",
                    duration:1000
                })
                this.passwordState='error'
            }
            }
        },
        ohtersLogin(e){
            console.log(e.target)
            console.log(e)
            if(e.target.nodeName=="IMG"){
                this.others==true ? this.others=false : this.others=true 
            }
        }
    },

}
</script>
