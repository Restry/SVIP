const { User, Query, Cloud } = require('../../utils/av-weapp-min');
const Order = require('../../model/order');

Page({
  data: {
    msg: '',
    error: null,
  },
  onLoad() {
    Cloud.run('hello', { name: 'mike' }).then((data) => {
      wx.showToast({
        title: data,
        icon: 'success',
        duration: 1500,
      });
      this.setData({ msg: data });

    }).catch(error => {
      console.log(error);
      this.setData({ error: error.message });
      wx.hideToast();
    })
  },
  donate() {
    this.onLoad();
  }
});
