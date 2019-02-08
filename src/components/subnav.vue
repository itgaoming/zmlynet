<template>
    <router-link to="/" class="navli">
        <div class="img"></div>
        <span>{{val.txt}}</span>
    </router-link>
</template>
<script>
export default {
    props:["val","ind"],
    mounted() {
        var oImg=document.querySelectorAll(".img");
        oImg[this.ind].style.background=this.val.img;
        oImg[this.ind].style.backgroundSize="265px 120px";
    },
}
</script>
<style scoped>
    .navli{
        display: block;
        width: 25%;
        height: 1.62rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }
    .navli:hover{
        text-decoration: none;
    }
    .img{
        height: 1.12rem;
        width: 1.2rem;
    }
    span{
        font-size:.26rem;
        color:#333;
        text-align: center;
    }
</style>

