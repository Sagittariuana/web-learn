<template>
  <div class="topNav">
    <!-- 将svg放入div方便布局 -->
    <div class="topleft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-caidan"></use>
      </svg>
    </div>
    <div class="topContent">
      <span>我的</span>
      <span class="active">发现</span>  
      <span>云村</span>
      <span>视频</span>
    </div>
    <div class="topright">
      <!-- 给搜索图标添加点击事件，点击跳转路由至搜索页面 -->
      <svg class="icon" aria-hidden="true" @click="$router.push('/searchView')">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
    
  </div>
</template>
<style lang="less" scoped>
// 实现整个头部布局
  .topNav{
    width: 100%;
    height: 1rem;
    padding: .2rem;
    display: flex;
    justify-content: space-between;
    // 实现垂直居中
    align-items: center;
    // 完成中间部分
    .topContent{
      width: 65%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      // align-items: center;
      font-size: .36rem;
      .active{
        font-weight: 900;
      }
    }
  }
</style>