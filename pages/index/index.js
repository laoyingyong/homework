Page({
    data: {
        indicatorDots: true,
        autoplay: true,
        circular: true,
        interval: 2000,
        duration: 400,
        vertical: true,
        previousMargin: 0,
        nextMargin: 0,
        // displayMultipleItems:1,
        easingFunction: "linear",
        currentItemId: 'swiper1',
        bannerList: [],
        title: "Jump小程序开发框架",
        isChangeTitle: false,
        inputwrapper: ""
    },
    //事件处理函数
    changeTitle: function() {
        if (!this.data.isChangeTitle) {
            this.setData({
                isChangeTitle: true,
                title: "很好用的小程序框架"
            })
        } else {
            this.setData({
                isChangeTitle: false,
                title: "Jump小程序开发框架"
            })
        }
    },
    jige: function(inputwrapper) {
        if (this.setData.inputwrapper(inputwrapper) < 60) {
            this.setData({
                title: "不及格"
            })
        } else {
            this.setData({
                title: "及格"
            })
        }
    },

    openweb: function() {
        wx.navigateTo({
            url: '/pages/openweb/openweb/openweb',
        })
    },
    onLoad(opt) {
        this.setData({
            bannerList: [{
                    url: '../../assets/swiper/swiper_1.jpeg',
                    id: '1'
                },
                {
                    url: '../../assets/swiper/swiper_1.png',
                    id: '2'
                },
                {
                    url: '../../assets/swiper/swiper_1.jpeg',
                    id: '3'
                }
            ]
        })
    },
    clickTestP(e) {
        console.log(e, 'parent')
    },
    clickTest(e) {
        console.log('clickTest', e)
    },
    onSwiperChange(e) {
        console.log('onSwiperChange', e)
    },
    onAnimationfinish(e) {
        console.log('onAnimationfinish', e)
    },
    transition(e) {
        console.log('transition', e)
    }
})