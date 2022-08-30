import { createStore } from 'vuex'
import {getMusicLyric} from '@/request/api/item'
export default createStore({
  state: {
    // 播放列表,相当于歌单列表itemList
    // 默认显示
    playlist:[{
      al:{
        id: 148876634, 
        name: "Bedtime Story",
        pic: 109951167727939420,
        picUrl: "https://p2.music.126.net/TvyXSblPvq9EjQJIAfllNg==/109951167727939422.jpg",
        pic_str: "109951167727939422",
      },
      ar:[{
        name:"欧阳娜娜"
      }],
      // 注意使用歌曲时的id在外层，不是al的内部id
      id:1968025244,
      name:"Bedtime Story",

    }],
    // 设置默认播放列表下标值，便于查找
    playlistIndex:0,
    // 暂停按钮的显示
    isbtnShow:true,
    // 详情页的显示
    detailShow:false,
    // 歌词
    lyricList:{},
    // 当前时间
    currentTime:0,
    // 歌曲时长
    duration:0,
  },
  getters: {
  },
  mutations: {
    // 通过调用该方法改变按钮显示
    updateIsbtnShow: function (state, value) {
      state.isbtnShow = value
    },
    // 点击新歌单的歌曲更新播放列表
    updatePlaylist:function (state, value) {
      state.playlist = value
    },
    // 点击歌曲进行播放
    updatePlaylistIndex:function (state, value) {
      state.playlistIndex = value
    },
    // 点击返回歌单详情页
    updateDetailShow:function (state){
      state.detailShow = !state.detailShow
    },
    // 更新歌词数据
    updateLyricList:function (state,value) {
      state.lyricList = value
    },
    // 更新当前时间
    updateCurrentTime:function (state,value) {
      state.currentTime = value
    },
    // 更新歌曲时长
    updateDuration:function(state,value){
      state.duration=value
    },
    // 点击时添加歌曲至播放列表
    pushPlaylist:function(state,value){
      state.playlist.push(value)
    }
  },
  actions: {
    getLyric:async function(context,value){
      let res = await getMusicLyric(value)
      console.log(res)
      // 将获取的数据提交，实现vuex中的数据更新
      context.commit("updateLyricList",res.data.lrc)
    }
  },
  modules: {
  }
})
