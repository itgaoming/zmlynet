<template>
    <div class="goods-wrapper">
        <div class="goods-slide more-goods" :style="styleObj"></div>
        <span>{{val.title}}</span>
        <p><b>￥{{val.price}}</b> <i class="glyphicon glyphicon-shopping-cart"></i></p>
    </div>
</template>
<script>
export default {
    props:["val","ind"],
    data(){
        return {
            
        }
    },
    mounted() {
        
    },
    computed: {
        styleObj(){
            return {
                "background-Image":this.val.img
            }
        }
    },
}
</script>
<style scoped>
.goods-wrapper{
    height:4.68rem;
    width: 49%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
    margin-right:10px;
}
.goods-slide{
    width: 100%;
    height: 3.42rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
}
</style>
