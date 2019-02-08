<template>
  <div class="assit">
    <div class="atop">
      <router-link to="/" class="alink">
        <i style="background-position:0 0"></i>
        <span>原厂正品</span>
      </router-link>
      <router-link to="/" class="alink">
        <i style="background-position:-.84rem 0"></i>
        <span>送货上门</span>
      </router-link>
      <router-link to="/" class="alink">
        <i style="background-position:-1.66rem 0"></i>
        <span>30天退换</span>
      </router-link>
      <router-link to="/" class="alink">
        <i style="background-position:-2.46rem 0"></i>
        <span>终身维保</span>
      </router-link>
    </div>
    <div class="acen">
        <i class="glyphicon glyphicon-earphone"></i>
        全国统一服务热线：
        <span>010-59273568</span>
    </div>
    <div class="copyright">
        <p>2008-2018&nbsp;&nbsp;&nbsp;北京温馨助民商贸有限公司&nbsp;&nbsp;&nbsp;并保留所有权利</p>
        <p>北京朝阳区凯旋中心3号楼&nbsp;&nbsp;&nbsp; 京ICP备11015992号-1</p>
        <p><a class="zm-text-57b69d" href="http://fuwu.365zmw.com/">&nbsp;&nbsp;维修服务</a>&nbsp;&nbsp;<span class="sep">|</span><a class="zm-text-a60000" href="http://365zmw.com/">&nbsp;&nbsp;电脑版</a></p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.assit {
  width: 100%;
  height: 4.26rem;
  background: #fff;
}
.atop {
  width: 100%;
  height: 1.96rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.alink {
  display: flex;
  width: 25%;
  height: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.alink:hover{
  text-decoration: none;
}
.atop i{
    display: block;
    width: .8rem;
    height:.8rem;
    background: url(../assets/images/zm_zwrb_pic.png) no-repeat;
}
.atop span{
    color: #bbb;
    font-size:.26rem;
}
.acen{
    height:.82rem;
    border-top:1px solid #eee;
    border-bottom: 1px solid #eee;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#999;
    font-size: .28rem;
     box-sizing: border-box;
}
.acen i{
    margin-right:6px;
}
.acen span{
    font-size: .36rem;
    color:#57b69d;
}
.copyright{
    padding:.1rem;
    line-height: .24rem;
    text-align: center;
    font-size: .24rem;
    color:#bbb;
    box-sizing: border-box;
}
.zm-text-57b69d {
    color: #57b69d;
    text-decoration: none;
}
.zm-text-a60000 {
    color: #a60000;
    text-decoration: none;
}

</style>

