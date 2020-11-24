<template>
    <div class="cart-content">
        <div class="cart-box1" v-if="shoplist.length>0">
            <div class="boxdel" v-show="hiddendel">
                <div class="bottom-box" >
                    <div>确定要删除这件商品吗？</div>
                    <span @click="xuxiao">取消</span>
                    <span class="bottom-box-span"  @click="dellist">确定</span>
                </div>
            </div>
            <!-- <a href="#" @click="clear">清空</a> -->
            <div class="cart-content-head1">购物车
                <div href="#" v-if="edit" @click="editcart">编辑</div>
                <div href="#" v-else @click="finish">完成</div>
            </div>
            <div class="cart-content-mid">
                <div class="cart-box-list" v-for="(item,index) in shoplist" :key="index">
                    <div style="width:15%;height:100%">
                        <input @change="updateselect" type="checkbox" name="" id="" checked v-model="item.select" value="item.name">
                    </div>
                    <a href="#"><img :src="item.img" alt=""></a>
                    <div class="cart-box-list-title">
                        <p style="color:#333;fontSize:14px;marginTop:30px ">{{item.carttitle1}}</p>
                        <p style="color:#666;fontSize:12px">{{item.carttitle2}}</p>
                        <div class="fenqi">分期免息</div>
                        <div class="price">
                            <span>¥{{item.price}}元</span>
                            <div class="priceComputed">
                                <span class="minus" @click="minus(index)">－</span>
                                <span style="lineHeight:60px">{{item.cartnum}}</span>
                                <span class="plus" @click="plus(index)">＋</span>
                            </div>
                        </div>
                        <p style="fontSize:14px;lineHeight:28px">
                            <span style="color:#666">服务</span>
                            <span class="service"><span>无忧服务</span><span style="marginLeft:15px">碎屏宝</span></span>
                        </p>
                        <p style="fontSize:14px;lineHeight:28px">
                            <span style="color:#666">搭配</span>
                            <span style="marginLeft:34px">华为手表&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x1</span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="account" v-if="account">
                <div class="account-left">
                    <input @change="allselect" type="checkbox" id="" checked style="marginLeft:30px" v-model="$store.state.select">
                    <span style="marginLeft:15px;color:#999;font-size:0.7rem">全选</span>
                </div>
                <span class="total"><span style="color:black">总计:</span style="font-weight: 700">{{totalPrice}}元</span>
                <span class="accountall">结算({{Totalcartnum}})</span>
            </div>
            <div class="account" v-else>
                <div class="account-left">
                    <input @change="allselect1" type="checkbox" value="$store.state.select" id="" checked style="marginLeft:30px" v-model="$store.state.select">
                    <span style="marginLeft:15px;color:#999;">全选</span>
                </div>
                <span class="accountall del" @click="delshow">删除</span>
            </div>
        </div>
        <div class="cart-box" v-else>
            <div class="cart-content-head">购物车</div>
            <div class="cart-content-mid">
                <div class="cart-content-mid-go">
                    <img src="../assets/Cartimg/cart.png" alt="">
                    <p style="color:#999;lineHeight:30px">您的购物车没有商品</p>
                    <a href="#" @click="gohome">去购物</a>
                </div>
                <div class="cart-content-mid-sale">热销推荐</div>
                <div class="cart-content-mid-sale-content">
                    <ul>
                        <li v-for="(item,index) in cartlist" :key="index">
                            <img :src="item.img" alt="" @click="godetail(index)">
                            <p style="fontSize:14px">{{item.title}}</p>
                            <p style="color:#ca141d;fontWeight:700;">¥{{item.price}}</p>
                            <a href="#" @click="goshopping(item)" class="buy">
                                <img src="../assets/Cartimg/carticon.png" alt="">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        shoplist(){
            return this.$store.state.shoplist;
        },
        Totalcartnum(){
            return this.$store.state.Totalcartnum;
        },
        totalPrice(){
            return this.$store.state.totalPrice;
        },
        cartlist(){
            return this.$store.state.cartlist;
        },
        detaillist(){
            return this.$store.state.detaillist;
        },
        edit(){
            return this.$store.state.edit;
        },
        select(){
            return this.$store.state.select;
        },
        account(){
            return this.$store.state.account;
        },
        /* detailindex(){
            return this.$store.state.detailindex;
        }, */
    },
    data(){
        return{
            /* edit:true,
            select:true,
            account:true */
            hiddendel:false
        }
    },
    methods:{
        gohome(){
            this.$router.push('/home/01')
        },
        goback(){
            this.$router.go(-1)
        },
        goshopping(item){
            this.$store.commit("goshopping",item);
        },

        dellist(){
            this.$store.commit("dellist");
            this.updateprice()
            this.hiddendel=false
        },
        delshow(){
            let flag = false;
            for(let i = 0;i < this.$store.state.shoplist.length;i++){
                if(this.$store.state.shoplist[i].select==true){
                    flag = true
                    break
                }
            }
            if(flag){
                this.hiddendel=true
            }
        },
        xuxiao(){
            this.hiddendel=false
        },
        minus(index){
            this.$store.commit("minus",index);
        },
        plus(index){
            this.$store.commit("plus",index);
        },
        godetail(index){
            this.$router.push('/detail');
            this.detaillist.push(this.cartlist[index])
            // this.$store.state.detaillist.splice(index,1);
            this.$store.state.detailindex = index
        },
        editcart(){
            this.$store.commit("editcart");
        },
        finish(){
            this.$store.commit("finish");
        },

        updateprice(){
            this.$store.commit("updateprice");
        },

        allselect(){
            if(this.$store.state.select){
                for(let i = 0;i < this.shoplist.length;i++){
                    this.shoplist[i].select = true;
                }

                //更新价格和数量
                this.$store.state.totalPrice = 0;
                for(let i = 0;i < this.shoplist.length;i++){
                    this.$store.state.totalPrice += this.shoplist[i].cartnum*this.shoplist[i].price
                }

                this.$store.state.Totalcartnum = 0;
                for(let i = 0;i < this.shoplist.length;i++){
                    this.$store.state.Totalcartnum += this.shoplist[i].cartnum
                }
                //=========
            }else{
                for(let i = 0;i < this.shoplist.length;i++){
                    this.shoplist[i].select = false;
                }
                this.$store.state.Totalcartnum=0;
                this.$store.state.totalPrice=0
            }
            console.log(this.$store.state.select);
            // this.$store.commit("allselect");
        },

        allselect1(){
            if(this.$store.state.select){
                for(let i = 0;i < this.shoplist.length;i++){
                    this.shoplist[i].select = true;
                }
            }else{
                for(let i = 0;i < this.shoplist.length;i++){
                    this.shoplist[i].select = false;
                }
            }
        },

        updateselect(){
            let flag = true;
            for(let i = 0;i < this.shoplist.length;i++){
                if(this.shoplist[i].select==false){
                    flag = false
                    break
                }
            }

            if(flag){
                this.$store.state.select=true
            }else{
                this.$store.state.select=false
            }

            //更新总价和数量
            this.$store.state.totalPrice = 0;
            for(let i = 0;i < this.shoplist.length;i++){
                if(this.shoplist[i].select){
                    this.$store.state.totalPrice += this.shoplist[i].cartnum*this.shoplist[i].price
                }
            }
            this.$store.state.Totalcartnum = 0;
            for(let i = 0;i < this.shoplist.length;i++){
                if(this.shoplist[i].select){
                    this.$store.state.Totalcartnum += this.shoplist[i].cartnum
                }
            }
            //========

        }

    },
    created(){
        this.$store.state.edit = true;
        this.$store.state.select = true;
        this.$store.state.account = true
        for(let i = 0;i < this.shoplist.length;i++){
            this.shoplist[i].select = true
        }
    }
}
</script>

