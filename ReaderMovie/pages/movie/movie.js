Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList:[],
    hotNumber: '',
    systemInfo: '',
    networkType: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  scanCode:function(){
    wx.scanCode({
      success:res => {
        console.log(res);
      }
    });
  },
  demo:function(){
    // wx.showToast({
    //   title: '提交信息成功',
    //   icon:'success',
    //   duration:1000,
    //   mask:true
    // });
    // wx.showLoading({
    //   title: '提交信息中...',
    // });
    // wx.showModal({
    //   title: '确认支付',
    //   content: '付款100元',
    //   success:function(res){
    //     if(res.confirm){
    //       wx.showToast({
    //         title: '点击了确认',
    //       })
    //     }else if(res.cancel){
    //       wx.showToast({
    //         title: '点击了取消',
    //       })
    //     }
    //   }
    // })
    // wx.showActionSheet({
    //   itemList: ['美国', '英国', '澳大利亚'],
    //   success: function (res) {
    //     console.log(res.tapIndex)
    //   },
    //   fail: function (res) {
    //     console.log(res.errMsg)
    //   }
    // })
    const that = this;
    wx.vibrateShort({
      
    });
    wx.getNetworkType({
      success: function(res) {
        var networkType = res.networkType;
        that.setData({
          networkType:networkType
        });
      },
    });
  },
  onLoad: function (options) {
    const that = this;
    wx.request({
      url: 'https://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=1000',
      success:function(res){
        var datas = res.data.data.movies;
        let len = datas.length + 1;
        that.setData({
          movieList: datas,
          hotNumber:len
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.startPullDownRefresh();
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        var systemInfo = {
          brand:res.brand,
          model:res.model,
          version:res.version,
          system: res.system,
          platform: res.platform
        };
        that.setData({
          systemInfo: systemInfo
        });
      },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
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
    
  }
})