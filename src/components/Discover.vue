<template>
    <div class="discover">
        <div>
            <div class="header">
                <h1>发现频道</h1>
            </div>
            <div class="hr-40"></div>
        </div>
        <div class="findIndex">
            <ul class="clearfix">
                <li>
                    <img src="../assets/Homeimg/discover-head-img.png" alt="" />
                    <p>商城公告</p>
                </li>
                <li>
                    <img
                        src="../assets/Homeimg/discover-head-img1.png"
                        alt=""
                    />
                    <p>邀请有礼</p>
                </li>
                <li>
                    <img
                        src="../assets/Homeimg/discover-head-img2.png"
                        alt=""
                    />
                    <p>直播预告</p>
                </li>
                <li>
                    <img
                        src="../assets/Homeimg/discover-head-img3.png"
                        alt=""
                    />
                    <p>粉丝互动</p>
                </li>
                <li>
                    <img
                        src="../assets/Homeimg/discover-head-img4.png"
                        alt=""
                    />
                    <p>华为众测</p>
                </li>
            </ul>
        </div>
        <div class="findList">
            <header class="h">
                <span>商城头条</span>
                <a>
                    声明
                    <i class="icon-msg-tip"></i>
                </a>
            </header>

            <div class="findCategoryList">
                <ul>
                    <li class="firstimg">
                        <img
                            src="../assets/Homeimg/discover-head-tab1.png"
                            alt=""
                        />
                    </li>
                    <li>
                        <img
                            src="../assets/Homeimg/discover-head-tab2.png"
                            alt=""
                        />
                    </li>
                    <li>
                        <img
                            src="../assets/Homeimg/discover-head-tab3.png"
                            alt=""
                        />
                    </li>

                    <li>
                        <img
                            src="../assets/Homeimg/discover-head-tab4.png"
                            alt=""
                        />
                    </li>
                    <li>
                        <img
                            src="../assets/Homeimg/discover-head-tab5.png"
                            alt=""
                        />
                    </li>
                </ul>
            </div>
            <div class="findNewsList">
                <div v-for="item in findnewsList">
                    <a :href="item.link">
                        <div class="bg">
                            <img :src="item.img" alt="" />
                        </div>
                        <p class="p-name">{{ item.name }}</p>
                        <p class="p-promotion">{{ item.promotion }}</p>
                        <p class="p-other">
                            <span>{{ item.time }}</span>
                            <em>{{ item.view }}&nbsp;阅读</em>
                        </p>
                    </a>
                </div>
                <div class="more">
                    <a> 发现更多商城头条 </a>
                </div>
            </div>
        </div>
        <div class="findList">
            <header class="h">
                <span>新摄会</span>
            </header>
            <div class="photo">
                 <div class="large">
                     <img src="../assets/Homeimg/photo1.jpg">
                     <p>来自 华为nova 7系列</p>
                 </div>
                 <div class="small">
                      <img src="../assets/Homeimg/photo2.jpg">
                     <p>来自 华为nova 7系列</p>
                 </div>
                 <div class="small">
                      <img src="../assets/Homeimg/photo3.jpg">
                     <p>来自 HUAWEI P40系列</p>
                 </div>
                 <div class="small">
                      <img src="../assets/Homeimg/photo4.jpg">
                     <p>来自 HUAWEI Mate30 系列</p>
                 </div>
                 <div class="middle">
                      <img src="../assets/Homeimg/photo5.jpg">
                     <p>来自 华为nova 7系列</p>
                 </div>
            </div>
                <div class="more">
                    <a> 发现更多新摄会 </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            findnewsList: [],
        };
    },
    created() {
        let that = this;
        let url = "http://127.0.0.1:5500/public/data/findnews.json";
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();

        xhr.onload = function () {
            console.log(xhr.response);
            that.findnewsList = JSON.parse(xhr.response).findnewsList;
        };
    },
};
</script>

