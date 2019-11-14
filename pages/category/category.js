import { myRequest } from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeIndex: 0,
    cateData: [],
    rightDate: [],
    rightTop: 0
  },

  changeTab(e) {
    const index = e.currentTarget.dataset.index
    this.setData({
      activeIndex: index,
      rightDate: this.data.cateData[index].children,
      rightTop: 0
    })
  },

// 获取分类数据功能封装抽离
  getCatData() {
    myRequest({
      url:'categories'
    }).then(res => {
      this.setData({
        cateData: res.data.message,
        rightDate:res.data.message[this.data.activeIndex].children
      })
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   this.getCatData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    // 先清空了全部
    this.setData({
      activeIndex: 0,
      rightTop: 0,
      cateData: [],
      rightDate: []
    });
    // 在页面下拉刷新的时候获取数据
    this.getCatData(); 
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})