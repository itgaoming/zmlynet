<template>
    <div class="tabnav">
        <a href="javascript:;;" class="current tab">出行代步 <i class="glyphicon glyphicon-menu-right"></i></a>
        <a href="javascript:;;" class="tab">上楼设备 <i class="glyphicon glyphicon-menu-right"></i></a>
        <a href="javascript:;;" class="tab">康复护理 <i class="glyphicon glyphicon-menu-right"></i></a>
        <a href="javascript:;;" class="tab">配件维修 <i class="glyphicon glyphicon-menu-right"></i></a>
    </div>
</template>
<script>
export default {
    mounted() {
        var oA=document.querySelectorAll(".tab");
        var that=this;
        for(let i=0 ;i<oA.length;i++){
            oA[i].addEventListener("click",function(){
                    for(let j=0;j<oA.length;j++){
                        oA[j].classList.remove("current");
                    }
                    this.classList.add("current");
                    that.$parent.ind=i;
                    
            })
        }
    },
}
</script>
<style scoped>
    .tabnav{
        width: 2.62rem;
        display: flex;
        flex-direction: column;
    }
    .tabnav a{
        display: block;
        width: 100%;
        text-decoration: none;
        color:#666;
        font-size:.28rem;
        height:1rem;
        line-height: 1rem;
        box-sizing: border-box;
        padding-left:.2rem;
        position: relative;
        background: #fff;
    }
    .tabnav a i{
        position: absolute;
        right:.2rem;
        top:.33rem;
        
        color:#ddd;
    }
    .tabnav .current{
        background: none;
        border-left:2px solid #57b69d;
        color:#57b69d;
    }
    .tabnav .current i{
        color:#57b69d;
    }
</style>
