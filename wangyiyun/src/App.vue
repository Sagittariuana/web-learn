<template>
<!-- 路由占位符 -->
  <router-view/>
  <FooterMusic/>
</template>
<script>
import FooterMusic from './components/item/FooterMusic.vue';
export default {
  components:{
    FooterMusic
  }
}
</script>
<style lang="less">
  *{
    margin: 0;
    padding: 0;
    // 采用怪异盒模型
    // 内边距+边框+内容
    box-sizing: border-box;
  }
  // 使用svg格式，不可使用font-size进行设置，使用width、hight
  .icon {
       width: 0.5rem; 
       height:0.5rem;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
  a{
    color:black
  }
</style>
