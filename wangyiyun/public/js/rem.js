// rem根据html的fontsize设置
function remSize (){
  // 获取设备宽度
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth
  // 设计稿一般以iPhone 750px计算
  if(deviceWidth>=750){
    deviceWidth = 750
  }
  if(deviceWidth<=320){
    deviceWidth = 320
  }
  // 设计rem
  // 750px 1 rem =100px
  // 375px 1 rem = 50px
  document.documentElement.style.fontSize = (deviceWidth/7.5)+'px'
  // 设置字体大小
  document.querySelector('body').style.fontSize = 0.3+'rem' //默认15px
}

// 使用window.onresize事件
// 窗口发生大小改变时调整布局适应窗口
// 调用remSize函数
window.onresize = function(){
  remSize()
}