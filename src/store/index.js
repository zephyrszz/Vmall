import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
      cartlist:[
          {
              "img":require("../assets/Cartimg/cartimg1.png"),
              "title":"HUAWEI P40 Pro",
              "price":6488,
              "carttitle1":"HUAWEI P40 Pro 5G 全网通 8GB+256GB（零度白）",
              "carttitle2":"零度白,5G全网通 8GB+256GB,官方标配",
              "cartnum":1,
              "cartimg":require("../assets/Cartimg/cartimg7.png"),
              "select":true
          },
          {
              "img":require("../assets/Cartimg/cartimg2.png"),
              "title":"荣耀30 Pro",
              "price":1488,
              "carttitle1":"荣耀30 Pro 50倍超稳远摄 超感光高清夜拍 双模5G 麒麟990 5G SoC 8GB+128GB 幻夜黑",
              "carttitle2":"幻夜黑,Pro 8GB+128GB,官方标配",
              "cartnum":1,
              "cartimg":require("../assets/Cartimg/cartimg8.png"),
              "select":true
          },
          {
              "img":require("../assets/Cartimg/cartimg3.png"),
              "title":"Mate 30 Pro 5G",
              "price":2488,
              "carttitle1":"HUAWEI Mate 30 Pro 5G 全网通 8GB+256GB 麒麟990 双4000万徕卡电影四摄（星河银）",
              "carttitle2":"星河银,5G全网通,8GB+256GB,官方标配",
              "cartnum":1,
              "cartimg":require("../assets/Cartimg/cartimg9.png"),
              "select":true
          },
          {
              "img":require("../assets/Cartimg/cartimg4.png"),
              "title":"荣耀X10",
              "price":3488,
              "carttitle1":"荣耀X10 麒麟820双模5G九频 90Hz全速屏 RYYB高感光摄影 6GB+128GB（竞速蓝）",
              "carttitle2":"X10,竞速蓝,全网通 6GB+128GB,官方标配",
              "cartnum":1,
              "cartimg":require("../assets/Cartimg/cartimg10.png"),
              "select":true
          },
          {
              "img":require("../assets/Cartimg/cartimg5.png"),
              "title":"HUAWEI nova 7 SE 5G",
              "price":4488,
              "carttitle1":"HUAWEI nova 7 SE 5G 6400万高清四摄 40W超级快充 麒麟820 5G SoC芯片 8GB+128GB 全网通版（银月星辉）",
              "carttitle2":"银月星辉,5G全网通 8GB+128GB,官方标配",
              "cartnum":1,
              "cartimg":require("../assets/Cartimg/cartimg11.png"),
              "select":true
          },
          {
              "img":require("../assets/Cartimg/cartimg6.png"),
              "title":"荣耀30S",
              "price":5488,
              "carttitle1":"荣耀30S 麒麟820 5G芯片 3倍光学变焦 20倍数字变焦 8GB+128GB 蝶羽翠",
              "carttitle2":"蝶羽翠,全网通 8GB+128GB,官方标配",
              "cartnum":1,
              "cartimg":require("../assets/Cartimg/cartimg12.png"),
              "select":true
          }
      ],
      shoplist:[],
      Totalcartnum:0,
      totalPrice:0,
      listindex:0,
      detaillist:[],
      detailindex:0,
      edit:true,
      select:true,
      account:true,
      denglu:true,
      jifen:"-",
      youhui:"-",
      daijin:"-"
  },

  mutations:{
      goshopping(state,item){
          
          let cartindex = -1;
          for (let i = 0; i < state.shoplist.length; i++) {
              if (state.shoplist[i].price == item.price) {
                  cartindex = i;
              }
          }

          if (cartindex >= 0) {
              state.shoplist[cartindex].cartnum++;
          }else{
              state.shoplist.push({
                  img:item.img,
                  cartnum:item.cartnum,
                  price: item.price,
                  title:item.title,
                  carttitle1:item.carttitle1,
                  carttitle2:item.carttitle2,
                  select:item.select
              })
          }

          console.log(state.cartlist);

          //计算总价和商品总数量
          state.totalPrice = 0;
          for(let i = 0;i < state.shoplist.length;i++){
              state.totalPrice += state.shoplist[i].cartnum*state.shoplist[i].price
          }

          state.Totalcartnum = 0;
          for(let i = 0;i < state.shoplist.length;i++){
              state.Totalcartnum += state.shoplist[i].cartnum
          }
      },
      goshopping1(state,index){
          let cartindex = -1;
          for (let i = 0; i < state.shoplist.length; i++) {
              if (state.shoplist[i].price == state.cartlist[index].price) {
                  cartindex = i;
              }
          }

          if (cartindex >= 0) {
              state.shoplist[cartindex].cartnum++;
          }else{
              state.shoplist.push({
                  img:state.cartlist[index].img,
                  cartnum:state.cartlist[index].cartnum,
                  price: state.cartlist[index].price,
                  title:state.cartlist[index].title,
                  carttitle1:state.cartlist[index].carttitle1,
                  carttitle2:state.cartlist[index].carttitle2,
                  select:state.cartlist[index].select
              })
          }


          state.totalPrice = 0;
          for(let i = 0;i < state.shoplist.length;i++){
              state.totalPrice += state.shoplist[i].cartnum*state.shoplist[i].price
          }

          state.Totalcartnum = 0;
          for(let i = 0;i < state.shoplist.length;i++){
              state.Totalcartnum += state.shoplist[i].cartnum
          }
      },

      goshopping2(state){
          let cartindex = -1;
          for (let i = 0; i < state.shoplist.length; i++) {
              if (state.shoplist[i].price == state.cartlist[state.detailindex].price) {
                  cartindex = i;
              }
          }

          if (cartindex >= 0) {
              state.shoplist[cartindex].cartnum++;
          }else{
              state.shoplist.push({
                  img:state.cartlist[state.detailindex].img,
                  cartnum:state.cartlist[state.detailindex].cartnum,
                  price: state.cartlist[state.detailindex].price,
                  title:state.cartlist[state.detailindex].title,
                  carttitle1:state.cartlist[state.detailindex].carttitle1,
                  carttitle2:state.cartlist[state.detailindex].carttitle2,
                  select:state.cartlist[state.detailindex].select
              })
          }


          state.totalPrice = 0;
          for(let i = 0;i < state.shoplist.length;i++){
              state.totalPrice += state.shoplist[i].cartnum*state.shoplist[i].price
          }

          state.Totalcartnum = 0;
          for(let i = 0;i < state.shoplist.length;i++){
              state.Totalcartnum += state.shoplist[i].cartnum
          }
      },

      clear(state){
          // state.cartnum=1,
          for(let i = 0;i < state.cartlist.length;i++){
              state.cartlist[i].catnum=1
          }
          state.shoplist=[];
          console.log(state.shoplist.length);
          
      },
      minus(state,index){
          if(state.shoplist[index].cartnum>1){
              state.shoplist[index].cartnum--
          }else{
              state.shoplist[index].cartnum=1
          }

          state.totalPrice = 0;
          for(let i = 0;i < state.shoplist.length;i++){

              state.totalPrice += state.shoplist[i].cartnum*state.shoplist[i].price
          }

          state.Totalcartnum = 0;
          for(let i = 0;i < state.shoplist.length;i++){

              state.Totalcartnum += state.shoplist[i].cartnum
          }
      },
      plus(state,index){
          state.shoplist[index].cartnum++;

          state.totalPrice = 0;
          for(let i = 0;i < state.shoplist.length;i++){

              state.totalPrice += state.shoplist[i].cartnum*state.shoplist[i].price
          }

          state.Totalcartnum = 0;
          for(let i = 0;i < state.shoplist.length;i++){

              state.Totalcartnum += state.shoplist[i].cartnum
          }
      },

      update(state){
          state.Totalcartnum = 0;
          for(let i = 0;i < state.shoplist.length;i++){
              state.Totalcartnum += state.shoplist[i].cartnum
          }
      },

      editcart(state){
          state.edit = !state.edit;
          state.select = false;
          state.account = !state.account;
          for(let i = 0;i < state.shoplist.length;i++){
              state.shoplist[i].select = false;
              console.log(state.shoplist);
          }
      },

      finish(state){
          state.edit = !state.edit
          state.select = true
          state.account = !state.account
          for(let i = 0;i < state.shoplist.length;i++){
              state.shoplist[i].select = true
          }

          state.totalPrice = 0;
          for(let i = 0;i < state.shoplist.length;i++){
              if(state.shoplist[i].select){
                  state.totalPrice += state.shoplist[i].cartnum*state.shoplist[i].price
              }
          }
          state.Totalcartnum = 0;
          for(let i = 0;i < state.shoplist.length;i++){
              if(state.shoplist[i].select){
                  state.Totalcartnum += state.shoplist[i].cartnum
              }
          }
      },

      /* updatecheck(state){
          let flag = true;
          for(let i = 0;i < state.shoplist.length;i++){
              if(state.shoplist[i].select==false){
                  flag = false
                  break
              }
          }

          if(flag){
              state.select=true
          }else{
              state.select=false
          }
      }, */

      dellist(state){
          for(let i = 0;i < state.shoplist.length;i++){
              if(state.shoplist[i].select==true){
                  state.shoplist.splice(i,1);
                  i--
              }
          }
      },

      updateprice(state){
          state.totalPrice=0
          for(let i = 0;i < state.shoplist.length;i++){

              state.totalPrice += state.shoplist[i].cartnum*state.shoplist[i].price
          }

          state.Totalcartnum = 0;
          for(let i = 0;i < state.shoplist.length;i++){

              state.Totalcartnum += state.shoplist[i].cartnum
          }
      },

      allselect(state){
          if(state.select==true){
              for(let i = 0;i < state.shoplist.length;i++){
                  state.shoplist[i].select = true;
                  console.log(state.shoplist);
              }
          }
      }
  }
});

export default store;