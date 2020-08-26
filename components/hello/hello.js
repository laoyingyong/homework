const app = getApp()
Component({
  data: {
    globalInfo: "",
  },
  method: {

  },
  lifetimes: {
    attached: function () {
      this.setData({
        globalInfo: app.globalData.info
      })
    },
  },
})
