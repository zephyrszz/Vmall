<template>
    <div class="home-content" @scroll="showtop">
    <div class="home-head-fixed">
      <div class="home-head-search">
        <div class="home-head-search-left">
          <img src="../assets/Homeimg/logo.png" alt />
        </div>
        <div class="home-head-search-mid">
          <img src="../assets/Homeimg/sousuo.png" alt="" />
          <span class="home-head-search-input" @click="gosearch">
            <span>荣耀30</span>
          </span>
        </div>
        <div class="home-head-search-right">
          <img src="../assets/Homeimg/home-huihua-img1.png" alt="" @click="gome"/>
          <span @click="gome">登录</span>
        </div>
      </div>
      <div class="home-head-select">
        <div class="home-head-select-left">
          <a href="#"><span style="borderBottom:2px solid #cc0e11;color:#cc0e11">推荐</span></a>
          <a href="https://msale.vmall.com/huaweizone.html">华为专区</a>
          <a href="https://msale.vmall.com/honor.html">荣耀专区</a>
          <a href="https://msale.vmall.com/pseries.html">P40 系列</a>
        </div>
        <div class="hidden-box1" v-show="showbox">
          <span>全部</span>
        </div>
        <div class="home-head-select-right" v-if="hiddenimg" @click="ckimg">
          <img  src="../assets/Homeimg/home-img.png" alt="" >
        </div>
        <div class="home-head-select-right" v-else @click="ckimg">
          <img  src="../assets/Homeimg/hiddenimg1.png" alt="" >
        </div>
      </div>
    </div>
        <div class="hidden-box" v-show="showbox">
          <ul class="hidden-topbox">
            <li class="hidden-topbox-zi active"> 推荐</li>
            <li class="hidden-topbox-zi">华为专区</li>
            <li class="hidden-topbox-zi">荣耀专区</li>
            <li class="hidden-topbox-zi">P40 系列 </li>
            <li class="hidden-topbox-zi">智能家居</li>
            <li class="hidden-topbox-zi">拼团</li>
          </ul>
          <div class="hidden-btmbox"></div>
        </div>
        <a href="#top" class="gohead" v-show="gotop">
          <img src="../assets/Homeimg/gohead.png" alt="">
        </a>
    <div class="home-head">
      <div class="home-head-swiper" id="top">
        <swiper ref="mySwiper" :options="swiperOptions" class="swiperBox">
          <swiper-slide>
            <img
              src="https://res.vmallres.com/pimages//pages/picImages/65906970150617960956.jpg"
              alt
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://res.vmallres.com/pimages//pages/picImages/03012380650618321030.jpg"
              alt
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://res.vmallres.com/pimages//pages/picImages/13342251750615224331.jpg"
              alt
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://res.vmallres.com/pimages//pages/picImages/82174970150617947128.jpg"
              alt
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://res.vmallres.com/pimages//pages/picImages/60250255450615205206.png"
              alt
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://res.vmallres.com/pimages//pages/picImages/65906970150617960956.jpg"
              alt
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://res.vmallres.com/pimages//pages/picImages/02246861600616864220.jpg"
              alt
            />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="home-head-title">
        <img src="../assets/Homeimg/home-head-img1.png" alt />
      </div>
      <div class="home-head-swiper2">
        <swiper ref="mySwiper" :options="swiperOptions" class="swiperBox2">
          <swiper-slide class="swiper2">
            <a href="https://m.vmall.com/member/privilege">
              <div class="swiper2-img">
                <img src="../assets/Homeimg/home-img1.png" alt="" />
              </div>
              <p>会员领券</p>
            </a>
            <a href="https://msale.vmall.com/hwsmh.html">
              <div class="swiper2-img">
                <img src="../assets/Homeimg/home-img2.png" alt="" />
              </div>
              <p>华为数码</p>
            </a>
            <a href="https://msale.vmall.com/education.html">
              <div class="swiper2-img">
                <img src="../assets/Homeimg/home-img3.png" alt="" />
              </div>
              <p>Mate优享购</p>
            </a>
            <a href="https://msale.vmall.com/smarthome2020.html">
              <div class="swiper2-img">
                <img src="../assets/Homeimg/home-img4.png" alt="" />
              </div>
              <p>荣耀数码</p>
            </a>
            <a href="https://vmall-m.aihuishou.com/">
              <div class="swiper2-img">
                <img src="../assets/Homeimg/home-img5.png" alt="" />
              </div>
              <p>以旧换新</p>
            </a>
          </swiper-slide>
          <swiper-slide class="swiper2">
            <a href="https://m.vmall.com/member/inviteGift">
              <div class="swiper2-img">
                <img src="../assets/Homeimg/home-img6.png" alt="" />
              </div>
              <p>邀请有礼</p>
            </a>
            <a href="https://m.vmall.com/openTest">
              <div class="swiper2-img">
                <img src="../assets/Homeimg/home-img7.png" alt="" />
              </div>
              <p>众测</p>
            </a>
            <a href="https://m.vmall.com/live/home">
              <div class="swiper2-img">
                <img src="../assets/Homeimg/home-img8.png" alt="" />
              </div>
              <p>正在直播</p>
            </a>
            <a href="https://msale.vmall.com/points.html">
              <div class="swiper2-img">
                <img src="../assets/Homeimg/home-img9.png" alt="" />
              </div>
              <p>积分商城</p>
            </a>
            <a href="https://msale.vmall.com/smarthome.html">
              <div class="swiper2-img">
                <img src="../assets/Homeimg/home-img10.png" alt="" />
              </div>
              <p>精选特卖</p>
            </a>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
      </div>
      <div class="home-head-more">
        <a href="#" class="home-head-more-left">
          <img
            src="https://res.vmallres.com/nwap/20200715/images/echannelWap/logo/logo_wapHeadNews.png"
            alt
          />
        </a>
        <a href="#" class="home-head-more-mid"
          >北京电影学院摄影系博士教你拍大片</a
        >
        <a href="#" class="home-head-more-right" @click="discover">更多</a>
      </div>
      <div class="home-head-sale">
        <span style="color: #4d4d4d; fontSize: 18px; marginright: 5px"
          >限时购</span
        >
        <span class="sale-icon"></span>
        <span style="color: #4d4d4d; fontSize: 18px; marginright: 5px"
          >{{ hou }}:{{ min }}:{{ sec }}</span
        >
      </div>
    </div>
    <div class="home-mid">
      <div class="home-mid-tab">
        <div class="home-mid-tab2">
          <div class="home-mid-slide">
            <p class="home-mid-img">
              <a href="#">
                <img
                  src="../assets/Homeimg/home-mid-img1.png"
                  alt
                  class="img1"
                />
              </a>
            </p>
            <p class="home-mid-title">MatePad5G</p>
          </div>
          <p class="home-mid-price">预定立省100元</p>
        </div>
        <div class="home-mid-tab2">
          <div class="home-mid-slide">
            <p class="home-mid-img">
              <a href="#">
                <img
                  src="../assets/Homeimg/home-mid-img5.png"
                  alt
                  class="img1"
                />
              </a>
            </p>
            <p class="home-mid-title">华为智慧屏</p>
          </div>
          <p class="home-mid-price">最高省3000</p>
        </div>
        <div class="home-mid-tab2">
          <div class="home-mid-slide">
            <p class="home-mid-img">
              <a href="#">
                <img
                  src="../assets/Homeimg/home-mid-img9.png"
                  alt
                  class="img1"
                />
              </a>
            </p>
            <p class="home-mid-title">荣耀手表GS Pro</p>
          </div>
          <p class="home-mid-price">首销优惠100元</p>
        </div>
        <div class="home-mid-tab2">
          <div class="home-mid-slide">
            <p class="home-mid-img">
              <a href="#">
                <img
                  src="../assets/Homeimg/home-mid-img8.png"
                  alt
                  class="img1"
                />
              </a>
            </p>
            <p class="home-mid-title">荣耀手表ES</p>
          </div>
          <p class="home-mid-price">首销优惠100元</p>
        </div>
        <div class="home-mid-tab2">
          <div class="home-mid-slide">
            <p class="home-mid-img">
              <a href="#">
                <img
                  src="../assets/Homeimg/home-mid-img6.png"
                  alt
                  class="img1"
                />
              </a>
            </p>
            <p class="home-mid-title">荣耀平板V6</p>
          </div>
          <p class="home-mid-price">降200赠耳机</p>
        </div>
        <div class="home-mid-tab2">
          <div class="home-mid-slide">
            <p class="home-mid-img">
              <a href="#">
                <img
                  src="../assets/Homeimg/home-mid-img7.png"
                  alt
                  class="img1"
                />
              </a>
            </p>
            <p class="home-mid-title">华为智慧屏X1</p>
          </div>
          <p class="home-mid-price">限时优惠100元</p>
        </div>
        <div class="home-mid-tab2">
          <div class="home-mid-slide">
            <p class="home-mid-img">
              <a href="#">
                <img
                  src="../assets/Homeimg/home-mid-img4.png"
                  alt
                  class="img1"
                />
              </a>
            </p>
            <p class="home-mid-title">Matebook X</p>
          </div>
          <p class="home-mid-price">直降11元</p>
        </div>
        <div class="home-mid-tab2">
          <div class="home-mid-slide">
            <p class="home-mid-img">
              <a href="#">
                <img
                  src="../assets/Homeimg/home-mid-img11.png"
                  alt
                  class="img1"
                />
              </a>
            </p>
            <p class="home-mid-title">FlyPods 3真无线耳机</p>
          </div>
          <p class="home-mid-price">￥499免息</p>
        </div>
        <div class="home-mid-tab2">
          <div class="home-mid-slide">
            <p class="home-mid-img">
              <a href="#">
                <img
                  src="../assets/Homeimg/home-mid-img2.png"
                  alt
                  class="img1"
                />
              </a>
            </p>
            <p class="home-mid-title">WATCH GT 2</p>
          </div>
          <p class="home-mid-price">限时优惠50元</p>
        </div>
        <div class="home-mid-tab2">
          <div class="home-mid-slide">
            <p class="home-mid-img">
              <a href="#">
                <img
                  src="../assets/Homeimg/home-mid-img3.png"
                  alt
                  class="img1"
                />
              </a>
            </p>
            <p class="home-mid-title">FlyPods青春版</p>
          </div>
          <p class="home-mid-price">￥329免息</p>
        </div>
        <div class="home-mid-tab2">
          <div class="home-mid-slide">
            <p class="home-mid-img">
              <a href="#">
                <img
                  src="../assets/Homeimg/home-mid-img12.png"
                  alt
                  class="img1"
                />
              </a>
            </p>
            <p class="home-mid-title">Sound X 智能音箱</p>
          </div>
          <p class="home-mid-price">限时优惠500元</p>
        </div>
      </div>
      <div class="home-mid-content">
        <ul class="home-mid-ul">
          <li class="home-mid-li1">
            <div class="home-mid-li1-img">
              <a href="https://msale.vmall.com/pseries.html">
                <img src="../assets/Homeimg/home-mid-content-img1.png" alt />
              </a>
            </div>
          </li>
          <li class="home-mid-li2">
            <div>
              <a href="#">
                <img
                  class="home-mid-content-img"
                  src="../assets/Homeimg/home-mid-content-img2.png"
                  alt
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  class="home-mid-content-img"
                  src="../assets/Homeimg/home-mid-content-img3.png"
                  alt
                />
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div class="home-mid-content2">
        <ul class="home-mid-ul2">
          <li class="home-mid-li3">
            <a href="#">
              <img
                src="https://res.vmallres.com/pimages//pages/picImages/53248338600613384235.jpg"
                alt
              />
            </a>
          </li>
          <li class="home-mid-li3">
            <a href="#">
              <img
                src="https://res.vmallres.com/pimages//pages/picImages/32180281900618208123.png"
                alt
              />
            </a>
          </li>
        </ul>
        <ul class="home-mid-ul2">
          <li class="home-mid-li3">
            <a href="#">
              <img
                src="https://res.vmallres.com/pimages//pages/picImages/36690998700619909663.png"
                alt
              />
            </a>
          </li>
          <li class="home-mid-li3">
            <a href="#">
              <img
                src="https://res.vmallres.com/pimages//pages/picImages/55809338600613390855.jpg"
                alt
              />
            </a>
          </li>
        </ul>
      </div>
      <div class="channel-floor-list3">
        <ul class="home-mid-ul3">
          <li class="home-mid-li4">
            <div class="channel-floor-img">
              <a href="#">
                <img
                  src="https://res.vmallres.com/pimages//product/6901443381395/428_428_3D49606EC05C3B4ED89368F84D0B672CF5B647187113B9A2mp.png"
                  alt
                />
              </a>
            </div>
            <p class="channel-floor-title">HUAWEI P40 5G</p>
            <p class="channel-floor-data">享12期免息</p>
            <p class="channel-floor-price">￥4488</p>
          </li>
          <li class="home-mid-li4">
            <div class="channel-floor-img">
              <a href="#">
                <img
                  src="https://res.vmallres.com/pimages//product/6901443388127/428_428_A1DCE56BD2CE2C267A33622E9A4E5BD013370AD11DCA09C8mp.png"
                  alt
                />
              </a>
            </div>
            <p class="channel-floor-title">荣耀Play4T Pro</p>
            <p class="channel-floor-data">晒单抽好礼</p>
            <p class="channel-floor-price">￥1446</p>
          </li>
          <li class="home-mid-li4">
            <div class="channel-floor-img">
              <a href="#">
                <img
                  src="https://res.vmallres.com/pimages//product/6901443393039/428_428_7484AB32CD916B697FED5DE343A4384247FC1B9D7159B022mp.png"
                  alt
                />
              </a>
            </div>
            <p class="channel-floor-title">HUAWEI nova 7 Pro 5G</p>
            <p class="channel-floor-data">12期免息|限量赠好礼</p>
            <p class="channel-floor-price">￥3699</p>
          </li>
        </ul>
      </div>
      <div class="goodsRecommend">
        <div class="goodsRecommend-head">
          <h2>手机</h2>
        </div>
      </div>
      <div class="home-mid-phone">
        <div class="home-mid-phone-content" @click="godetail">
          <div class="home-mid-phone-content-top">
            <img
              src="https://res0.vmallres.com/pimages//product/6901443387984/428_428_CA16AD0891C031C45C53FB3909E9FF609CCA6C46C2581A76mp.png"
              alt=""
            />
            <p
              style="
                margintop: 10px;
                background: rgba(155, 155, 155, 0.1);
                lineheight: 30px;
                fontsize: 14px;
                color: #9b9b9b;
              "
            >
              限量赠好礼
            </p>
          </div>
          <div class="home-mid-phone-content-bottom">
            <p style="fontSize: 14px">HUAWEI nova SE 5G</p>
            <p style="color: #ca141d; fontsize: 14px">¥1999</p>
          </div>
        </div>
        <div class="home-mid-phone-content" @click="godetail">
          <div class="home-mid-phone-content-top">
            <img
              src="https://res0.vmallres.com/pimages//product/6901443388141/428_428_AE2A1F00B7D98D94AAB55AD59800475D6ADFA000C71CA40Fmp.png"
              alt=""
            />
            <p
              style="
                margintop: 10px;
                background: rgba(155, 155, 155, 0.1);
                lineheight: 30px;
                fontsize: 14px;
                color: #9b9b9b;
              "
            >
              限量赠好礼
            </p>
          </div>
          <div class="home-mid-phone-content-bottom">
            <p style="fontSize: 14px">荣耀Play4</p>
            <p style="color: #ca141d; fontsize: 14px">¥2399</p>
          </div>
        </div>
      </div>
      <div class="home-mid-phone">
        <div class="home-mid-phone-content" @click="godetail">
          <div class="home-mid-phone-content-top">
            <img
              src="https://res0.vmallres.com/pimages//product/6901443353125/428_428_843D9A399BDE267826C8BE3F0F68A903E015089FCD5087D9mp.png"
              alt=""
            />
            <p
              style="
                margintop: 10px;
                background: rgba(155, 155, 155, 0.1);
                lineheight: 30px;
                fontsize: 14px;
                color: #9b9b9b;
              "
            >
              限量赠好礼
            </p>
          </div>
          <div class="home-mid-phone-content-bottom">
            <p style="fontSize: 14px">HUAWEI Mate 40 5G </p>
            <p style="color: #ca141d; fontsize: 14px">¥1499</p>
          </div>
        </div>
        <div class="home-mid-phone-content" @click="godetail">
          <div class="home-mid-phone-content-top">
            <img
              src="https://res0.vmallres.com/pimages//product/6972453164742/428_428_DA3EC111518BD3850225AFD2CA0127B75C37A020458A3864mp.png"
              alt=""
            />
            <p
              style="
                margintop: 10px;
                background: rgba(155, 155, 155, 0.1);
                lineheight: 30px;
                fontsize: 14px;
                color: #9b9b9b;
              "
            >
              限量赠好礼
            </p>
          </div>
          <div class="home-mid-phone-content-bottom">
            <p style="fontSize: 14px">荣耀X10 Max 5G</p>
            <p style="color: #ca141d; fontsize: 14px">¥4499</p>
          </div>
        </div>
      </div>
      <div class="home-bottom">发现更多手机</div>
      <div class="home-bottom-line"></div>
      <div class="home-bottom-title">
        <span style="marginright: 20px">登录</span
        ><span style="color: #eaeaea">|</span
        ><span style="marginleft: 20px">反馈</span>
      </div>
      <div class="home-bottom-information">
        <div class="home-bottom-information-top">
          <img
            src="../assets/Homeimg/bottom.png"
            alt=""
            style="width: 414px"
          />
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
  </div>
