<template>
    <div class="content">
        <div class="detail-content">
            <div
                v-for="(item, index) in detaillist"
                :key="index"
                class="detail-content-box"
            >
                <div class="detail-content-box1" @scroll="showhead">
                    <div class="detail-hiddenbox" v-show="headshow">
                        <span
                            style="fontsize: 25px; color: #333"
                            @click="goback"
                            ><img
                                class="back"
                                src="../assets/Homeimg/back.png"
                                alt=""
                        /></span>
                        <span class="nav">
                            <a href="#goods" :class="{active: active===0}">商品</a>
                            <a href="#comments" :class="{active: active===1}">评价</a>
                            <a href="#detaildata1" :class="{active: active===2}">参数</a>
                            <a href="#detaildata2" :class="{active: active===3}">详情</a>
                        </span>

                        <span
                            class="detail-hiddenbox-span"
                            @click="changerouter"
                            >···</span
                        >
                    </div>
                    <div class="changerouter" v-show="changeroute">
                        <div class="changerouter-box" @click="gohome">首页</div>
                        <div class="changerouter-box" @click="gosearch">
                            搜索
                        </div>
                        <div class="changerouter-box" @click="gosort">分类</div>
                        <div class="changerouter-box" @click="gocart">
                            购物车
                        </div>
                        <div class="changerouter-box" @click="gome">我的</div>
                    </div>
                    <a @click="goback" class="backbtn"
                        ><img src="../assets/Homeimg/back1.png" alt=""
                    /></a>
                    <a class="sortbox" @click="changerouter">···</a>
                    <div class="swiper-box">
                        <swiper
                            ref="mySwiper"
                            :options="swiperOptions"
                            class="swiperBox"
                        >
                            <swiper-slide>
                                <img :src="item.cartimg" alt />
                            </swiper-slide>
                            <swiper-slide>
                                <img
                                    src="https://res.vmallres.com/pimages//product/6901443381517//428_428_0410C56E4DFF825A527CBD3369F4D394F1699311CF51F864mp.png"
                                    alt
                                />
                            </swiper-slide>
                            <swiper-slide>
                                <img
                                    src="https://res.vmallres.com/pimages//product/6901443381517/group//428_428_E55D936FFA8600A8720C936F0D2B346B2F30EAB57ACD12BD.png"
                                    alt
                                />
                            </swiper-slide>
                            <div
                                class="swiper-pagination"
                                slot="pagination"
                            ></div>
                        </swiper>
                    </div>
                    <div class="goods-detail" id="goods">
                        <p
                            style="
                                color: #ca141d;
                                font-size: 22px;
                                font-weight: 700;
                                lineheight: 30px;
                                margintop: 15px;
                            "
                        >
                            ¥{{ item.price }}
                        </p>
                        <p
                            style="
                                font-size: 0.75em;
                                font-weight: 700;
                                line-height: 1.3em;
                            "
                        >
                            {{ item.carttitle1 }}
                        </p>
                        <p style="font-size: 13px">
                            <span style="color: #ca141d">享受3期分期免息</span>
                            <span style="color: #888888; line-height: 20px">
                                麒麟990 5G SoC芯片 5000万超感知徕卡四摄
                                50倍数字变焦 全网通5G手机
                            </span>
                        </p>
                    </div>
                    <div class="goods-detail1">
                        <p class="goods-detail1-p">促销</p>
                        <div class="goods-detail1-right">
                            <p style="margin-top: 17px">
                                <span>一站式换新</span>APP专享,最高补贴500元
                            </p>
                            <p>
                                <span>整点赠礼</span
                                >0点/10点/16点/20点下单前100名赠...
                            </p>
                            <p>
                                <span>商品赠券</span>
                                <span>分期免息</span>
                                <span>赠送积分</span>
                            </p>
                        </div>
                    </div>
                    <div class="goods-detail-line"></div>
                    <div class="goods-detail-select">
                        <div class="goods-detail-select-color">
                            <p class="goods-detail1-p">颜色</p>
                            <div class="goods-detail1-right">
                                <p style="margintop: 15px">
                                    <span
                                        style="
                                            border: 1px solid #ca151e;
                                            color: #ca151e;
                                            margin-top: 20px;
                                        "
                                        >亮黑色</span
                                    >
                                    <span>冰霜银</span>
                                    <span>零度白</span>
                                </p>
                                <p>
                                    <span>深海蓝</span>
                                    <span>晨曦金</span>
                                </p>
                            </div>
                        </div>
                        <div class="goods-detail-select-version">
                            <p class="goods-detail1-p">版本</p>
                            <div class="goods-detail1-right">
                                <p style="margintop: 15px">
                                    <span
                                        style="
                                            border: 1px solid #ca151e;
                                            color: #ca151e;
                                            margin-top: 20px;
                                        "
                                        >5G全网通 8GB+128GB</span
                                    >
                                </p>
                                <p>
                                    <span>5G全网通 8GB+256GB</span>
                                </p>
                                <p>
                                    <span>5G全网通 8GB+512GB</span>
                                </p>
                            </div>
                        </div>
                        <div class="goods-detail-select-type">
                            <p class="goods-detail1-p" style="lineheight: 40px">
                                类型
                            </p>
                            <div class="goods-detail1-right">
                                <p style="margin-top: 10px">
                                    <span
                                        style="
                                            border: 1px solid #ca151e;
                                            color: #ca151e;
                                        "
                                        >官方标配</span
                                    >
                                    <span style="color: rgb(216, 216, 216)"
                                        >限量套装</span
                                    >
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="goods-detail-comments" id="comments">
                        <div class="goods-detail-comments-head">
                            <span
                                style="
                                    font-weight: 700;
                                    font-size: 16px;
                                    margin-left: 20px;
                                "
                                >用户评价(41136)</span
                            >
                            <span style="font-size: 14px; marginright: 10px">
                                <span style="color: #ca141d">99%</span>好评
                            </span>
                        </div>

                        <div class="goods-detail-comments-bottom">
                            <ul>
                                <li class="goods-detail-comments-bottom-box">
                                    <img
                                        src="../assets/Cartimg/cartcomments1.png"
                                        alt
                                    />
                                </li>
                                <li class="goods-detail-comments-bottom-box">
                                    <img
                                        src="../assets/Cartimg/cartcomments2.png"
                                        alt
                                    />
                                </li>
                            </ul>
                        </div>
                        <div class="goods-detail-comments-img" id="detaildata1">
                            <img
                                src="../assets/Cartimg/cartcomments3.png"
                                alt
                            />
                        </div>
                        <div
                            class="goods-detail-comments-img1"
                            id="detaildata2"
                        >
                            <img
                                src="../assets/Cartimg/cartcomments4.png"
                                alt
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="detail-content-bottom">
            <div class="detail-content-bottom-box" @click="gohome">
                <img src="../assets/Cartimg/cartdetailimg1.png" alt />
            </div>
            <div class="detail-content-bottom-box">
                <img src="../assets/Cartimg/cartdetailimg2.png" alt />
            </div>
            <div @click="gocart" class="detail-content-bottom-box">
                <img src="../assets/Cartimg/cartdetailimg3.png" alt />
                <div class="cartnum" v-if="$store.state.Totalcartnum > 0">
                    {{ $store.state.Totalcartnum }}
                </div>
            </div>
            <span @click="goshopping2" class="pushcart">加入购物车</span>
            <span class="gocart">立即购买</span>
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
                },
                loop: true,
                autoplay: true,
            },
            headshow: false,
            changeroute: false,
            navList: ["商品", "评价", "参数", "详情"],
            active: 0,
        };
    },

    computed: {
        detaillist() {
            return this.$store.state.detaillist;
        },
        detailindex() {
            return this.$store.state.detailindex;
        },
    },

    created() {
        let that = this;
        that.update();
    },

    methods: {
        goback() {
            this.$store.state.detaillist = [];
            this.$router.go(-1);
        },
        goshopping2() {
            this.$store.commit("goshopping2");
        },
        update() {
            this.$store.commit("update");
        },
        gocart() {
            this.$router.push("/cart/04");
        },
        gohome() {
            this.$router.push("/home/01");
        },
        gosearch() {
            this.$router.push("/search/03");
        },
        gosort() {
            this.$router.push("/sort/02");
        },
        gome() {
            this.$router.push("/me/05");
        },
        showhead(event) {
            if (event.target.scrollTop > 100) {
                this.headshow = true;
                this.active = 0;
            }
            if (event.target.scrollTop < 100) {
                this.headshow = false;
                this.active = 0;
            }
            if (event.target.scrollTop > 750) {
                this.headshow = true;
                this.active = 1;
            }
            if (event.target.scrollTop > 950) {
                this.headshow = true;
                this.active = 2;
            }
            if (event.target.scrollTop > 1500) {
                this.headshow = true;
                this.active = 3;
            }

            this.changeroute = false;
        },
        changerouter() {
            this.changeroute = !this.changeroute;
        },
    },
};
</script>

