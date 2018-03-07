// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */

  data: {
    metto:"原来的样子",
    imgUrls:[
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    x:0,
    y:0,
    loading:true,
    button_type:'warn',
    button_text:'加载中...',
    disabled:true,
    checkbox_group_data:[
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    checkbox_arr:'',
    focus: false,
    inputValue: ''
  },
  tap:function(){
    this.setData({
      x:30,
      y:30
    });
  },
  changeIndicatorDots:function(e){
    this.setData({
      indicatorDots:!this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    console.log(e)
    this.setData({
      interval: e.detail.value
    });
  },
  durationChange: function (e) {
    console.log(e)
    this.setData({
      duration: e.detail.value
    })
  },
  //button 按钮
  changeLoading:function(){
    if(this.data.button_type === 'warn'){
      this.setData({
        button_type: 'primary',
        button_text: '成功'
      })
    }else{
      this.setData({
        button_type:'warn',
        button_text:'加载中...'
      })
    }
    this.setData({
      loading:!this.data.loading,
      disabled:!this.data.disabled
    })
  },
  //checkbox-group 单选框
  checkboxChange:function(e){
    this.setData({
      checkbox_arr:e.detail.value
    })
  },
  //from 表单
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  //input 输入框
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function (e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    if (pos != -1) {
      //光标在中间
      var left = e.detail.value.slice(0, pos)
      //计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    //直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    //或者直接返回字符串,光标在最后边
    //return value.replace(/11/g,'2'),
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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