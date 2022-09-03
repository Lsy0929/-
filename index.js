var common = require('../../utils/common.js') //引用公共JS文件

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImg: [
      {src: '/image/banner4.jpg'},
      {src: '/image/banner2.jpg'},
      {src: '/image/banner1.jpg'},
      {src: '/image/banner6.jpg'}
    ],
    musicList:[{
    }],
    id:null,
  },
  //开始播放
  audioPlay:function(e) {
    let id = e.currentTarget.dataset.id;
    this.audioCtx = wx.createInnerAudioContext(id,this);
    var srcurl=this.data.musicList[id].src; 
    console.log(srcurl);
      //设置src
    this.audioCtx.src=srcurl;
    this.audioCtx.play();   
   /*this.data.musicList[id].isPlay=true*/
    /*this.setData({
      musicList[id].isPlay:true
    })*/
    var index="musicList["+id+"].isPlay";
    this.setData({
      [index]:true
    })
    this.setData({
      id:id
    })
    this.audioCtx.onEnded((res)=>{
      this.audioCtx.play();
    })
  },
  // 停止播放
  audioPause () {
    this.audioCtx.pause()
    var index="musicList["+this.data.id+"].isPlay";
    this.setData({
      [index]:false
    })
  },


  //页面关闭时，停止播放
  onHide(){
    this.audioCtx.pause()
  },
  onUnload(){
    this.audioCtx.pause()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list=common.getMusicList();
    this.setData({
      musicList:list
    })
    console.log(this.data.musicList);
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