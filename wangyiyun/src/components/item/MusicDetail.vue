<template>
    <img :src="musiclist.al.picUrl" alt="" class="bgimg">
    <!-- 详情页头部 -->
    <div class="detailTop">
      <div class="detialTopLeft">
        <svg class="icon bofang" aria-hidden="true" @click="backhome">
          <use xlink:href="#icon-xitongfanhui"></use>
        </svg>
        <!-- 歌曲信息 -->
        <div class="leftMarquee">
          <Vue3Marquee style="color:white;width:2.5rem">  
            {{musiclist.name}}
          </Vue3Marquee>
          <span v-for="item in musiclist.ar" :key="item">
            {{item.name}}
          </span>
          <svg class="icon" aria-hidden="true" >
            <use xlink:href="#icon-jiantou"></use>
          </svg>
        </div>
      </div>
      <div class="detialTopRight">
        <svg class="icon bofang" aria-hidden="true" >
            <use xlink:href="#icon-fenxiang1"></use>
          </svg>
      </div>
    </div>
    <div class="detailContent" v-show="!isLyricShow">
      <!-- 判断isbtnShow -->
      <img src="@/assets/needle-ab.png" alt="" :class="isbtnShow?'img_needle':'img_needle_active'">
      <img src="@/assets/cd.png" alt="" class="img_cd" >
      <img :src="musiclist.al.picUrl" alt="" class="img_ar" :class="isbtnShow?'img_ar_paused':'img_ar_active'" @click="isLyricShow=true">
    </div>
    <!-- 通过添加ref属性获取标签实例 -->
    <div class="musicLyric" ref="musicLyric" v-show="isLyricShow" @click = "isLyricShow=false">
      <p v-for="item in lyric" :key="item" 
      :class="{
        active:currentTime * 1000 >= item.time && currentTime * 1000 < item.next
      }" >     
      {{item.lrc}}
      </p>  
    </div>
    <div class="detailFooter">
      <div class="footerTop">
        <svg class="icon bofang" aria-hidden="true" >
          <use xlink:href="#icon-shoucang"></use>
        </svg>
        <svg class="icon bofang" aria-hidden="true" >
          <use xlink:href="#icon-xiazai"></use>
        </svg>
        <svg class="icon bofang" aria-hidden="true" >
          <use xlink:href="#icon-diantai"></use>
        </svg>
        <svg class="icon bofang" aria-hidden="true" >
          <use xlink:href="#icon-pinglun"></use>
        </svg>
        <svg class="icon bofang" aria-hidden="true" >
          <use xlink:href="#icon-gengduo"></use>
        </svg>
      </div>
      <div class="footerContent">
        <input type="range" name="" class="range" min="0" :max="duration" v-model="currentTime" step="0.05">
      </div>
      <div class="footer">
        <svg class="icon " aria-hidden="true" >
          <use xlink:href="#icon-liebiaoxunhuan"></use>
        </svg>
        <svg class="icon " aria-hidden="true" @click="goPlay(-1)">
          <use xlink:href="#icon-shangyishou"></use>
        </svg>
        <svg class="icon bofang" aria-hidden="true" @click="play" v-if="isbtnShow">
          <use xlink:href="#icon-bofang2"></use>
        </svg>
        <svg class="icon bofang" aria-hidden="true" @click="play" v-else>
          <use xlink:href="#icon-zanting2"></use>
        </svg>
        <svg class="icon " aria-hidden="true" @click="goPlay(1)">
          <use xlink:href="#icon-xiayishou"></use>
        </svg>
        <svg class="icon " aria-hidden="true" >
          <use xlink:href="#icon-bofangduilie"></use>
        </svg>
      </div>
    </div>
