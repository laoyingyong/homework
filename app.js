//app.js
App({
  onLaunch(options) {
    //监听小程序初始化，只调用一次
  },
  onShow(options) {
    //监听小程序切换
  },
  onHide() {
  },
  onError(msg) {
    console.log(msg)
  },
  globalData: {
    info:"Hello World"
  }
})