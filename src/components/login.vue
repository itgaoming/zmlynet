<template>
  <div class="loginmain">
    <form action>
      <loginheader :tit="'登录'"></loginheader>
      <div class="content">
        <userbg ></userbg>
        <div class="userform">
          <p>
            <span>
              <i class="glyphicon glyphicon-phone"></i> 账号
            </span>
            <input type="text" name="uname" placeholder="用户名/手机/邮箱">
          </p>
          <p>
            <span>
              <i class="glyphicon glyphicon-envelope" style="margin-right:4px"></i>密码
            </span>
            <input type="password" name="upwd" placeholder="请填写6-16位字符，不能包含空格">
            <em class="glyphicon glyphicon-eye-open" ></em>
          </p>
        </div>
      </div>
      <div class="reg">
          <router-link to="/findpass" class="lolo">忘记了密码？</router-link>
          <router-link to="/register" class="lolo">注册</router-link>
      </div>
      <div class="foot">
          <button>登录</button>
      </div>
    </form>
  </div>
</template>
<script>
import loginheader from './loginheader';
import userbg from './userbg.vue';
import {mapActions} from 'vuex';
export default {
    mounted() {
        var passview=document.querySelector(".glyphicon-eye-open");
        var upass=passview.previousSibling.previousSibling;
        this.passView({view:passview,upass:upass})
    },
    computed: {
        
    },
    methods: {
        ...mapActions(["passView"])
    },
    components:{loginheader,userbg}
};
</script>
<style scoped>
.loginmain {
  position: relative;
  width: 100%;
  height: 100%;
}

.content {
  position: absolute;
  left: 0;
  top: 0.9rem;
  width: 100%;
  background: #f5f5f5;
}

.userform {
  width: 100%;
  height: 1.7rem;
  background: #eee;
  display: flex;
  flex-direction: column;
}
.userform p {
  width: 100%;
  height: 50%;
  line-height: 0.85rem;
  margin: 0;
  position: relative;
  padding-right: 0.6rem;
  box-sizing: border-box;
}
.userform p input {
  border: none;
  outline: none;
  background: none;
  color: #57b69d;
}
.userform p span {
  display: inline-block;
  width: 35%;
  color: #57b69d;
  padding-left: 0.3rem;
  box-sizing: border-box;
}
.userform p span i {
  width: 0.4rem;
}
.userform p em {
  width: 0.5rem;
  height: 0.4rem;
  position: absolute;
  right: 0;
  z-index: 20;
  color: #57b69d;
  top: 0.22rem;
}
.red{
    color:red !important;
}
.foot{
    position: absolute;
    width: 100%;
    left: 0;
    bottom:0;
    height:1rem;
}
.foot button{
    background: #fe4b46;
    color:#fff;
    border:none;
    text-align: center;
    width: 100%;
    font-size: .32rem;
    line-height: 1rem;
    height:1rem;
}
.reg{
    position: absolute;
    left:0;
    width: 100%;
    bottom:1rem;
    height:.76rem;
    display: flex;
    justify-content: space-between;
    padding:0 .3rem;
}
.lolo{
    color:#57b69d;
    font-size: .28rem;
    line-height: .76rem;
}
</style>