</template>

<script>
export default {
    name: 'carrousel',
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable:true
        },
        loop: true,
        autoplay: {
          autoplay:true,
          disableOnInteraction:false
        },
        speed:1000
      },
      hou: 0,
      min: 0,
      sec: 0,
      showbox:false,
      hiddenimg:true,
      gotop:false
    }
  },

  created() {
    let that = this;
    that.time();
  },

  methods: {
    time() {
      var that = this;
      var interval = setInterval(function timestampToTime() {
        var date = new Date("2020-11-30 00:00:00") - new Date();
        //new Date当前的时间戳，也可以换成自定义的时间戳
        if (date > 0) {
          let time = date / 1000;
          // 获取时、分、秒,毫秒
          that.hou =
            parseInt((time % (60 * 60 * 24)) / 3600) < 10
              ? "0" + parseInt((time % (60 * 60 * 24)) / 3600)
              : parseInt((time % (60 * 60 * 24)) / 3600);
          that.min =
            parseInt(((time % (60 * 60 * 24)) % 3600) / 60) < 10
              ? "0" + parseInt(((time % (60 * 60 * 24)) % 3600) / 60)
              : parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
          that.sec =
            parseInt(((time % (60 * 60 * 24)) % 3600) % 60) < 10
              ? "0" + parseInt(((time % (60 * 60 * 24)) % 3600) % 60)
              : parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
          that.ssec = parseInt(((date % (60 * 60 * 24)) % 3600) / 60) % 10;
        } else {
          //活动已结束，全部设置为'00'
          // console.log("aaa")
          (that.day = "00"),
            (that.hou = "00"),
            (that.min = "00"),
            (that.sec = "00");
        }
      }, 100);
    },
    gosearch() {
      this.$router.push("/search");
    },
    ckimg(){
      this.showbox=!this.showbox
      this.hiddenimg=!this.hiddenimg
    },
    discover(){
      this.$router.push("/discover/03");
    },
    gome(){
      this.$router.push("/me/05");
    },
    godetail(){
        this.$router.push('/detail');
        
        this.detaillist.push(this.cartlist[this.$store.state.detailindex])
    },
    showtop(event){
      if(event.target.scrollTop>500){
        this.gotop=true;
      }
      if(event.target.scrollTop<500){
        this.gotop=false;
      }
    },
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    detaillist(){
        return this.$store.state.detaillist;
    },
    cartlist(){
        return this.$store.state.cartlist;
    },
  },

  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<style>