<style scoped>
.content {
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    user-select: none;
}
.detail-content-bottom-title {
    /* display: inline-block; */
    width: 100%;
    height: 50%;
    font-size: 12px;
}

.active {
    border-bottom: 2px solid red;
}
.detail-content-bottom-img {
    width: 100%;
    height: 50%;
}

.detail-content {
    width: 100%;
    height: 92%;
}

.detail-content-box {
    height: 100%;
    width: 100%;
}

.detail-content-box1 {
    height: 100%;
    width: 100%;
    overflow: auto;
    position: relative;
}

.detail-hiddenbox {
    position: absolute;
    top: 0;
    height: 46px;
    width: 100%;
    line-height: 46px;
    background-color: white;
    z-index: 100;
    position: fixed;
}

.detail-hiddenbox span {
    margin-left: 30px;
    margin-right: 50px;
}

.detail-hiddenbox a {
    width: 13%;
    margin: 0 10px;
    color: #191919;
    font-size: 17px;
}

.detail-hiddenbox-span {
    font-size: 30px;
    color: #333;
    position: absolute;
    right: -25px;
}

.changerouter {
    /* position: absolute; */
    top: 50px;
    right: 10px;
    width: 120px;
    height: 235px;
    background-color: white;
    z-index: 100;
    position: fixed;
    border-radius: 0.25rem;
    box-shadow: 0rem 0rem 0.25rem 0rem rgba(0, 0, 0, 0.1);
}

