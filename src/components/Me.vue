<template>
    <div class="me" @scroll="showhead">
        <div class="me-show" v-show="scoshow">
            <p class="me-show-p">
                <img src="../assets/Homeimg/me-head-img1.png" alt="">
            </p>
            <div class="me-show-title" @click="goregister" v-if="denglu">登录/注册</div>
            <div class="me-show-title" v-else>123456</div>
            <div class="me-head-box-img">
                <img src="../assets/Homeimg/me-icon1.png" alt="">
                <img src="../assets/Homeimg/me-icon2.png" alt="">
            </div>
        </div>
        <div class="me-head-box">
            <div class="me-head-box1">
                <p class="me-heda-img">
                    <img src="../assets/Homeimg/me-head-img1.png" alt="">
                </p>
                <div class="me-head-title" @click="goregister" v-if="denglu">登录/注册</div>
                <div class="me-head-title" v-else>123456</div>
                <p class="me-head-title-content">
                    <img src="../assets/Homeimg/me-title-img.png" alt="">
                    <span class="title">签到领积分</span>
                </p>
                <div class="me-head-box1-img">
                    <img src="../assets/Homeimg/me-icon1.png" alt="">
                    <img src="../assets/Homeimg/me-icon2.png" alt="">
                </div>
            </div>
        </div>
        <div class="me-content">
            <div class="me-content-box">
                <div class="me-content-box1">
                    <p>{{jifen}}</p>
                    <span class="me-content-paoce">积分</span>
                    <span class="wire">|</span>
                </div>
                <div class="me-content-box1">
                    <p>{{youhui}}</p>
                    <span class="me-content-paice">优惠券</span>
                    <span class="wire">|</span>
                </div>
                <div class="me-content-box1">
                    <p>{{daijin}}</p>
                    <span class="me-content-paice">代金卷</span>
                </div>
            </div>
        </div>
        <div class="me-bottom-box">
            <div class="me-bottom-box-head">
                <span class="me-bottom-box-span1">我的订单</span>
                <div class="me-bottom-span">
                    <span class="me-bottom-box-span2">全部订单</span>
                    <span class="me-bottom-box-span3">></span>
                </div>
            </div>
            <ul class="me-bottom-box-ul">
                <li class="me-bottom-box-li">
                    <img src="../assets/Homeimg/me-bottom-img1.png" alt="">
                    <br>
                    <span class="me-bottom-box-li-price">待付款</span>
                </li>
                <li class="me-bottom-box-li">
                    <img src="../assets/Homeimg/me-bottom-img1.png" alt="">
                    <br>
                    <span class="me-bottom-box-li-price">待收货</span>
                </li>
                <li class="me-bottom-box-li">
                    <img src="../assets/Homeimg/me-bottom-img1.png" alt="">
                    <br>
                    <span class="me-bottom-box-li-price">待评价</span>
                </li>
                <li class="me-bottom-box-li">
                    <img src="../assets/Homeimg/me-bottom-img1.png" alt="">
                    <br>
                    <span class="me-bottom-box-li-price">退款/退货</span>
                </li>
            </ul>
            <div class="home-head-swiper">
                <swiper ref="mySwiper" :options="swiperOptions" class="swiperBox">
                    <swiper-slide>
                        <img src="https://res.vmallres.com/pimages//pages/picImages/13359661400616695331.jpg" alt="">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="https://res.vmallres.com/pimages//pages/picImages/19847720700612774891.jpg" alt="">
                    </swiper-slide>
                </swiper>
                <div class="swiper-pagination" slot="pagination"></div>
            </div>
        </div>
        <div class="me-bottom-box1">
            <div class="me-bottom-box-head1">
                <span class="me-bottom-box-span1">会员专享</span>
                <div class="me-bottom-span">
                    <span class="me-bottom-box-span2">更多会员权益</span>
                    <span class="me-bottom-box-span3">></span>
                </div>
            </div>
            <ul class="me-bottom-box-ul1">
                <li class="me-bottom-box-li1">
                    <img src="../assets/Homeimg/me-bottom-box1-img1.png" alt="">
                </li>
                <li class="me-bottom-box-li1">
                    <img src="../assets/Homeimg/me-bottom-box1-img1.png" alt="">
                </li>
                <li class="me-bottom-box-li1">
                    <img src="../assets/Homeimg/me-bottom-box1-img1.png" alt="">
                </li>
            </ul>
        </div>
        <div class="me-bottom-box3">
            <div class="me-bottom-box-head">
                <span class="me-bottom-box-span1">我的VMALL</span>
            </div>
            <ul class="me-bottom-box-ul2">
                <li class="me-bottom-box-li4" v-for="(item,index) in imglist" :key="index">
                    <img :src="item.imgsrc" alt="">
                    <p>{{item.title}}</p>
                </li>
            </ul>
            <ul class="me-bottom-box-ul2">
                <li class="me-bottom-box-li5" v-for="(item,index) in imglist1" :key="index">
                    <img :src="item.imgsrc" alt="">
                    <p>{{item.title}}</p>
                </li>
            </ul>
        </div>
        <h3>为您推荐</h3>
        <div class="me-bottom-recommend">
            <div class="me-bottom-recommend-img">
                <img src="https://res.vmallres.com/pimages/pages/dynamicMsg/05497146150614179450.png" alt="">
            </div>
            <div class="me-bottom-recommend-img">
                <img src="https://res.vmallres.com/pimages/pages/dynamicMsg/56540246150614204565.jpg" alt="">
            </div>
            <div class="me-bottom-recommend-img wrie">
                <img src="https://res.vmallres.com/pimages/pages/dynamicMsg/45581246150614218554.jpg" alt="">
            </div>
        </div>
        <div class="home-bottom-title">
            <span style="marginRight:20px">登录</span>
            <span style="color:#eaeaea">|</span>
            <span style="marginLeft:20px">反馈</span>
        </div>
        <div class="home-bottom-information">
            <div class="home-bottom-information-top">
                <img src="../assets/Homeimg/bottom.png" alt="" style="width:414px;">
            </div>
            <div class="home-bottom-information-bottom">
                <p>隐私政策 | 用户协议 | 关于Cookie</p>
                <p>Copyright 2012-2020 VMALL.COM 版权所有</p>
                <p>营业执照 备案主体编号：44201919072182</p>
                <p>粤ICP备19015064号 粤公网安备 44190002003939号</p>
                <p>增值电信业务经营许可证：粤B2-20190762</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
     data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable:true
        },
      },
      loop: true,
      autoplay: {
          autoplay:true,
          disableOnInteraction:false
        },
      speed:1000,
      imglist: [
        {
          imgsrc: require("../assets/Homeimg/me-bottom-icon-img1.png"),
          title: "会员频道",
        },
        {
          imgsrc: require("../assets/Homeimg/me-bottom-icon-img2.png"),
          title: "邀请有礼",
        },
        {
          imgsrc: require("../assets/Homeimg/me-bottom-icon-img3.png"),
          title: "教育优惠",
        },
        {
          imgsrc: require("../assets/Homeimg/me-bottom-icon-img4.png"),
          title: "优购码",
        },
      ],
      imglist1: [
        {
          imgsrc: require("../assets/Homeimg/me-bottom-icon-img5.png"),
          title: "我的拼团",
        },
        {
          imgsrc: require("../assets/Homeimg/me-bottom-icon-img6.png"),
          title: "收货地址",
        },
        {
          imgsrc: require("../assets/Homeimg/me-bottom-icon-img7.png"),
          title: "预约记录",
        },
        {
          imgsrc: require("../assets/Homeimg/me-bottom-icon-img8.png"),
          title: "企业购",
        },
      ],
      scoshow:false
    };
  },
  methods:{
    showhead(event){
      if(event.target.scrollTop>100){
        this.scoshow=true;
      }
      if(event.target.scrollTop<100){
        this.scoshow=false;
      }
    },
    goregister(){
      this.$router.push("/register")
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    denglu(){
        return this.$store.state.denglu;
    },
    jifen(){
        return this.$store.state.jifen;
    },
    youhui(){
        return this.$store.state.youhui;
    },
    daijin(){
        return this.$store.state.daijin;
    },
  },

  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<style scoped>
    .me {
  width: 100%;
  height: 100%;
  background: #f8f8f8;
  overflow: auto;
  position: relative;
}
.me-head-box {
  width: 100%;
  height: 30%;
  background:rgba(226, 44, 47, 1);
  border-radius: 20%;
}
.me-head-box1 {
  width: 100%;
  height: 80%;
  background: rgba(226, 44, 47, 1);
  display: flex;
}

.me-heda-img {
  width: 69px;
  height: 69px;
  margin: 40px 0 0 20px;
}

.me-heda-img img {
  width: 100%;
  height: 100%;
}

.me-head-title {
  margin: 50px 0 0 10px;
  color: white;
  font-size: 23px;
}

.me-head-title-content {
  display: inline-block;
  width: 100px;
  height: 20px;
  text-align: center;
  line-height: 17px;
  border-radius: 20px;
  background: rgba(207, 51, 50, 10);
  position: relative;
  top: 80px;
  left: -100px;
  margin-top: 5px;
}

.me-head-title-content img{
vertical-align: middle;
}

.title {
  color: white;
  font-size: 14px;
}

.me-head-box1-img{
    position: absolute;
    right: 10px;
    top: 5px;
}

.me-head-box1-img img {
  display: inline-block;
  color: white;
  margin-left: 5px;
}

.me-content {
  width: 95%;
  height: 10%;
  margin: 0 auto;
}

.me-content-box {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 15px;
  position: relative;
  top: -40px;
  display: flex;
}

.me-content-box1 {
  text-align: center;
  width: 33.3%;
  height: 50%;
  margin-top: 10px;
}

.me-content-paice {
  display: inline-block;
  width: 95%;
  color: #666;
  font-size: 14px;
}

.me-content-box1 p {
  font-weight: 600;
}

.me-content-box1 .wire {
  color: #eaeaea;
  font-size: 20px;
  font-weight: lighter;
}

.me-bottom-box {
  width: 95%;
  height: 34%;
  margin: 0 auto;
  position: relative;
  background: white;
  top: -25px;
  border-radius: 15px;
}

.me-bottom-box-head {
  width: 95%;
  height: 46px;
  margin: 0 auto;
  position: relative;
  line-height: 46px;
}

.me-bottom-box-span1 {
  font-weight: bold;
  font-size: 19px;
}
.me-bottom-span {
  display: inline-block;
  position: absolute;
  right: 0;
}

.me-bottom-span .me-bottom-box-span2 {
  display: inline-block;
  color: #666;
  font-size: 14px;
}
.me-bottom-box-span3 {
  display: inline-block;
  font-size: 18px;
  color: #c9c9c9;
}

.me-bottom-box-ul {
  width: 95%;
  height: 68px;
  margin: 0 auto;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-around;
}

li {
  list-style: none;
  margin-top: 10px;
  text-align: center;
}

.me-bottom-box-li img {
  margin-left: 3px;
}

.me-bottom-box-li-price {
  font-size: 13px;
  color: #666;
}

.swiper-pagination {
  position: absolute;
  right: 15px;
  bottom: -50px;
}

.home-head-swiper {
  width: 93%;
  height: 50px;
  margin: 0 auto;
  border-radius: 15px;
  position: relative;
}

.swiperBox {
  width: 100%;
  height: 103px;
}

.home-head-swiper img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}