/* .page{
    min-width: 320px !important;
    max-width: 720px !important;
    margin: 0 auto;
}
.home-top {
    width: 100%;
    background-color: #fff;
    padding: 5px 10px;
}
.header {
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.header .logo {
    width: 20%;
    flex-grow: 1;
    padding-right: 10px;
}
.search_demo {
    width: 60%;
    flex-grow: 1;
}
.shortcut {
    width: 20%;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-grow: 1;
}
.shortcut img {
    width: 30%;
}
.shortcut span {
    width: 70%;
    text-align: center;
}

.home-head-select-left {
  width: 100%;
  height: 90%;
  padding: 10px 0;
  text-align: center;
  overflow: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-shrink: 0;
}

.home-head-select-left a {
  display: inline-block;
  width: 22%;
  color: rgb(119, 119, 119);
  flex-shrink: 0;
}

.hidden-box1{
  width: 90%;
  background: white;
  position: absolute;
  top: 36px;
  line-height: 220%;
}

.hidden-box1 span{
  display: inline-block;
  color: #777;
  font-size: 18px;
  width: 12%;
  text-align: right;
  
}

.hidden-box{
  width: 100%;
  height: 100%;
  display: flex;
  background:rgba(7, 7, 7,0.3);
  position: absolute;
  left: 0;
  top: 70px;
  z-index: 100;
  position: fixed;
}
.hidden-topbox-zi{
  display: inline-block;
  border: 1px solid #eaeaea;
  color: #333;
  font-size: 15px;
  flex-shrink: 0;
  width: 27%;
  
  line-height: 240%;
  border-radius: 20px;
}

.hidden-topbox .active{
  border: 1px solid #cb1821;
  color: #cb1821;
}

.hidden-topbox{
  text-align: center;
  width: 100%;
  height: 16%;
   display: flex;
  flex-wrap: wrap;
  position: relative;
  background: white;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-around;
} */