.changerouter-box {
    height: 20%;
    width: 100%;
    font-size: 0.7rem;
    text-align: center;
    line-height: 47px;
    border-bottom: 1px solid rgba(213, 213, 213, 0.5);
}

.detail-content-bottom {
    display: flex;
    height: 8%;
    width: 100%;
    line-height: 58px;
}

.swiper-box {
    width: 100%;
    height: 391px;
}

.swiper-pagination {
    margin-left: 150px;
}

.swiperBox,
.swiperBox img {
    width: 100%;
    height: 391px;
}

.goods-detail {
    width: 100%;
    height: 101px;
}

.goods-detail p {
    margin-left: 25px;
}

.goods-detail1 {
    width: 100%;
    height: 101px;
    display: flex;
}

.goods-detail1 span {
    display: inline-block;
    height: 16px;
    padding: 0 5px;
    text-align: center;
    line-height: 16px;
    margin-right: 15px;
    font-size: 12px;
    border: 1px solid rgb(247, 172, 176);
    border-radius: 10px;
    color: #ef5a62;
}

.goods-detail1-right p {
    line-height: 25px;
}

.goods-detail1 p {
    font-size: 14px;
}

.goods-detail1-p {
    display: inline-block;
    width: 20%;
    height: 100%;
    font-weight: 700;
    text-align: center;
    line-height: 60px;
    font-size: 16px;
}

