App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
   console.log("小程序初始化完成onLaunch")
   wx.request({
     url: '',
   })
      //获取用户信息
      //异步调用
      wx.getUserInfo({
        //数据拿到之后进行回调的
        success: res =>{
          console.log(res)
        }
      })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * 小程序界面显示出来之后执行的生命周期函数
   */
  onShow: function (options) {
    console.log("界面显示出来onShow")
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide 后台会保存两小时
   * 界面被隐藏时执行
   */
  onHide: function () {
    console.log("界面被隐藏时执行onHide")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("小程序发生错误" + msg)
  }
})
