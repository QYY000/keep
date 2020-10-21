<template>
    <div class="control2">
        <div class="header">
            <div>
                <p>训练计划+饮食指导</p>
            </div>
        </div>
 <!--————index————控制面板2————图文循环部分  -->
        <div class="imgtext" v-for="(p,i) of 5" :key='i'>
            <h>个性定制训练计划</h>
        </div>
        <mt-button type="primary" size="large">开通会员</mt-button>
    </div>
    
</template>

<style>
.control2 .header{
    width: 100%;height: 8rem;
    background-image: url('../../public/img/index/control2_background1.jpg');
    background-size: cover;
    text-align: center;
    line-height: 8rem;
    position: relative;
}
/* 怎么给背景图片设置透明度？？？ */
.control2 .header p{
    width: 100%;
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    font-size: 2em;
    font-weight: bolder;
    font-family: monospace;
}
.control2 .imgtext{
    width: 335px ;height: 140px;
    background-image: url('../../public/img/index/allplan.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    text-align: center;
    line-height: 140px;
    margin: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    color: #fff;
    font-size: 18px;
    font-family: '宋体'
}
.control2 .imgtext h{
    letter-spacing: 3px
}
/*按钮样式*/
.control2 .mint-button{
    background-color: #E5B431;
    width: 50%;
    margin: 0 auto;
    border-radius: 30px;
    position: fixed;
    bottom: 70px;
    left: 25%
} 
</style>
