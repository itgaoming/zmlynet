<template>
    <div class="member">
        <memheader :tit="'会员中心'"></memheader>
        <div class="content">
            <div class="userinfo">
                <div class="loreg">
                    <form action="">
                        <div class="bg">
                            <div class="filess">
                                <input type="file" name="file" multiple="multiple" />
                            </div>
                        </div>
                    </form>
                    <div class="sta">
                        <router-link to="/login">登录</router-link>
                        <span>|</span>
                        <router-link to="/register">注册</router-link>
                    </div>
                </div>
            </div>
            <div class="goto">
                <router-link to="/login">
                    
                    <span><i class="glyphicon glyphicon-file"></i>我的订单</span>
                    <i class="glyphicon glyphicon-menu-right"></i>
                </router-link>
                <router-link to="/login">
                    
                    <span><i class="glyphicon glyphicon-file"></i>维修单</span>
                    <i class="glyphicon glyphicon-menu-right"></i>
                </router-link>
                <router-link to="/login">
                    
                    <span><i class="glyphicon glyphicon-map-marker"></i>地址管理</span>
                    <i class="glyphicon glyphicon-menu-right"></i>
                </router-link>
                <router-link to="/login">
                    
                    <span><i class="glyphicon glyphicon-tint"></i>我的积分</span>
                    <i class="glyphicon glyphicon-menu-right"></i>
                </router-link>
                <router-link to="/login">
                    
                    <span><i class="glyphicon glyphicon-user"></i>我的关注</span>
                    <i class="glyphicon glyphicon-menu-right"></i>
                </router-link>
                <router-link to="/login">
                    
                    <span><i class="glyphicon glyphicon-refresh"></i>更改密码</span>
                    <i class="glyphicon glyphicon-menu-right"></i>
                </router-link>
                <router-link to="/login">
                    
                    <span><i class="glyphicon glyphicon-share"></i>我的推广联盟</span>
                    <i class="glyphicon glyphicon-menu-right"></i>
                </router-link>
            </div>
            <div class="exit">
                <span>安全退出</span>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import memheader from './loginheader';
import Footer from './footer';
export default {
    components:{memheader,Footer}
}
</script>
<style scoped>
    .member{
        width: 100%;
        height:100%;
        background: #f5f5f5;
        position: relative;
    }
    .content{
        position: absolute;
        left:0;
        top:.9rem;
        bottom:1rem;
        right:0;
    }
    .userinfo{
        width: 100%;
        height:2.3rem;
        background: url(../assets/images/user_info_bg_pic.png) no-repeat center ;
        background-size: contain;
    }
    .loreg{
        width: 3.6rem;
        height:100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left:.4rem;
    }
    .bg{
        width: 1.4rem;
        height:1.4rem;
        border-radius: 50%;
        border:2px solid rgba(255,255,255,.7);
        overflow: hidden;
        
    }
    .filess{
        width: 100%;
        height:100%;
        background: url(../assets/images/zm_normal_pic_100x100.jpg) no-repeat center;
        background-size: cover;
    }

    input[type="file"]{
        width: 100%;
        height:100%;
        opacity: 0;
    }
    .sta{
        width: 2.1rem;
        display: flex;
        justify-content: space-between;
        color:#fff;
        margin-left:.2rem;
    }
    .sta a{
        color:#fff;
    }
    .goto{
        width: 100%;
        background: #fff;
        display: flex;
        flex-direction: column;
    }
    .goto a{
        display: flex;
        width: 100%;
        height:1rem;
        border-bottom:1px solid #eee;
        justify-content: space-between;
        box-sizing: border-box;
        padding:0 .2rem;
        align-items: center;
        color:#666;
        font-size: .28rem;
    }
    .goto a span i{
        color:#bbb;
        margin-right:.4rem;
    }
    .goto a i{
        color:#ddd;
    }
    .exit{
        width: 100%;
        height:.66rem;
        padding:0 .2rem;
        margin-top:.2rem;
    }
    .exit span{
        display: block;
        width: 100%;
        height:100%;
        background:#fe4b46;
        line-height: .66rem;
        color:#fff;
        border-radius: 3px;
        text-align: center;
    }
</style>