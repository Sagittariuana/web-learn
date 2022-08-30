<template>
<div class="itemMusicCard">

  <div class="itemMusicTop">
    <img :src="playlist.coverImgUrl" alt="" class="bgimg">
    <div class="itemLeft">
      <!-- 点击返回，绑定事件 -->
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-xitongfanhui"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="itemRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-caidan2"></use>
      </svg>
    </div>
      
  </div>
<!-- 歌单简介内容 -->
  <div class="itemTopContent">
    <div class="contentLeft">
      <img :src="playlist.coverImgUrl" alt="" >
      <div class="playCount">
          <!-- 图标 -->
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bofang"></use>
          </svg>
          <!-- 播放量 -->
          <span style="color:white">{{changeCount(playlist.playCount)}}</span>
      </div>
    </div>
    <div class="contentRight">
      <!-- 歌单名称 -->
      <p class="rightP_one">{{playlist.name}}</p>
      <!-- 作者信息 -->
      <div class="right_img">
        <img :src="playlist.creator.backgroundUrl" alt="">
        <span>{{playlist.creator.nickname}}</span>
        <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jiantou"></use>
          </svg>
      </div>
      <!-- 歌单简介 -->
      <p class="rightP_two">
        <span>{{playlist.description}}</span>
        <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jiantou"></use>
        </svg>
      </p>
    </div>
  </div> 
  <!-- 歌单简介尾部 -->
  <div class="ItemTopFooter">
        <div class="footerItem">
          <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-pinglun"></use>
          </svg>
          <span>{{playlist.commentCount}}</span>
        </div>
        <div class="footerItem">
          <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-shoucang"></use>
          </svg>
          <span>{{playlist.shareCount}}</span>  
        </div>
        <div class="footerItem">
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xiazai"></use>
          </svg>
          <span>下载</span>  
        </div>
        <div class="footerItem">
          <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-tianjiadao"></use>
          </svg>
          <span>添加到</span>
        </div>
  </div> 
</div>
</template>
<script>
export default {
  props:['playlist'],
  setup(props){
    // console.log(props);
    // 通过props进行传值，判断如果数据拿不到，就获取sessionStorage中的
    if((props.playlist.creator='')){
      props.playlist.creator = JSON.parse(sessionStorage.getItem().playlist).creator
    }
    // props.playlist.creator=""
    function changeCount(num){
      if(num>100000000){
        return (num/100000000).toFixed(2)+'亿'
      }else if(num>10000){
        return (num/10000).toFixed(2)+'万'
      }else{
        return num
      }
    }
    return {
      changeCount
    }
  }
}
</script>
<style lang="less" >
.itemMusicTop{
 width: 100%;
 height: 1rem;
 display: flex;
 position:relative;
 justify-content: space-between;
 align-content: center;
 padding:.2rem;
 .itemLeft,
 .itemRight{
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 .2rem;
    span{
      font-size: .4rem;
      color:white;
    }
    .icon{
      // 填充颜色
      fill:white

    }
 }
  .bgimg{
    width:100%;
    height: 11rem;
    // 设置脱离文档流
    // 使用固定定位
    position: fixed;
    z-index: -1;
    // 模糊
    
    filter:blur(30px)
  }
}
.itemTopContent{
  width: 100%;
  height: 3rem;
  padding:.2rem;
  margin-top: .4rem;
  display: flex;
  justify-content: space-between;
  .contentLeft{
    width: 36%;
    height: 2.6rem;
    position: relative;
    img{
      width:2.6rem;
      height: 2.6rem;
      border-radius: 0.2rem;
      position:absolute;
      z-index: -1;
    }
    .playCount{
      position:absolute;
      right:.1rem;
      margin-top: .1rem;
      .icon{
        width: .3rem;
        height:.3rem;
        fill:white;
        margin-top: -0.02rem ;
        vertical-align: middle;
      }
    }
  }
  .contentRight{
    width: 60%;
    height: 2.6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .rightP_one {
      font-size: 0.3rem;
      font-weight: 900;
      color: #fff;
      font-family: "微软雅黑";
    }
    .right_img {
      width: 100%;
      height: 0.6rem;
      line-height: 0.6rem;
      color: #ccc;
      img {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
        vertical-align: middle;
      }
      span {
        margin-left: 0.1rem;
      }
      .icon {
        width: 0.26rem;
        height: 0.26rem;
        margin-top: -0.08rem;
        vertical-align: middle;
      }
    }
    .rightP_two {
      width: 100%;
      height: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        display: inline-block;
        width: 95%;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 0.24rem;
        color: #ccc;
      }
      .icon {
        width: 0.24rem;
        height: 0.24rem;
      }
    }
  }
}
.ItemTopFooter{
  width: 100%;
  height: 1.4rem;
  display: flex;
  justify-content: space-around;
  margin-top: .2rem;
  .footerItem{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    .icon{
      fill: #fff;
    }
    span{
      margin-top: .1rem;
    }
  }

}
</style>