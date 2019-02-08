<template>
    <div class="more">
        <h2>热门商品</h2>
        <div class="main">
            <moregood v-for="(val,ind) of moregoods" :key="ind" :val="val" :ind="ind"></moregood>
        </div>
    </div>
</template>
<script>
import moregood from './moregood.vue';
import {mapGetters} from 'vuex';
export default {
    components:{moregood},
    computed: {
        ...mapGetters(["moregoods"])
    },

}
</script>
<style scoped>
    .more{
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
        width: 100%;
        height: auto !important;
        border-top:1px solid #eee;
        padding-top:.2rem;
        box-sizing: border-box;
        display: flex;
        flex-flow: wrap;
        justify-content: space-between;
        margin-bottom: .2rem;
    }
</style>

