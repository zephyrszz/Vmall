<template>
    <div class="search">
        <div class="header">
            <div class="back">
                <img
                    src="../assets/Homeimg/back.png"
                    alt=""
                    id="btn-back"
                    @click="goback"
                />
            </div>
            <div class="search-input">
                <i class="icon-search"></i>
                <input
                    type="text"
                    placeholder="Mate 40"
                    v-model="value"
                    id="input"
                />
                <i
                    class="icon-clear"
                    id="clear"
                    :style="{ display: a }"
                    @click="clear"
                ></i>
            </div>
            <div class="sou">
                <span>搜索</span>
            </div>
        </div>
        <div class="hr-40"></div>
        <div class="listPage">
            <div class="selectList" v-show="isshow">
                <ul>
                    <li v-for="item in selectList"><span>{{ item }}</span></li>
                </ul>
            </div>
        </div>
        <div class="search-hot" v-show="sshow">
            <header><p>热门搜索</p></header>
            <div class="hotlist">
                <ul>
                    <li v-for="(item, index) in hotList">
                        <span :key="index" @click="ss(index)">{{ item }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: "",
            a: "none",
            hotList: [
                "Mate40",
                "荣耀30",
                "头戴耳机",
                "荣耀GS Pro",
                "HUAWEI GT 2 Pro",
                "HUAWEI Sound",
                "nova 7",
                "P40",
                "耳机",
                "手表",
                "Mate30",
                "平板",
            ],
            sList:[
                "Mate40 系列",
                "Mate40",
                "Mate40 pro",
                "Mate40 pro 保时捷",
                "mate40 系列",
                "荣耀30",
                "头戴耳机",
                "荣耀GS Pro",
                "HUAWEI GT 2 Pro",
                "HUAWEI GT 2 pro",
                "HUAWEI Sound",
                "huwei GT 2 Pro",
                "huwei GT 2 pro",
                "huwei Sound",
                "nova 7",
                "P40",
                "p40",
            ],
            selectList: [],
            isshow: true,
            sshow:true,
        };
    },
    watch: {
        value: function (newVal, oldval) {
            if (newVal != "") {
                this.a = "block";
                 this.isshow = true;
                  this.sshow=false
                var sList = [];
                this.sList.forEach((item, index) => {
                    if (item.indexOf(newVal) >= 0) {
                        sList.unshift(item);
                    }
                });
                this.selectList = sList;
                
            } else {
                this.a = "none";
                this.isshow = false;
                this.sshow=true
            }
        },
        
    },
    methods: {
        clear() {
            this.value = "";
        },
        goback() {
            this.$router.go(-1);
        },
        ss(index) {
            this.value = this.hotList[index];
            console.log(this.value)
        },
    },
};
</script>

<style scoped>
.search {
    width: 100%;
    height: 100%;
    position: relative;
}
.header {
    background-color: #ffffff;
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    min-height: 2rem;
    z-index: 300;
    margin: 0 auto;
    max-width: 720px;
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
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    user-select: none;
}
#btn-back {
    margin-left: 0.8rem;
    width: 1.2rem;
    height: 1.2rem;
}
.search-input {
    position: relative;
    background-color: rgba(155, 155, 155, 0.1);
    flex: 1;
    width: 100%;
    height: 1.6rem;
    display: flex;
    align-items: center;
    margin-left: 0.4rem;
    border-radius: 1rem;
}
.search-input .icon-search {
    height: 0.7rem;
    width: 0.7rem;
    padding: 0;
    margin-left: 0.7rem;
    display: block;
    background-size: 0.7rem 0.7rem;
    background: url(../assets/Homeimg/sousuo.png);
}
.search-input input {
    height: 1.6rem;
    background-color: transparent;
    border: 0;
    padding: 0 0.4rem 0 0.5rem;
    outline: medium;
}
.search-input .icon-clear {
    background: url(../assets/Homeimg/clear.png) no-repeat 50%;
    display: block;
    height: 0.9rem;
    width: 0.9rem;
    background-size: 100% 100%;
    position: absolute;
    right: 0.6rem;
    top: 25%;
}
.sou {
    padding: 0 0.4rem;
    display: flex;
    align-items: center;
    display: block;
    position: relative;
    margin: 0 0.3rem;
    height: 1.5rem;
    width: auto;
}
.sou span {
    text-align: center;
    font-size: 0.65rem;
    color: #4c4c4c;
}
.hr-40 {
    height: 2rem;
}
.search-hot {
    padding: 0.8rem;
    margin-bottom: 0.4rem;
    background-color: #fff;
    user-select: none;
    /* z-index: 100; */
}
.search-hot header {
    padding: 0.25rem 0 0.1rem;
}
.search-hot header p {
    font-size: 0.65rem;
    font-weight: bold;
}
.search-hot .hotlist {
    max-height: 5.6rem;
    margin-left: -0.4rem;
    overflow: hidden;
}
.search-hot .hotlist li {
    max-width: 100%;
    float: left;
    padding: 0.35rem 0;
}
.search-hot .hotlist li span {
    font-size: 0.55rem;
    line-height: 1.3rem;
    height: 1.2rem;
    text-align: center;
    margin-left: 0.4rem;
    padding: 0 0.6rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-border-radius: 0.1rem;
    border-radius: 0.1rem;
    background-color: #f9f9f9;
}
.listPage{
    position: absolute;
    top: 2rem;
    width: 100%;
    /* height: 100%; */
    user-select: none;
}
.selectList{
    margin: 0;
    background-color: #fff;
}
.selectList li{
    border-bottom: 1px solid #d2d2d2;
    padding: 0 0.6em;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
}
.selectList li span{
    font-size: 0.7em;
    line-height: 3.57;
    white-space: nowrap;
    color: #333;
}
</style>