<style scoped>
.cart-content{
    user-select: none;
}
.boxdel{
    width: 100%;
    height: 100%;
    background:rgba(51,51,51,0.5);
    position: absolute;
    position: fixed;
    z-index: 100;
}

.bottom-box{
    width: 90%;
    height: 20%;
    background: white;
    position: absolute;
    bottom: 3%;
    right: 5%;
    border-radius: 20px;
    text-align: center;
}

.bottom-box div{
    width: 100%;
    height: 70%;
    line-height: 550%;
}

.bottom-box span{
    display: inline-block;
    width: 48%;
    height: 15%;
}

.bottom-box-span{
    border-left: 1px solid #f4f4f4;
    color: #ca141d;
}

input[type="checkbox"] {
    width: 20px;
    height: 20px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 18px;
    margin-right: 10px;
    position: relative;
}
 
input[type="checkbox"]::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    width: 100%;
    height: 100%;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
}
 
input[type="checkbox"]:checked::before {
    content: "\2713";
    background-color: rgb(202, 20, 29);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border: 1px solid #7D7D7D;
    border-radius:4px;
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
}


.cart-content{
    width: 100%;
    height: 100%;
    position: relative;
    /* background-color: #f9f9f9; */
}

.cart-box,.cart-box1{
    width: 100%;
    height: 100%;
    overflow: auto;
}