.hidden-box1{
  width: 90%;
  /* height: 41%; */
  background: white;
  position: absolute;
  line-height: 220%;
}

.hidden-box1 span{
  display: inline-block;
  color: #777;
  font-size: 18px;
  width: 12%;
  text-align: right;
  
}

.hidden-box{
  width: 100%;
  height: 100%;
  position: relative;
  top: 13%;
  display: flex;
  background:rgba(7, 7, 7,0.3);
  position: absolute;
  top: 80px;
  z-index: 100;
  position: fixed;
}

.hidden-btmbox{
  width: 100%;
  height: 84%;
  opacity: 0.3;
  z-index: 70;
}

.hidden-topbox-zi{
  display: inline-block;
  border: 1px solid #eaeaea;
  color: #333;
  font-size: 15px;
  flex-shrink: 0;
  width: 27%;
  /* height: 33%; */
  line-height: 240%;
  border-radius: 20px;
}

.hidden-topbox .active{
  border: 1px solid #cb1821;
  color: #cb1821;
}

.hidden-topbox{
  text-align: center;
  width: 100%;
  height: 16%;
   display: flex;
  flex-wrap: wrap;
  position: relative;
  background: white;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-around;
}

.gohead{
  display: inline-block;
  width: 52px;
  height: 52px;
  background-color: white;
  position: absolute;
  right: 20px;
  bottom: 70px;
  position: fixed;
  border-radius: 50%;
  text-align: center;
  line-height: 52px;
  z-index: 100;
}