.me-bottom-box1 {
  width: 95%;
  height: 25%;
  margin: 10px auto 0 auto;
  position: relative;
  background: white;
  top: -25px;
  border-radius: 15px;
}

.me-bottom-box-head1 {
  width: 95%;
  height: 27%;
  margin: 0 auto;
  position: relative;
  line-height: 46px;
}

.me-bottom-box-ul1 {
  height: 73%;
  width: 100%;
  display: flex;
  overflow: auto;
}

.me-bottom-box-li1 {
  width: 100%;
  height: 100%;
  margin-top: -5px;
}



.me-bottom-box3 {
  width: 95%;
  height: 34%;
  margin: 0 auto;
  position: relative;
  background: white;
  top: -25px;
  border-radius: 15px;
  margin-top: 20px;
}

.me-bottom-box-ul2 {
  width: 95%;
  height: 68px;
  margin: 0 auto;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.me-bottom-box-li4 {
  width: 25%;
  font-size: 14px;
  text-align: center;
}

.me-bottom-box-li5 {
  width: 25%;
  font-size: 14px;
  text-align: center;
}

.me-bottom-box-li5 img {
  margin-top: 20px;
}

h3 {
  text-align: center;
}

.me-bottom-recommend {
  width: 95%;
  height: 57%;
  background: white;
  border-radius: 15px;
  margin: 20px auto 20px auto;
}

.me-bottom-recommend-img {
  width: 93%;
  height: 33%;
  margin: 0 auto;
  position: relative;
  border-bottom: 1px solid rgba(244, 244, 244, 1);
}

.me-bottom-recommend-img img {
  width: 100%;
  height: 103px;
  border-radius: 15px;
  margin: 15px auto 0 auto;
}

.home-bottom-title {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #4a4a4a;
  border-bottom: 1px solid rgba(244, 244, 244, 1);
  background: white;
}

.home-bottom-line {
  width: 100%;
  height: 20px;
  background-color: #f9f9f9;
}

.home-bottom-information {
  width: 100%;
  height: 200px;
  background: white;
}

.home-bottom-information-top {
  width: 100%;
  height: 85px;
  text-align: center;
}

/* .home-bottom-information-top>img{
  width: 100%;
} */

.home-bottom-information-bottom {
  width: 100%;
  height: 115px;
  text-align: center;
}

.home-bottom-information-bottom > p {
  color: #9b9b9b;
  font-size: 12px;
}

/* 滚轮 */
.me-show{
width: 100%;
height: 6%;
background:rgba(226, 44, 47, 1);
position: absolute;
position: fixed;
top: 0;
display: flex;
z-index: 100;
}

.me-show-p{
    width: 10%;
    height: 100%;
    padding:7px 0 0 20px;
}

.me-show-p img{
    width: 100%;
    height: 70%;
}

.me-show-title{
  color: white;
  font-size: 18px;
  padding: 10px 0 0 7px;
}
.me-head-box-img{
  position: absolute;
  right: 10px;
  top: 5px;
}

.me-head-box-img img{
  margin-left: 5px;
} 
</style>