<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>

  </div>
</template>
<script>
import axios from 'axios'
// 注意在引入函数的时候要用对象的形式
import {getBanner} from '@/request/api/home'
import { reactive, onMounted } from 'vue'
export default {
  setup() {
    // 定义一个响应式的对象
    const state = reactive({
      images :
        [
          'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
          'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
        ]
    })
    onMounted(async ()=>{
      // axios.get('http://localhost:3000/banner?type=2')
      // .then((res) => {
      //   console.log(res);
      //   state.images = res.data.banners
      //   console.log(state.images)
      // })
      let res = await getBanner()
      console.log(res);
      state.images = res.data.banners
    })
    return { state };
  },
};

</script>
<!-- 如果颜色有冲突，将scoped删掉 -->
<style lang="less">
 #swiperTop{
  .van-swipe{
  width: 100%;
  height: 3rem;
  .van-swipe__track{
    .van-swipe-item{
      padding: .2rem;
      img{
        width: 100%;
        height: 100%;
        // 圆角
        border-radius: 0.2rem;
      }
    }
  }
  .van-swipe__indicator--active{
    background-color: rgb(219,130,130);
  }
 }
 }
</style>