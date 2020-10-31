<template>
  <div id="app">
    <router-view/>
    <my-footer v-if="this.$route.path!='/login' && this.$route.path!='/reg' && this.$route.path!='/details'"></my-footer> <!--对底部导航栏做判断，如果不需要的导航栏的页面，不显示导航栏？？？？？？？？？？？-->
  </div>
</template>
<style >
a{
  color: #707070;
  font-size: 12px;
}
</style>
