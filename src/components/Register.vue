<template>
    <div class="register">
        <div class="register-head-div">
        <p class="register-head-p">
            <img src="../assets/Homeimg/register-head-img1.png" alt="">
        </p>
        <h2>华为账号</h2>
        <span class="register-head-span">登录华为帐号以使用云空间、华为应用及更多服务</span>
        </div>
        <div class="register-content">
            <div class="register-content-div">
                <input type="text" placeholder="手机号/邮箱地址/华为号" class="register-content-input" v-model.trim="acout">
                <input type="password" placeholder="密码" class="register-content-input input2" v-model.trim="pasd">
                <span><img src="../assets/Homeimg/yanjing.png" alt=""></span>
                <p class="register-content-p">
                    <span>短信验证码登陆</span>
                    <span class="span1">忘记密码</span>
                </p>
                <p class="denglu"> 
                <a href="#" class="a1" @click="denglu">登录</a><br>
                <a href="#" class="a2">注册账号</a>
                </p>
            </div>
        </div>
        <div class="register-bottom">
            <p class="register-bottom-p1">遇到问题</p>
            <p  class="register-bottom-p2">其他方式登录</p>
            <img src="../assets/Homeimg/QQ.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            acout:"",
            pasd:""
        }
    },
    methods:{
        denglu(){
            if(this.acout==""&&this.pasd==""){
                alert("请输入账号密码")
            }else if(this.acout=="123456"&&this.pasd=="123456"){
                this.$router.push("/me/05")
                this.$store.state.denglu=false;
                this.$store.state.jifen="0";
                this.$store.state.youhui="0";
                this.$store.state.daijin="0.00"
            }else{
                alert("账号123456密码123456")
            }
            console.log(this.acout);
            console.log(this.pasd);
        }
    },
    
}
</script>

<style scoped>
.register{
    width: 100%;
    height: 100%;
    background: #ffffff;
}
.register-head-div{
    width: 85%;
    height: 30%;
    margin: 0 auto;
}
.register-head-p{
    width: 100%;
    text-align: center;
    padding-top: 20px;
}

h2{
    margin-top: 10px;
    text-align: center;
    color: #e5e5e5;
}

.register-head-span{
    display: inline-block;
    width: 100%;
    font-size: 13px;
    text-align: center;
    margin-top: 10px;
    color: rgba(127, 127, 127, 1);
}

.register-content{
    width: 100%;
    height: 50%;
}

.register-content-div{
    width: 85%;
    height: 100%;
    margin: 0 auto;
    position: relative;
}

.register-content-input{
    width:100% ;
    height: 10%;
    font-size: 16px;
    border: none;
    border-bottom: 1px solid #e5e5e5;
    outline: none;
}

.input2{
    margin-top: 15px;
}

.register-content-div img{
    position: absolute;
    right: 0;
    top: 16%;
}

.register-content-p{
    height: 15%;
    font-size: 13px;
    font-weight: bold;
    color: #007dff;
    line-height: 350%;
}

.span1{
    position: absolute;
    right: 0;
}

.denglu{
    height: 20%;
    margin-top: 20px;
}

a{
    display: inline-block;
    width: 100%;
    height: 50%;
    background: chartreuse;
    border-radius: 20px;
    text-align: center;
    line-height: 240%;
    font-weight: 600;
    font-size: 15px;
 }

 .a2{
     margin-top: 10px;
     background: #f2f2f2;
     color: #ca141d;
 }
 .a1{
      background: #ca141d;
     color:white ;
 }

 .register-bottom{
     width: 100%;
     height: 20%;
     text-align: center;
 }

 .register-bottom-p1{
     font-size: 13px;
    font-weight: bold;
    color: #007dff;
    height: 30%;
    line-height: 350%;
 }

 .register-bottom-p2{
     color: #7f7f7f;
     font-size: 14px;
     height: 20%;
 }
</style>
