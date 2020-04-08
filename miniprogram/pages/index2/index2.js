// miniprogram/pages/index2/index2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.login({
      success(res) {
        if (res.code) {
          //发起网络请求
          // console.log(res.code)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let db = wx.cloud.database();
    // db.collection("staff_info").get().then(res=>console.log(res));
    // wx.chooseImage({//选择本地图片
    //   success(res) {
    //     const tempFilePaths = res.tempFilePaths;
    //     wx.cloud.uploadFile({//上传到云存储
    //       cloudPath:"123.png",
    //       filePath: tempFilePaths[0],
    //       success(res) {
    //         wx.cloud.callFunction({//传输给云函数,在云函数使用
    //           name:"getid",
    //           data:{
    //             file: res.fileID
    //           }
    //         }).then(e=>console.log(e))

    //         //do something
    //       }
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  jump: function () {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        // app.globalData.openid = res.result.openid
        // wx.navigateTo({
        //   url: '../userConsole/userConsole',
        // })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },
  getPhoneNumber(e) {//手机号登录:调用手机号与数据库中进行对比
  console.log(e)
    wx.cloud.callFunction({
      name: 'getphone',
      data: {
        action: 'getcellphone',
        id: e.detail.cloudID
      },
      success: res => {
        console.log(res)
      }
    })
  }
})