.gohead img{
  width: 35px;
  height: 35px;
  margin-top: 10px;
}

.home-content {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  /* position: relative; */
}

.home-head-fixed {
  width: 100%;
  height: 80px;
  position: fixed;
  background-color: white;
  z-index: 99;
}

.home-head {
  height: 52.5%;
  width: 100%;
}

.home-head-search {
  width: 100%;
  height: 46px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: fixed;
  line-height: 46px;
}

.home-head-search-left {
  width: 20%;
  height: 100%;
  text-align: center;
}

.home-head-search-left img {
  width: 3.05rem;
}

.home-head-search-mid {
  width: 55%;
  height: 100%;
  /* text-align: center; */
  position: relative;
}

.home-head-search-input {
  display: inline-block;
  width: 90%;
  height: 80%;
  background-color: #f5f5f5;
  margin: auto;
  border-radius: 20px;
  margin-top: 5px;
  line-height: 36px;
  color: rgb(194, 190, 190);
  font-size: 14px;
}

.home-head-search-input span{
  position: absolute;
  left: 35px;

}

.home-head-search-mid img {
  position: absolute;
  left: 10px;
  top: 30%;
}
.home-head-search-right {
  width: 20%;
  height: 100%;
  /* text-align: right; */
}
.home-head-search-right img {
  vertical-align: middle;
}

