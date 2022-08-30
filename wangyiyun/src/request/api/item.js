import service from "..";
// 获取歌单详情页数据
export function getMusicItemList(id){
  return service({
    method:"GET",
    url:`/playlist/detail?id=${id}`
  })
}

// 获取歌单所有歌曲
export function getItemList(id){
  return service({
    method:"GET",
    url:`/playlist/track/all?id=${id}`
  })
}

// 获取歌词数据
export function getMusicLyric(id){
  return service({
    method:"GET",
    url:`/lyric?id=${id}`
  })
}