var value = 0

Page({
  data: {
    progressValue: 40
  },

  progressTap: function() {
    console.log(this.data.progressValue)
    /*通过setData来修改视图的值*/
    this.setData({
      progressValue: 0
    })
  }

})