.home-head-search-right span {
  display: inline-block;
  font-size: 0.65rem;
  margin-left: .5rem;
}

.home-mid {
  height: 100%;
  width: 100%;
}

.home-head-select {
  width: 100%;
  height: 39px;
  margin-top: 46px;
  line-height: 39px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.home-head-select-left {
  width: 100%;
  height: 90%;
  font-size: 0.7rem;
  text-align: center;
  overflow: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-shrink: 0;
}

.home-head-select-left a {
  display: inline-block;
  width: 22%;
  /* background: olive; */
  color: rgb(119, 119, 119);
  flex-shrink: 0;
}

.home-head-select-right {
  width: 10%;
  height: 40%;
  position: absolute;
  right: 0;
  background: white;
  z-index: 50;
  text-align: center;
}

.home-head-swiper {
  height: 170px;
  width: 97%;
  margin: 80px auto 0 auto;
}

.swiperBox,
.swiper-slide {
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 10px;
}

.swiperBox img {
  width: 100%;
  height: 170px;
  border-radius: 10px;
}

.swiper-pagination {
  margin-left: 120px;
}

.home-head-title,
.home-head-title > img {
  width: 100%;
  height: 35px;
}

.home-head-swiper2 {
  width: 100%;
  height: 60px;
}

.swiperBox2,
.swiperBox2 > swiper-slide {
  height: 60px;
  width: 100%;
}

.swiper2 > a {
  display: inline-block;
  width: 20%;
  height: 100%;
  text-align: center;
  color: black;
  font-size: 14px;
}

.swiper2-img {
  width: 34.5px;
  height: 34.5px;
  margin: 0 auto;
}

.swiper2 p {
  padding-top: 8px;
}

.home-head-more {
  width: 100%;
  height: 46px;
  display: flex;
}

.home-head-more > a {
  display: inline-block;
  height: 100%;
  text-align: center;
  line-height: 46px;
}

.home-head-more-left {
  width: 20%;
}

.home-head-more-left > img {
  width: 55px;
  height: 15px;
}

.home-head-more-mid {
  width: 65%;
  color: #4d4d4d;
  font-size: 14px;
}

.home-head-more-right {
  width: 15%;
  color: #999;
  font-size: 14px;
}

.home-head-sale {
  width: 100%;
  height: 46px;
  text-align: center;
  line-height: 46px;
  background-color: #fafafa;
}

.sale-icon {
  width: 20px;
  height: 20px;
  display: inline-block;
  background-image: url(../assets/Homeimg/sale.png);
  background-size: cover;
}

.home-mid-tab {
  width: 100%;
  height: 118px;
  background-color: #fafafa;
  display: flex;
  overflow: auto;
  overflow-y: none;
}

.home-mid-slide {
  width: 87px;
  height: 99px;
  background-color: white;
  border-radius: 15px;
  margin-left: 10px;
}

.home-mid-img img {
  width: 70px;
  height: 70px;
}

.home-mid-title {
  font-size: 12px;
  color: #9d9d9d;
  padding: 0.2rem 0 0.15rem;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  bottom: 1rem;
  text-overflow: ellipsis;
  line-height: 1.2;
}

.home-mid-price {
  font-size: 13px;
  color: red;
  margin-left: 7px;
  text-align: center;
}

.home-mid-ul {
  display: flex;
  margin-top: 3px;
  width: 100%;
}

.home-mid-li1-img img {
  width: 100%;
  height: 282px;
}

.home-mid-content-img {
  width: 100%;
  height: 141px;
}

.home-mid-content2 {
  width: 100%;
  height: 280px;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  flex-direction: row;
}

.home-mid-ul2 {
  width: 50%;
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  flex-direction: row;
}

.home-mid-li3 {
  width: 100%;
  height: 140px;
}

.home-mid-li3 img {
  width: 100%;
  height: 140px;
}

.channel-floor-list3 {
  margin-top: 3px;
  width: 100%;
  height: 205px;
}

.home-mid-ul3 {
  display: flex;
  flex-shrink: 0;
  flex-wrap: wrap;
  flex-direction: row;
  /* text-align: center; */
}

.home-mid-li4 {
  width: 32%;
  height: 205px;
  background: #f9f9f9;
  border-radius: 15px;
  margin-left: 4px;
  text-align: center;
}

.channel-floor-img {
  width: 90%;
  height: 103px;
  margin: 0 auto;
}

.home-mid-li4 img {
  margin-top: 15px;
  width: 75%;
  height: 83px;
}

.channel-floor-title {
  margin-top: 25px;
}

.channel-floor-title,
.channel-floor-data,
.channel-floor-price {
  font-size: 13px;
}

.channel-floor-data,
.channel-floor-title {
  color: #9b9b9b;
}

.channel-floor-data {
  padding: 0.2rem 0 0.15rem;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  bottom: 1rem;
  text-overflow: ellipsis;
  line-height: 1.2;
}

.goodsRecommend-head {
  width: 100%;
  height: 59px;
  margin-top: 20px;
}

.goodsRecommend-head h2 {
  text-align: center;
  font-weight: 300;
}

.home-mid-phone {
  width: 100%;
  height: 260px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.home-mid-phone-content {
  width: 50%;
  height: 100%;
}

.home-mid-phone-content-top {
  height: 80%;
  width: 95%;
  background-color: #f9f9f9;
  border-radius: 30px;
  margin: 5px;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
}

.home-mid-phone-content-top > img {
  width: 140px;
  height: 140px;
  margin-top: 25px;
}

.home-mid-phone-content-top>p{
  display: inline-block;
  height: 60px;
  width: 100%;
  margin-top: 10px;
  font-size: 14px;
  line-height: 30px;
}

.home-mid-phone-content-bottom {
  height: 20%;
  width: 100%;
  text-align: center;
}

.home-mid-phone-content-bottom p {
  line-height: 23px;
}

.home-bottom {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #4a4a4a;
}

.home-bottom-title {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: #4a4a4a;
  border-bottom: 1px solid #f8f8f8;
  background: #fff;
}

.home-bottom-line {
  width: 100%;
  height: 20px;
  background-color: #f9f9f9;
}

.home-bottom-information {
  width: 100%;
  height: 200px;
  background: #fff;
}

.home-bottom-information-top {
  width: 100%;
  height: 85px;
  text-align: center;
}

.home-bottom-information-bottom {
  width: 100%;
  height: 115px;
  text-align: center;
}

.home-bottom-information-bottom > p {
  color: #9b9b9b;
  font-size: 12px;
}

</style>