.goods-detail1-right {
    height: 100%;
    width: 80%;
}

.goods-detail-select-color {
    height: 72px;
    width: 100%;
    display: flex;
}

.goods-detail-select-version {
    height: 108px;
    width: 100%;
    display: flex;
}

.goods-detail-select-type {
    height: 40px;
    width: 100%;
    display: flex;
}

.goods-detail-select span {
    margin-left: 25px;
    margin-top: 7px;
    display: inline-block;
    height: 20px;
    line-height: 20px;
    border: 1px solid rgb(216, 216, 216);
    padding: 0 8px;
    border-radius: 15px;
    font-size: 14px;
}

.goods-detail-line {
    width: 90%;
    height: 1px;
    margin: 0 auto;
    background: #e3e3e3;
}

.goods-detail-select {
    width: 100%;
    height: 258px;
}

.goods-detail-comments {
    width: 100%;
    height: 300px;
}

.goods-detail-comments-head {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 46px;
    line-height: 46px;
}

.goods-detail-comments-mid {
    width: 100%;
    height: 50px;
}

.goods-detail-comments-mid span {
    display: inline-block;
    margin-left: 15px;
    width: 20%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #f5f5f5;
    margin-top: 15px;
    border-radius: 15px;
}

.goods-detail-comments-bottom,
.goods-detail-comments-bottom > ul {
    height: 142px;
    width: 100%;
    display: flex;
    overflow-x: auto;
}

.goods-detail-comments-bottom-box {
    display: inline-block;
    width: 85%;
    height: 100%;
    flex-shrink: 0;
}

.goods-detail-comments-bottom-box img {
    width: 100%;
    height: 100%;
}

.goods-detail-comments-img,
.goods-detail-comments-img img {
    width: 100%;
    height: 617px;
    margin-top: 30px;
}

.goods-detail-comments-img1,
.goods-detail-comments-img1 img {
    width: 100%;
    height: 1784px;
    margin-top: 30px;
}

.detail-content-bottom span {
    display: inline-block;
    width: 25%;
    height: 75%;
    margin-top: 7px;
    line-height: 44px;
    text-align: center;
    /* border-radius: 30px; */
    font-size: 17px;
    color: white;
}
.detail-content-bottom {
    position: fixed;
    height: 8%;
    width: 100%;
    background: #fff;
}
.detail-content-bottom .detail-content-bottom-box {
    display: inline-block;
    height: 100%;
    width: 16%;
    text-align: center;
    /* position: fixed; */
}

.cartnum {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    text-align: center;
    line-height: 15px;
    font-size: 12px;
    background-color: #ca141d;
    position: absolute;
    top: 0;
    right: 12px;
    color: white;
}

.pushcart {
    border-top-left-radius: 36px;
    border-bottom-left-radius: 36px;
    background-image: linear-gradient(90deg, #ff814a 0%, #f45333 100%);
}

.gocart {
    border-top-right-radius: 36px;
    border-bottom-right-radius: 36px;
    background-image: linear-gradient(90deg, #e43e2d 0%, #ca141d 100%);
}

.backbtn {
    position: absolute;
    display: inline-block;
    width: 27.5px;
    height: 27.5px;
    border-radius: 50%;
    background-color: #7f7f7f;
    left: 20px;
    top: 15px;
    z-index: 100;
    text-align: center;
    font-size: 25px;
    line-height: 27.5px;
    color: white;
}
.backbtn img {
    width: 27.5px;
    height: 27.5px;
    position: absolute;
    left: 8px;
}
.back {
    width: 25.5px;
    /* height: 27.5px; */
    position: absolute;
    left: 20px;
    top: 13px;
}
.sortbox {
    position: absolute;
    display: inline-block;
    width: 27.5px;
    height: 27.5px;
    border-radius: 50%;
    background-color: #7f7f7f;
    right: 20px;
    top: 15px;
    z-index: 100;
    text-align: center;
    font-size: 25px;
    line-height: 27.5px;
    color: white;
}
</style>
