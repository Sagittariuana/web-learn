import service from "..";
// 获取轮播图
export function getBanner(){
  return service({
    method:"GET",
    // type2表示iPhone用户，实际操作时可将2作为参数
    url:"/banner?type=2"
  })

}

// 获取发现好歌单
export function getMusicList(){
  return service({
    method:"GET",
    // 返回10条歌单
    url:"/personalized?limit=10"
  })
}

// 获取搜索结果
export function getSearchMusic(data){
  return service({
    method:"GET",
    url:`/cloudsearch?keywords=${data}`
  })
}