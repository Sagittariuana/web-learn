<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe :loop="false" :width="130" :show-indicators="false" class="my-swipe">
        <!-- 循环musicList ,可以给swipe添加点击事件实现跳转：@click="this.$router.push({path:'/itemMusic',query:{id:item.id}})" -->
        <van-swipe-item v-for="item in state.musicList" :key="item" >
        <!-- 路由跳转 -->
        <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
          <!-- 图片获取picurl -->
            <img :src="item.picUrl" alt="">
            <span class="playCount">
              <!-- 图标 -->
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-bofang"></use>
              </svg>
              <!-- 播放量 -->
              {{changeCount(item.playCount)}}
            </span>
            <div class="name">{{item.name}}</div>
        </router-link>
        </van-swipe-item>
        
      </van-swipe>
    </div>
  </div>
</template>
<script>
import {getMusicList} from "@/request/api/home"
import { reactive } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
  // 使用vue2的语法
  /* data(){
    return {
      musicList:[]
    }
  },
  methods:{
    async getGedan(){
      let res = await getMusicList()
      console.log(res);
      this.musicList = res.data.result
    },
    // 处理播放量数据
    changeCount:function(num){
      if(num>=100000000){
        return (num/100000000).toFixed(2)+'亿'
      }else if(num >=10000000){
        return (num/10000000).toFixed(2)+'千万'
      }else if(num/10000){
        return (num/10000).toFixed(2)+'万'
      }else{
        return num
      }
    }
  },
  // 在mounted生命周期里执行getGedan
  mounted(){
    this.getGedan()
  } */
  // vue3
  setup(){
    const state = reactive({
      musicList:[]
    })
     // 处理播放量数据
    function changeCount(num){
      if(num>=100000000){
        return (num/100000000).toFixed(2)+'亿'
      }else if(num/10000){
        return (num/10000).toFixed(2)+'万'
      }else{
        return num
      }
    }
    onMounted(async ()=>{
      let res = await getMusicList()
      state.musicList = res.data.result
    })

    return {state,changeCount}
  }
}
</script>
<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
  .musicContent {
    width: 100%;
    height: 3.6rem;

    .van-swipe-item{
      //   margin-right: 0.14rem;
      padding-right: 0.2rem;
      position: relative;
      height: 3.8rem;
      img {
        
        width: 100%;
        height: 2.4rem;
        border-radius: 0.2rem;
        //   position: absolute;
      }
      .playCount {
        position: absolute;
        z-index: 100;
        right: 0.3rem;
        color: white;
        margin-top: 0.06rem;
        .icon {
          width: 0.3rem;
          height: 0.3rem;
        }
      }
      .name {
        //   position: absolute;
        // width:2.6rem;
        bottom: 0px;
        
      }
    }
  }
}
</style>