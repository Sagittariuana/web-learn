<template>
  <div class="footerMusic">
    <div class="footerLeft" @click="updateDetailShow">
      <img :src="playlist[playlistIndex].al.picUrl" alt="">
      <div class="message">
        <Vue3Marquee>{{playlist[playlistIndex].name}}</Vue3Marquee>
        <span>横滑可以切换上下首</span>
      </div>
    </div>
    <div class="footerRight">
      <!-- 播放暂停的布尔值应该是个全局变量，才可保证在进入播放详情页时播放标识不变 -->
        <svg class="icon bofang" aria-hidden="true" @click="play" v-if="isbtnShow">
          <use xlink:href="#icon-bofang1" ></use>
        </svg>
      <svg class="icon bofang" aria-hidden="true" @click="play" v-else >
        <use xlink:href="#icon-bofangzhong" ></use>
      </svg>
      <svg class="icon bofang" aria-hidden="true" >
        <use xlink:href="#icon-bofangduilie"></use>
      </svg>
    </div>
    <!-- 通过设置ref属性获得audio标签实例 -->
    <!-- controls属性控制标签的显示 -->
    <!-- <audio src="" controls></audio> -->
    <audio :src="`https://music.163.com/song/media/outer/url?id=${playlist[playlistIndex].id}.mp3`" ref="audio"> </audio>
    <!-- 歌词详情页 -->
    <van-popup v-model:show="detailShow" position="right" :style="{ height: '100%',width:'100%' }" >
      <MusicDetail 
      :musiclist="playlist[playlistIndex]" 
      :play="play" 
      :isbtnShow="isbtnShow"
      :addDuration="addDuration"></MusicDetail>
    </van-popup>

  </div>
  
</template>
<script>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
// 通过辅助函数生成计算属性
import { mapMutations, mapState } from 'vuex';
import MusicDetail from './MusicDetail.vue';
import {getMusicLyric} from '@/request/api/item'

export default {
    data(){
      return {
        interVal:0
      }
    },
    computed: {
        // 通过扩展字符串将其与局部计算属性混合
        ...mapState(["playlist", "playlistIndex", "isbtnShow", "detailShow"])
    },
    methods: {
        ...mapMutations(["updateIsbtnShow", "updateDetailShow","updateCurrentTime","updateDuration","updateLyricList"]),
        play: function () {
            // 判断音乐是否播放
            if (this.$refs.audio.paused) {
                // 播放
                this.$refs.audio.play();
                this.updateIsbtnShow(false);
                // 播放就更新数据
                this.updateTime()
            }
            else {
                // 暂停
                this.$refs.audio.pause();
                this.updateIsbtnShow(true);
                // 清除定时器
                clearInterval(this.interVal)
            }
        },
        // 添加总时长
        addDuration:function(){
          this.updateDuration(this.$refs.audio.duration)
        },
        // 在播放的时候才需要触发更新时间
        updateTime:function(){
          // 定义一个定时器，定时触发更新store.currentTime
          this.interVal= setInterval(() =>{
            this.updateCurrentTime(this.$refs.audio.currentTime)
          },500)
        },
        getLyric:async function(){
          let res = await getMusicLyric(this.playlist[this.playlistIndex].id)
          this.updateLyricList(res)
          console.log(res)
        }
    },
    watch: {
        playlistIndex: function () {
            // 如果发生改变就播放音乐
            this.$refs.audio.autoplay = true;
            // 图标更改
            if (this.$refs.audio.paused) {
                // 本来是暂停状态，改变图标
                this.updateIsbtnShow(false);
            }
        },
        playlist: function () {
            if (this.isbtnShow) {
                this.$refs.audio.autoplay = true;
                this.updateIsbtnShow(false);
            }
        }
    },
    mounted() {
        console.log(this.$refs);
        // 在首次渲染时也要获取默认歌曲的歌词
      // this.$store.dispatch("getLyric",this.playlist[this.playlistIndex].id)
      
      this.getLyric()
    
      // 首次渲染时就要更新当前时间
      this.updateTime()
      this.addDuration()
      
    },
    updated(){
      // 获取当前底部组件歌曲的歌词
      this.$store.dispatch("getLyric",this.playlist[this.playlistIndex].id)
      // 获取当前底部组件歌曲的时长
      this.addDuration()
    },
    components: { MusicDetail, Vue3Marquee }
}
</script>
<style lang="less" scoped>
.footerMusic{
  width:100%;
  height:1.4rem;
  padding:.2rem;
  background-color: #fff;
  position: fixed;
  // 顶部边框
  border-top: .02rem solid #999;
  display: flex;
  justify-content: space-between;
  padding: .2rem;
  bottom:0;
  .footerLeft{
    width:60%;
    height:100%;
    display:flex;
    justify-content: space-around;
    align-items: center;
    img{
      width: 1rem;
      height:1rem;
      border-radius: 50%;
    } 
    .message{
      padding:.1rem;
      span{
        font-size: .2rem;
      } 
    }
    
  }
  .footerRight {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
}
</style>