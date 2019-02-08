<template>
    <div class="section">
        <h2>{{val.title}}</h2>
        <div class="main">
            <goods></goods>
            <goods></goods>
            <goods></goods>
        </div>
    </div>
</template>
<script>
import goods from './goods.vue';
export default {
    components:{goods},
    props:["val","ind"]
}
</script>
<style scoped>
    .section{
        background: #fff;
        width: 100%;
    }
    h2{
        height:1rem;
        width: 100%;
        box-sizing: border-box;
        padding:0 .46rem;
        line-height: 1rem;
        font-size:.3rem;
        color:#666;
        position: relative;
        margin:0;
    }
    h2::before{
        content:"";
        display:block;
        width: 1px;
        height:.34rem;
        position: absolute;
        border-left:1px solid rgb(189, 151, 151);
        left:.34rem;
        top:.33rem;
    }
    .main{
        height:3.58rem;
        width: 100%;
        border-top:1px solid #eee;
        padding-top:.2rem;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        margin-bottom: .2rem;
    }

</style>

