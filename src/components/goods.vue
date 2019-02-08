<template>
  <div class="goods">
    <goodlist v-for="(val,ind) of goodlist" :key="ind" :val="val" :ind="ind"></goodlist>
  </div>
</template>
<script>
import goodlist from './goodlist.vue';
import {mapState,mapActions} from 'vuex';
export default {
    data(){
        return {
            

            
        }
    },
    computed: {
        ...mapState(["goodlist"])
    },
  mounted() {
      var oSlide=this.$el.children;
      this.autoplay(oSlide);
  },
  methods: {
      ...mapActions(["autoplay"])
  },
  components:{goodlist}
};
</script>
<style scoped>
.goods {
  width: 33%;
  height: 100%;
  box-sizing: border-box;
  border: 2px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
}

</style>