.cart-box1{
    background-color: rgb(249, 249, 249);
    position: relative;
}

.cart-content-head,.cart-content-head1{
    width: 100%;
    height: 8%;
    text-align: center;
    line-height: 46px;
    font-size: 20px;
    background-color: white;
    position: relative;
}

.cart-content-head1>div{
    position: absolute;
    right: 8%;
    top: 4px;
    font-size: 18px;
    color: #888;
}

.cart-content-mid{
    width: 100%;
    height: 92%;
    background-color: #f9f9f9;
    overflow: auto;
}

.cart-content-mid-go{
    width: 100%;
    height: 246px;
    background-color: #f9f9f9;
    text-align: center;
}

.cart-content-mid-go>img{
    margin-top: 30px;
}

.cart-content-mid-go>a{
    display: inline-block;
    width: 100px;
    height: 35px;
    border-radius: 20px;
    border: 1px solid rgba(51,51,51,.3);
    margin-top: 10px;
    text-align: center;
    color: #666;
    line-height: 35px;
}

.cart-content-mid-sale{
    width: 100%;
    height: 60px;
    background-color: #f9f9f9;
    text-align: center;
    line-height: 60px;
    font-size: 22px;
}

.cart-content-mid-sale-content,.cart-content-mid-sale-content ul{
    width: 100%;
    height: 750px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.cart-content-mid-sale-content li{
    display: block;
    width: 47.5%;
    height: 250px;
    text-align: center;
    border-radius: 20px;
    background-color: white;
    box-sizing: border-box;
    margin: 4px 4px 4px 4px;
    position: relative;
}

li>a{
    display: inline-block;
    position: absolute;
    top: 2%;
    right: 5%;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: rgb(236, 236, 236);
    text-align: center;
    line-height: 28px;
}

li>img{
    width: 150px;
    height: 150px;
    margin-top: 25px;
}

li>p{
    line-height: 30px;
}

.cart-box-list{
    width: 95%;
    height: 260px;
    margin: 0 auto;
    border-radius: 20px;
    background-color: white;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.cart-box-list input{
    margin-top: 80px;
    margin-left: 30px;
}


.cart-box-list>a{
    display: inline-block;
    width: 30%;
    height: 100%;
    text-align: center;
}

.cart-box-list img{
    width: 92px;
    height: 92px;
    margin-top: 30px;
}

.cart-box-list-title{
    width: 55%;
    height: 100%;
}

.price{
    width: 100%;
    height: 60px;
    display: flex;
    font-size: 0.9rem;
}

.fenqi{
    font-size: 12px;
    height: 18px;
    width: 60px;
    border-radius: 10px;
    text-align: center;
    line-height: 18px;
    margin-top: 10px;
    border: 1px solid #ef5a62;
    color: #ef5a62;
}

.price>span{
    width:50%;
    line-height: 60px;
    display:inline-block;
    height:60px;
    color:#ca141d;
    font-weight:700
}

.priceComputed{
    width: 50%;
    height: 60px;
    display: flex;
    
}

.priceComputed>span{
    margin-left: 10px;
    font-size: 0.7rem;
    opacity: 0.7;
}

.minus,.plus{
    display: inline-block;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid rgb(214, 214, 214);
    margin-top: 16px;
    text-align: center;
}

.account{
    width: 100%;
    height: 60px;
    background-color: white;
    position: absolute;
    bottom: 58.88px;
    display: flex;
    line-height: 60px;
    position: fixed;
}

.account-left{
    width: 40%;
    height: 100%;
    line-height: 60px;
}

.accountall{
    width: 25%;
    height: 40px;
    background-color: #e43e2d;
    margin-top: 10px;
    line-height: 40px;
    text-align: center;
    border-radius: 25px;
    color: white;
    font-size: 18px;
    margin-left: 10px;
}

.del{
    margin-left: 30%;
    background-color: white;
    color: black;
    border: 1px solid rgba(51,51,51,.3);
}

.total{
    text-align: right;
    width: 30%;
    color: #ca141d;
    font-size: 18px;
}

.buy{
    display: inline-block;
    width: 27px;
    height: 27px;
    text-align: center;
    line-height: 27px;
}

.buy img{
    width: 24px;
    height: 24px;
}

.service{
    margin-left: 20px;
}

.service>span{
    display: inline-block;
    height: 22px;
    line-height: 22px;
    border: solid 0.5px #b2b3b4;
    color: #333;
    padding: 0 5px;
    text-align: center;
}
</style>