</template>
<script>
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import { mapMutations, mapState } from 'vuex';
export default {
  data(){
    return {
      isLyricShow:false
    }
  },
  props:["musiclist","play","isbtnShow","addDuration"],
  components:{
    Vue3Marquee
  },
  computed:{
    ...mapState(["lyricList","currentTime","playlistIndex","playlist","duration"]),
    lyric:function(){
      let arr 
      // 为防止在还未获取歌词的时候渲染报错
      // 首先进行一个判断
      if(this.lyricList.lyric){
        arr = this.lyricList.lyric.split(/[(\r\n)\r\n]+/);
        // arr.forEach((item,index)=>{
        //   if(!item){
        //     arr.splice(index,1) //删除空项
        //   }
        // })
        arr = arr.map((item,i)=>{
          // 时间部分
          let min = item.slice(1,3) //分钟，slice包头不包尾
          let sec = item.slice(4,6) // 秒数
          let mill = item.slice(7,10) // 毫秒
          let lrc = item.slice(11,item.length)
          // 将时间转换为毫秒
          let time = parseInt(min)*60*1000+parseInt(sec)*1000+parseInt(mill)
          // 判断最后切割的毫秒数为数字
          if(isNaN(Number(mill))){
            mill = item.slice(7,9)
            lrc = item.slice(10,item.length)
            time = parseInt(min)*60*1000+parseInt(sec)*1000+parseInt(mill)
          }
          //  console.log(min,sec,mill,lrc,time);
          return {min,sec,mill,lrc,time}
        });
        // 给元素添加下一句歌词起始数据
        arr.forEach((item,i) =>{
          if(i==arr.length-1||isNaN(arr[i + 1].time)){
            item.next = 1000000
          }else{
            item.next = arr[i+1].time
          }
        })
      }
      // console.log(arr);
      return arr
    }
  },
  methods:{
    ...mapMutations(["updateDetailShow","updatePlaylistIndex"]),
    backhome:function(){
      if(this.isLyricShow){
        this.isLyricShow=false
      }else{
        this.updateDetailShow()

      }
    },
    goPlay:function(num){
      let val = this.playlistIndex+num
      if(val<0){
        val = this.playlist.length -1
        
      }else if(val>=this.playlist.length){
        val = 0
      }
      this.updatePlaylistIndex(val)
    }
  },
  watch:{
    currentTime:function(newValue){
      // 获取有颜色的p标签
      let p = document.querySelector("p.active")
      // [p]才可拿到其中引用信息
      // console.log([p]);
      // 判断p.offsetTop
      if(p){
         if(p.offsetTop>270){
        // 控制歌词在距离顶部300px的位置
        this.$refs.musicLyric.scrollTop = p.offsetTop-270
        }
      }
      // 当前值为歌曲时长时
      if(newValue==this.duration){
        // 判断是否为列表最后一首
        if(this.playlistIndex === this.playlist.length-1){
          // 回到列表第一首歌
          this.updatePlaylistIndex(0)
          // 默认列表只有一首歌，因此播放完一曲后index未发生改变，不能继续播放
          // 因此需要函数中执行音乐播放
          this.play()

        }else{
          this.updatePlaylistIndex(this.playlistIndex+1)
        }
      }
     
        // console.log([this.$refs.musicLyric]);
    }
  },
  mounted(){
    // console.log(this.musiclist);
    // console.log(this.lyricList.lyric);
    // 组件挂载时就获取歌曲时长
    this.addDuration()
  }
}
</script>
<style lang="less" scoped>
.bgimg{
  width:100%;
  height:100%;
  // 脱离文档流
  position:absolute;
  // 不影响后续显示
  z-index:-1;
  // 高斯模糊
  filter: blur(80px);
}
.detailTop{
  width: 100%;
  height: 1rem;
  display: flex;
  padding:0.2rem;
  justify-content: space-between;
  align-items: center;
  .icon{
    fill: #fff;
  }
  .detialTopLeft{
    display: flex;
    align-items: center;
    .leftMarquee{
      width:4rem;
      height: 100%;
      margin-left: .4rem;
      span{
        color:#999;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .icon{
        width: 0.3rem;
        height: 0.3rem;
        fill:#999;
      }
    }
  }
}
.detailContent{
  width: 100%;
  height: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .img_needle{
    width: 2rem;
    height:3rem;
    position:absolute;
    left:46%;
    // 变化原点
    transform-origin: 0 0;
    // 旋转
    transform: rotate(-13deg);
    transition: all 2s;
  }
   .img_needle_active{
    width: 2rem;
    height:3rem;
    position:absolute;
    left:46%;
    // 变化原点
    transform-origin: 0 0;
    // 旋转
    transform: rotate(-0deg);
    transition: all 2s;
  }
  .img_cd {
    width: 5rem;
    height: 5rem;
    position: absolute;
    bottom: 2.3rem;
    z-index: -1;
  }
  .img_ar {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    position: absolute;
    bottom: 3.14rem;
    // 动画：名字 时间 匀速 无限循环
    animation:rotate_ar 10s linear infinite
  }
  .img_ar_active{
    animation-play-state: running;
  }
  .img_ar_paused {
    animation-play-state: paused;
  }
  @keyframes rotate_ar{
    0%{
      transform: rotateZ(0deg);
    }
    100%{
      transform: rotateZ(360deg);
    }
  }
}
.musicLyric{
  width: 100%;
  padding:.2rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: .2rem;
    // 溢出滚动
    overflow:scroll;
  p{
    color:rgb(190,181,181);
    margin-bottom: .2rem;
    text-align: center;
    font-size: medium;
    font-family: "微软雅黑";

  }
  .active{
    color:#fff;
    font-size: 0.4rem;
  }
}
.detailFooter {
  width: 100%;
  height: 3rem;
  position: absolute;
  bottom: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .footerTop {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
      width: 0.36rem;
      height: 0.36rem;
      fill: rgb(245, 234, 234);
    }
    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
  .footerContent{
    .range{
      width: 100%;
      height: 0.06rem;
    }
  }

  .footer {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
      width: .7rem;
      height: .7rem;
      fill: rgb(245, 234, 234);
    }
    .bofang {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>