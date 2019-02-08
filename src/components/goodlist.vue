<template>
    <div class="goods-wrapper">
      <div class="goods-slide" :style="styleObj"></div>
      <span>{{val.title}}</span>
        <p><b>￥{{val.price}}</b> <i class="glyphicon glyphicon-shopping-cart"></i></p>
    </div>
</template>
<script>
export default {
    props:["val","ind"],
    data(){
        return {
           styleObj:{
                "background-Image":this.val.img
               }
        }
    },
    mounted() {
        
    },
}
</script>
<style scoped>
.goods-wrapper{
    height:100%;
    width: 100%;
    position: absolute;
    transition: .2s linear all;
}
span{
    width: 100%;
    font-size: .26rem;
    color:#666;
}
p{
    font-size:.34rem;
    display: flex;
    justify-content: space-between;
    line-height: .4rem;
    height:.4rem;
}
p b{
    color:#a00000;
    font-weight: normal;
}
p i{
    color:#57b69d;
}
.goods-slide{
    width: 100%;
    height: 2.4rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
}
</style>

