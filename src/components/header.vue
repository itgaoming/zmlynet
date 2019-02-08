<template>
    <div class="header">
        <router-link to="/" class="logo"></router-link>
        <form action="">
                <i class="glyphicon glyphicon-search"></i>
                <input type="text" name="search" placeholder="请输入">
            
        </form>
        <router-link to="/login" class="login">登录</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .header{
        height:0.9rem;
        background: #57b69d;
        position: absolute;
        left:0;
        top:0;
        right:0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .logo{
        display: block;
        width: 1rem;
        height: .8rem;
        background: url(../assets/images/zm_webapp_logo.png) no-repeat center;
        background-size: contain;
    }
    form{
        width: 4.8rem;
        height: 0.56rem;
        position: relative;
    }
    input[name='search']{
        position:absolute;
        box-sizing: border-box;
        width: 4.8rem;
        height: 0.56rem;
        border:none;
        border-radius: 0.28rem;
        padding: 0 0.45rem;
        font-size:.24rem;
        outline:none;
        background: #eee;
        color:#57b69d;
        left:0;
    }
    .glyphicon-search{
        position: absolute;
        left:0.1rem;
        line-height: 0.56rem;
        top:.02rem;
        font-size:.24rem;
        color:#57b69d;
        z-index:999;
    }
    .login{
        display: inline-block;
        width: .8rem;
        height: .48rem;
        color: #fff;
        border:1px solid #fff;
        border-radius: 4px;
        font-size: .24rem;
        text-align: center;
        line-height: .48rem;
        text-decoration: none !important;
    }
    .login:hover{
        color:#fff !important;
    }
</style>

