<template>
    <div class="register">
    <!-- ___________________________顶部导航栏__________________________ -->
    <mt-header fixed title="KEEP">
      <div class="header_left" slot="left" >
          <router-link to="/">
              <mt-button icon='back'></mt-button>
          </router-link>
      </div>
      <div slot="right">
          <router-link to="/login">登录</router-link>
      </div>
    </mt-header>
    <!-- ___________________________顶部导航栏__________________________ -->

    <!-- ___________________________注册体__________________________ -->
    <div class="form">
        <!-- 表单元素 -->
        <mt-field
            type="text"
            label="用户名"
            placeholder='请输入您的用户名'
            v-model='username'
            :state="usernameState"
            @blur.native.capture="usernameTest"
            :attr="{maxlength:12}"
            
        >

        </mt-field>
        <mt-field
            type="password"
            label="密码"
            placeholder='请输入您的用密码'
            v-model="upwd"
            :state="passwordState"
            @blur.native.capture="passwordTest"
            :attr="{maxlength:12}"
            
        >

        </mt-field>
        <mt-field
            type="password"
            label="确认密码"
            placeholder='请再次输入您的密码'
            v-model="conupwd"
            :state="conpasswordState"
            @blur.native.capture="conpasswordTest"
            :attr="{maxlength:12}"
        >

        </mt-field>
        <!-- 注册按钮 -->
        <div class="button">
            <mt-button type="primary" size="large" :class="{show:show,off:off}" @click="register">注册</mt-button>
        </div>
        <!-- 同意注册协议 -->
        <div class="agree">
            
        </div>
    </div>
    <!-- ___________________________注册体__________________________ -->
    

    </div>
</template>

<style>
.register a{
    color: #000
}
.register .mint-header{
    background-color: #fff;
    color: #000
}
/*注册体*/ 
.register .form{
    margin-top:50px
}
.register .mint-cell .mint-cell-wrapper{
    font-size: 15px;
    text-align: center;  
    border-bottom: #707070 solid 1px;
    margin: 10px 20px;
    background-image: none;
}
/*注册按钮*/ 
.register .button .mint-button.off{
    color: #fff;
    background-color: #707070;
    width: 90%;
    margin: 20px auto
}
.register .button .mint-button.show{
    color: #fff;
    background-color: #000;
    width: 90%;
    margin: 20px auto
}

</style>

<script>
export default {
    data(){
        return {
            username:'',
            upwd:'',
            conupwd:'',
            usernameState:'',
            passwordState:'',
            conpasswordState:'',
            // 按钮颜色切换
            show:false,
            off:true,
        }
    },
    methods:{
        usernameTest(){
            let usernameRegExp=/^[0-9A-Za-z]{6,12}$/;
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
            if(this.upwd==''){
                this.$toast('密码不能为空')
            }else{
                let passwordRegExp=/^[0-9A-Za-z]{6,12}$/;
                if(passwordRegExp.test(this.upwd)){
                    this.passwordState='success'
                }else{
                     this.$toast({
                         message:"密码格式错误",
                         duration:1000
                      })
                this.passwordState='error'
                }
            }
        },
        conpasswordTest(){
            if(this.conupwd==''){
                this.$toast('密码不能为空')
            }else{
                if(this.upwd!=this.conupwd){
                    this.$toast('两次密码不一致')
                    this.conpasswordState='error'
                }else{
                   this.conpasswordState='success'
                    this.show=true
            }
            }

        },
        register(){
            console.log('用户名：'+this.username+'密码：'+this.password+'可以向服务器传递数据')
            this.$router.push('/login')
        }
    }
}
</script>
