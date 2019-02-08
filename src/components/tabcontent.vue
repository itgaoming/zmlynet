<template>
  <div class="con">
    <div class="inside">
      <div class="right">
        <h4>类型</h4>
        <div class="link" v-if="bln">
          <a v-for="(val,ind) of con[ind].type1" :key="ind" :href=val.url>{{val.str}}</a>
        </div>
        <h4>品牌</h4>
        <div class="brand" v-if="bln">
            <a v-for="(val,ind) of con[ind].brand" :key="ind">
                <img :src=val alt="">
            </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["ind"],
  data() {
    return {
      con:{

      },
      bln:false
    };
  },
  mounted() {
    this.$axios.get("http://localhost:3000/cont").then(res=>{
        this.con=res.data;
        this.bln=true;
    })
  }
  
};
</script>
<style scoped>
.con {
  flex: 1;
  height: 100%;
  overflow: auto;
  padding: 0 0.2rem;
}
.inside {
  width: 100%;
  position: relative;
}
.right {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
h4 {
  width: 100%;
  height: 0.4rem;
  font-size: 0.32rem;
  line-height: 0.4rem;
  margin: 0.16rem 0 0.1rem 0;
  text-align: center;
  font-weight: normal;
  color: #000;
}
.link {
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
}
.link a {
  width: 48%;
  display: block;
  background: #eee;
  height: 0.64rem;
  line-height: 0.64rem;
  text-align: center;
  text-decoration: none;
  margin: 0.08rem 0;
  color: #666;
  font-size: 0.24rem;
}
.brand {
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
}
.brand a{
    width: 48%;
    display: block;
    margin: 0.1rem 0;
    height: 0.8rem;
}
.brand a img {
  width: 100%;
  height:100%;
  
}
</style>

