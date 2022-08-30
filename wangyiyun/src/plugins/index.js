import { Button ,Swipe, SwipeItem, Popup } from 'vant';
// 将插件放入数组中
let plugins = [
  Button ,Swipe, SwipeItem,Popup
]
// 使用函数传参的形式调用app
export default function getVant(app){
  plugins.forEach((plugin) =>{
    return app.use(plugin)
  }
  )
}

