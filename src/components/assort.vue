<template>
    <div class="assort">
        <assheader :tit="'商品分类'"></assheader>
        <div class="content">
            <navtab></navtab>
            <tabcontent :ind="arr[ind]"></tabcontent>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import assheader from './loginheader';
import Footer from './footer.vue';
import navtab from './navtab.vue';
import tabcontent from './tabcontent';
export default {
    components:{assheader,Footer,navtab,tabcontent},
    data(){
        return {
            ind:0,
            arr:["con1","con2","con3","con4"]
        }
    },
    updated() {
        
    },
}
</script>
<style scoped>
    .assort{
        width: 100%;
        height:100%;
        position: relative;

    }
    .content{
        position: absolute;
        width: 100%;
        left:0;
        top:.9rem;
        bottom:1rem;
        display: flex;
    }
</style>

