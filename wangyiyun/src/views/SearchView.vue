<template>
  <div class="searchTop">
    <svg class="icon" aria-hidden="true" @click="this.$router.push('/')">
        <use xlink:href="#icon-xitongfanhui"></use>
    </svg>
    <!-- keydown事件表示按下enter键触发 -->
    <!-- 通过双向绑定实现输入与数据的响应式 -->
    <input type="text" placeholder="blackpink" @keydown.enter="enterKey" v-model="searchKey">
  </div>
  <div class="searchHistory">
    <span class="searchSpan">历史</span>
    <span v-for="keyword in keyWordList" :key="keyword" class="span" @click="searchHistory(keyword)">
    {{keyword}}
    </span>
    <svg class="icon" aria-hidden="true" @click="deleteHistory">
        <use xlink:href="#icon-shanchu1"></use>
    </svg>
  </div>
  <div class="itemList">
      <div class="item" v-for="(item, i) in searchList" :key="i">
      <!-- 点击左侧进行播放 -->
        <div class="itemLeft" @click="updateIndex(item,i)">
          <span class="leftSpan">{{ i + 1 }}</span>
          <div>
            <p>{{ item.name }}</p>
            <!-- 循环作者信息 -->
            <span v-for="(item1, index) in item.ar" :key="index">{{
              item1.name
            }}</span>
          </div>
        </div>
        <div class="itemRight">
          <svg class="icon bofang" aria-hidden="true" v-if='item.mv !=0'>
            <use xlink:href="#icon-bofangMV"></use>
          </svg>
          <svg class="icon liebiao" aria-hidden="true">
            <use xlink:href="#icon-caidan1"></use>
          </svg>
        </div>
      </div>
    </div>
</template>
<script>
import { getSearchMusic } from "@/request/api/home.js"
import { mapMutations, mapState } from 'vuex';

export default{
  data(){
    return {
      keyWordList:[],
      // 输入内容双向绑定
      searchKey:"",
      searchList:[]
    }
  },
  // 渲染时判断localStorage中是否存在已有数据
  mounted(){
    this.keyWordList =JSON.parse(localStorage.getItem("keyWordList")) ? JSON.parse(localStorage.getItem("keyWordList")):[]
  },
  computed:{
    ...mapState(["playlist"])
  },
  methods:{
    ...mapMutations(["pushPlaylist","updatePlaylistIndex"]),
    enterKey:async function(){
      // 如果输入不为空或空格
      if(this.searchKey.trim() !=""){
        // 将搜索内容添加至数组
        this.keyWordList.unshift(this.searchKey.trim())

        // 去重
        // new Set(this.keyWordList)生成一个不包含重复元素的对象
        // ...new Set(this.keyWordList) 变成一个参数序列
        this.keyWordList = [...new Set(this.keyWordList)]

        // 固定长度
        if(this.keyWordList.length>10){
          // 删除最后一个元素
          this.keyWorldList.splice(this.keyWorldList.length - 1, 1);
        }
        // 将搜素数据保存到localStorage，使得刷新数据不丢失
        localStorage.setItem("keyWordList",JSON.stringify(this.keyWordList))
        // 进行搜索
        let res= await getSearchMusic(this.searchKey)
        this.searchList = res.data.result.songs
        console.log(this.searchList);
        // 将搜索内容清空
        this.searchKey=""

      }
    },
    deleteHistory:function(){
      // 清除keyWordList
      localStorage.removeItem("keyWordList")
      this.keyWordList = []
    },
    searchHistory:async function(keyword){
        let res= await getSearchMusic(keyword)
        this.searchList = res.data.result.songs
        console.log(this.searchList);

    },
    updateIndex:function(item){
      this.pushPlaylist(item)
      this.updatePlaylistIndex(this.playlist.length-1)

    }
  }
}
</script>
<style lang="less" scoped>
.searchTop{
  width: 100%;
  height: 1rem;
  padding: 0 0.4rem;
  display: flex;
  align-items: center;
  input{
    margin-left: .4rem;
    // 去掉边框
    border:none;
    // 底部边框
    border-bottom: 1px solid #999;
    width: 90%;
    padding:.1rem
  }
}
.searchHistory{
  width:100%;
  padding:.2rem;
  position: relative;
  .searchSpan{
    font-size: .33rem;
    font-weight: 700;
    margin:0 .2rem;
  }
  .span{
    // 内部撑开(上，左)
    padding:0.1rem .2rem;
    background-color: rgb(220, 211, 211);
    border-radius: .4rem;
    margin: .1rem .2rem;
    // 设置行内块
    display: inline-block;
  }
  .icon{
    width:.5rem;
    height: .5rem;
    // 位置靠右
    position:absolute;
    right: .2rem;
  }
}
.itemList {
    width: 100%;
    padding: 0.2rem;;
    .item {
      width: 100%;
      height: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .itemLeft {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        .leftSpan {
          display: inline-block;
          width: 0.2rem;
          text-align: center;
        }
        div {
          p {
            // 限制宽度
            width: 4.54rem;
            height: .4rem;
            // 内容超出宽度时隐藏超出部分的内容
            overflow: hidden;
            // ellipsis:当对象内文本一处时显示省略标记(...)
            text-overflow: ellipsis;
            // 规定段落中的文本不进行换行
            white-space: nowrap;
            font-weight: 700;
          }
          span{
            font-weight: 400;
            font-size: .24rem;
            color: #999;
          }
          margin-left: 0.3rem;
        }
      }
      .itemRight{
        width: 20%;
        height: 100%;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        position: relative;
        .icon{
          fill: #999;
        }
         .bofang{
            position: absolute;
            left: 0;
          }
         .liebiao{
            position: absolute;
            right: 0;
          }
      }
    }
  }
</style>