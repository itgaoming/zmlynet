<template>
  <div class="registermain">
    <regheader :tit="'注册'"></regheader>
    <div class="content">
      <userbg class="userreg"></userbg>
      <form action>
        <div class="regform">
          <p>
            <span>
              <i class="glyphicon glyphicon-phone"></i> 手机号
            </span>
            <input type="text" name="uname" placeholder="有效手机账号">
          </p>
          <p>
            <span>
              <i class="glyphicon glyphicon-envelope" style="margin-right:4px"></i>密码
            </span>
            <input type="password" name="upwd" placeholder="请填写6-16位字符，不能包含空格">
            <em class="glyphicon glyphicon-eye-open"></em>
          </p>
          <p>
            <span>
              <i class="glyphicon glyphicon-envelope" style="margin-right:4px"></i>验证码
            </span>
            <input type="text" placeholder="验证码">
            <a href="javascript:void(0)" class="getcode">获取验证码</a>
          </p>
        </div>
      </form>
      <div class="regsubmit">
        <button>注册</button>
      </div>
    </div>
  </div>
</template>
<script>
import regheader from "./loginheader.vue";
import userbg from "./userbg.vue";
import {mapActions} from 'vuex';
export default {
  components: { regheader, userbg },
  mounted() {
      var passview=document.querySelector(".glyphicon-eye-open");
      var upass=document.querySelector("input[name=upwd]");
      this.passView({view:passview,upass:upass});
  },
  methods: {
      ...mapActions(["passView"])
  },
};
</script>
<style scoped>
.registermain {
  position: relative;
  width: 100%;
  height: 100%;
  background: #57b69d;
}
.content {
  position: relative;
  top: 0.9rem;
}
.regform {
  width: 100%;
  height: 3.4rem;
  padding: 0 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
p {
  width: 100%;
  height: 0.92rem;
  background: #eee;
  border-radius: 0.46rem;
  position: relative;
}
.regsubmit {
  margin-top: 0.48rem;
  padding: 0 0.2rem;
  height: 0.96rem;
}
.regsubmit button {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid #eee;
  color: #eee;
  text-align: center;
  line-height: 100%;
  font-size: 0.36rem;
  background: transparent;
  border-radius: 0.48rem;
}
input {
  border: none;
  outline: none;
  background: none;
  color: #57b69d;
  line-height: 0.92rem;
}
p span {
  display: inline-block;
  width: 35%;
  color: #57b69d;
  padding-left: 0.3rem;
  box-sizing: border-box;
}
p span i {
  width: 0.4rem;
}
p em {
  width: 0.5rem;
  height: 0.4rem;
  position: absolute;
  right: 0;
  z-index: 20;
  color: #57b69d;
  top: 0.26rem;
}
.red {
  color: red !important;
}
.getcode{
    position: absolute;
    display: block;
    width: 2.44rem;
    height: .54rem;
    border:1px #57b69d solid;
    font-size: .28rem;
    color:#57b69d;
    line-height: .54rem;
    text-align: center;
    right:.3rem;
    top:.19rem;
    border-radius: 3px;
}
</style>
