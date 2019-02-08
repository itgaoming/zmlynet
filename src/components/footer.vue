<template>
    <div class="footer">
        <router-link to="/" >
            <i class="glyphicon glyphicon-home"></i>
            <span>首页</span>
        </router-link>
        <router-link to="/assort">
            <i class="glyphicon glyphicon-list"></i>
            <span>分类</span>
        </router-link>
        <router-link to="/login">
            <i class="glyphicon glyphicon-shopping-cart"></i>
            <span>购物车</span>
        </router-link>
        <router-link to="/member">
            <i class="glyphicon glyphicon-user"></i>
            <span>会员中心</span>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .footer{
        position: absolute;
        left:0;
        bottom:0;
        right:0;
        height: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-top:1px solid #eee;
        background: #fff;
    }
    a{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color:#333;
        font-size:.26rem;
        text-decoration: none;
    }
    a span{
        margin:5px;
    }
    a:hover,a:active{
        color:#57b69d;
    }
</style>