<style scoped>
.discover {
    width: 100%;
    height: 100%;
    background: #fff;
    user-select: none;
    overflow-y: auto;
    overflow-x: hidden;
}
.header {
    background: #fff;
    height: 2rem;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 0.8rem;
    z-index: 100;
}
.header h1 {
    display: block;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    font-size: 0.9rem;
    color: #191919;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.hr-40 {
    height: 2rem;
}
.findIndex {
    padding: 0 0.8rem;

    /* position: relative; */
}
.findIndex ul {
    display: flex;
}
.findIndex ul li {
    flex: 1;
    padding: 1rem 0;
    text-align: center;
    display: block;
}
.findIndex ul li img {
    width: 2rem;
    height: 2rem;
}
.findIndex ul li p {
    font-size: 0.55rem;
    color: #9b9b9b;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* line-height: 1.3; */
    /* padding-top: 0.2rem; */
}
.findList {
    background-color: #fff;
    margin-bottom: 0.4rem;
}
.findList .h {
    padding: 0.4rem 0 0.6rem 0;
    font-size: 0.9rem;
    color: #333333;
    position: relative;
    text-align: center;
}
.findList .h a {
    font-size: 0.55rem;
    color: #999999;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    top: 0.7rem;
    right: 0.8rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: box;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
}
.findList .h a .icon-msg-tip {
    width: 0.65rem;
    height: 0.65rem;
    background-image: url(../assets/Homeimg/i.png);
    background-repeat: no-repeat;
    -webkit-background-size: contain;
    background-size: contain;
    display: inline-block;
    margin-left: 0.2rem;
}
.findCategoryList ul {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: box;
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
}
.findCategoryList ul .firstimg {
    margin-left: 0.3rem;
}
.findCategoryList ul li {
    display: inline-block;
    min-width: 4.75rem;
    padding-bottom: 0.25rem;
    text-align: center;
}
.findCategoryList ul li img {
    width: 4.5rem;
    height: auto;
    display: block;
}

.findNewsList > div {
    height: auto;
    background-color: #fff;
    padding-bottom: 1rem;
    
}
.findNewsList .bg{
    display: flex;
    justify-content: center;
}
.findNewsList .bg img {
    height: 7.1rem;
    margin: 0 0.3rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 0.6rem;
    background-position: center;
    background-repeat: no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  
    -webkit-border-radius: 0.5rem;
    border-radius: 0.5rem;
    
}
.findNewsList .p-name {
    font-size: 0.7rem;
    line-height: normal;
    margin: 0 0.8rem 0.3rem 0.8rem;
    padding: 0;
    height: auto;
    color: #333;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    padding-right: 0.2rem;
}
.findNewsList .p-promotion {
    font-size: 0.6rem;
    color: #666666;
    padding: 0 0.8rem;
    line-height: normal;
    word-break: break-all;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.findNewsList .p-other {
    margin: 0.5rem 0.8rem 0;
    line-height: normal;
    position: relative;
    padding: 0;
    color: #999999;
    font-size: 0.6rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flexbox;
    display: box;
    display: flex;
}
.findNewsList .p-other span {
    -webkit-box-flex: 1;
    -moz-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
}
 .more {
    padding: 0.3rem 0 0.6rem 0;
    display: table;
    margin: 0 auto;
}
.more a {
    display: flex;
    font-size: 0.7rem;
    color: #4a4a4a;
    height: 1.2rem;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.findNewsList .more a::after {
    content: "";
    display: inline-block;
    background: url(../assets/Homeimg/more.png) no-repeat center;
    -webkit-background-size: contain;
    background-size: contain;
    width: 0.6rem;
    height: 1.2rem;
    margin-left: 0.1rem;
}
.photo{
    height: 14rem;
    margin: 0 0.3rem;
    margin-bottom: 1rem;
    -webkit-border-radius: 0.5rem;
    border-radius: 0.5rem;
    overflow: hidden; 
}
.photo div {
    float: left;
    position: relative;
}
.photo .large{
    width: 62%;
    height: 9.3rem;
    margin-right: 0.1rem;
}
.photo .small{
    height: 4.6rem;
    margin-bottom: 0.1rem;
    width: 37%;
}
.photo .middle{
    width: 62%;
    margin-left: 0.1rem;
    height: 4.6rem;
}
.photo img{
    height: 100%;
    width: 100%;
}
.photo div p{
    position: absolute;
    bottom: 0.4rem;
    left: 0.5rem;
    right: 0.5rem;
    font-size: 0.55rem;
    color: #ffffff;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
    line-height: normal;
}
</style>