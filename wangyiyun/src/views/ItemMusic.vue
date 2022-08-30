<template>
  <div>
    <ItemMusicTop :playlist="state.playlist"/>
    <ItemMusicList 
    :itemList = "state.itemList" 
    :subscribedCount="state.playlist.subscribedCount"/>
  </div>
</template>
<script>
import { onMounted, reactive } from '@vue/runtime-core';
import {getMusicItemList,getItemList} from '@/request/api/item'

// 获取路由参数
import { useRoute } from 'vue-router';
import ItemMusicTop from '../components/item/ItemMusicTop.vue';
import ItemMusicList from '@/components/item/ItemMusicList.vue';
export default{
  name:'ItemMusic',
  components:{
    ItemMusicTop,
    ItemMusicList
},
  setup(){
    const state = reactive({
      playlist:{},//歌单详情页数据
      itemList:[]//歌单歌曲
    })
    onMounted(async ()=>{
      let id = useRoute().query.id
      // console.log(id);
      // 获取歌单详情
      let res = await getMusicItemList(id)
      // console.log(res);
      state.playlist = res.data.playlist
      // 获取歌单歌曲列表
      let result = await getItemList(id)
      // console.log(result);
      state.itemList = result.data.songs
      console.log(state.itemList);
      // 防止页面刷新造成数据丢失
      // 保存到sessionStorage或LocalStorage
      sessionStorage.setItem('itemDetail', JSON.stringify(state))
    })
    return {
      state
    }
  }
}
</script>