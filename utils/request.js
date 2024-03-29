const baseURL = 'https://api.zbztb.cn/api/public/v1/';

export const myRequest =
 (obj) => {
  wx.showLoading({
    title: '疯狂加载中...',
  })
  return new Promise((resolve, reject)=> {
 // 发起请求
 wx.request({
   ...obj,
   url: baseURL + obj.url,
   // 请求成功的回调函数
   success: res => {
     resolve(res);
   },
    // 请求失败的回调函数
   fail: err => {
     reject(err)
   },
   // 请求结束的回调函数，不管成功还是失败都执行
   complete: res => {
     // 不管成功还是失败都执行隐藏提示框
     wx.hideLoading();
     // 在手机里面，还有主动调用隐藏加载的API
     wx.stopPullDownRefresh();
   }
 })
  })
}