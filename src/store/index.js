import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartlist: [
      {
        img: require("../assets/Cartimg/cartimg1.png"),
        title: "HUAWEI P40 Pro",
        price: 6488,
        carttitle1: "HUAWEI P40 Pro 5G 全网通 8GB+256GB（零度白）",
        carttitle2: "零度白,5G全网通 8GB+256GB,官方标配",
        cartnum: 1,
        cartimg: require("../assets/Cartimg/cartimg7.png"),
        select: true,
      },
      {
        img: require("../assets/Cartimg/cartimg2.png"),
        title: "荣耀30 Pro",
        price: 1488,
        carttitle1:
          "荣耀30 Pro 50倍超稳远摄 超感光高清夜拍 双模5G 麒麟990 5G SoC 8GB+128GB 幻夜黑",
        carttitle2: "幻夜黑,Pro 8GB+128GB,官方标配",
        cartnum: 1,
        cartimg: require("../assets/Cartimg/cartimg8.png"),
        select: true,
      },
      {
        img: require("../assets/Cartimg/cartimg3.png"),
        title: "Mate 30 Pro 5G",
        price: 2488,
        carttitle1:
          "HUAWEI Mate 30 Pro 5G 全网通 8GB+256GB 麒麟990 双4000万徕卡电影四摄（星河银）",
        carttitle2: "星河银,5G全网通,8GB+256GB,官方标配",
        cartnum: 1,
        cartimg: require("../assets/Cartimg/cartimg9.png"),
        select: true,
      },
      {
        img: require("../assets/Cartimg/cartimg4.png"),
        title: "荣耀X10",
        price: 3488,
        carttitle1:
          "荣耀X10 麒麟820双模5G九频 90Hz全速屏 RYYB高感光摄影 6GB+128GB（竞速蓝）",
        carttitle2: "X10,竞速蓝,全网通 6GB+128GB,官方标配",
        cartnum: 1,
        cartimg: require("../assets/Cartimg/cartimg10.png"),
        select: true,
      },
      {
        img: require("../assets/Cartimg/cartimg5.png"),
        title: "HUAWEI nova 7 SE 5G",
        price: 4488,
        carttitle1:
          "HUAWEI nova 7 SE 5G 6400万高清四摄 40W超级快充 麒麟820 5G SoC芯片 8GB+128GB 全网通版（银月星辉）",
        carttitle2: "银月星辉,5G全网通 8GB+128GB,官方标配",
        cartnum: 1,
        cartimg: require("../assets/Cartimg/cartimg11.png"),
        select: true,
      },
      {
        img: require("../assets/Cartimg/cartimg6.png"),
        title: "荣耀30S",
        price: 5488,
        carttitle1:
          "荣耀30S 麒麟820 5G芯片 3倍光学变焦 20倍数字变焦 8GB+128GB 蝶羽翠",
        carttitle2: "蝶羽翠,全网通 8GB+128GB,官方标配",
        cartnum: 1,
        cartimg: require("../assets/Cartimg/cartimg12.png"),
        select: true,
      },
    ],
    detaillist: [],
    detailindex: 0,
  },
  mutations: {},
  actions: {},
  modules: {},
});
