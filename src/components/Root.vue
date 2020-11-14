<template>
    <div class="content-box">
        <div class="content">
            <router-view></router-view>
        </div>
        <div class="foot">
            <div class="router-btn">
                <div class="footdiv">
                    <img
                        v-if="this.$route.params.id == '01'"
                        src="../assets/Homeimg/icon1a.png"
                        alt=""
                        class="routeimg"
                    />
                    <img v-else src="../assets/Homeimg/icon1.png" alt="" />
                </div>
                <router-link to="/home/01">首页</router-link>
            </div>
            <div class="router-btn">
                <div class="footdiv">
                    <img
                        v-if="this.$route.params.id == '02'"
                        src="../assets/Homeimg/icon2a.png"
                        alt=""
                    />
                    <img v-else src="../assets/Homeimg/icon2.png" alt="" />
                </div>
                <router-link to="/sort/02">分类</router-link>
            </div>
            <div class="router-btn">
                <div class="footdiv">
                    <img
                        v-if="this.$route.params.id == '03'"
                        src="../assets/Homeimg/icon3a.png"
                        alt=""
                    />
                    <img v-else src="../assets/Homeimg/icon3.png" alt="" />
                </div>
                <router-link to="/discover/03">发现</router-link>
            </div>
            <div class="router-btn">
                <div class="footdiv">
                    <img
                        v-if="this.$route.params.id == '04'"
                        src="../assets/Homeimg/icon4a.png"
                        alt=""
                    />
                    <img v-else src="../assets/Homeimg/icon4.png" alt="" />
                </div>
                <router-link to="/cart/04">
                购物车
                </router-link>
                <div class="cartnum" v-if="$store.state.Totalcartnum > 0">
                    {{ $store.state.Totalcartnum }}
                </div>
            </div>
            <div class="router-btn">
                <div class="footdiv">
                    <img
                        v-if="this.$route.params.id == '05'"
                        src="../assets/Homeimg/icon5a.png"
                        alt=""
                    />
                    <img v-else src="../assets/Homeimg/icon5.png" alt="" />
                </div>
                <router-link to="/me/05">我</router-link>
            </div>
        </div>
    </div>
</template>

<script>

import Vue from "vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default {};
</script>

<style>
     .content-box{
        height: 100%;
        width: 100%;
        position: absolute;
        bottom: 0;
    }

    .content{
        height: 92%;
        width: 100%;
    }

    .foot{
        height: 8%;
        width: 100%;
        display: flex;
        flex-direction: row;
        background-color: rgb(249, 249, 249);
    }

    .router-btn{
        width: 20%;
        height: 100%;
        text-align: center;
        position: relative;
    }

    .router-btn a{
        display: inline-block;
        width: 100%;
        font-size: 12px;
        color: #787878;

    }

    .footdiv{
        height: 35px;
        width: 100%;
        text-align: center;
    }

    .footdiv img{
        margin-top: 5px;
        height: 30px;
        width: 30px;
    }

    .router-btn>.router-link-exact-active{
        color: #ca161f;
    }

    .footdiv>.routeimg{
        position: absolute;
        top: -5px;
        left: 15px;
        width: 55px;
        height: 55px;
    }

    .cartnum{
        width: 15px;
        height: 15px;
        background-color: #ca161f;
        text-align: center;
        line-height: 15px;
        color: white;
        font-size: 12px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: 20px;
    }
</style>