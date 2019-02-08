<template>
  <div class="mainindex">
    <Header id="header"></Header>
    <div class="index" id="outside">
      <div class="inside" id="inside">
        <slide id="slide"></slide>
        <Nav></Nav>
        <Section v-for="(val,ind) of sections" :key="ind" :val="val" :ind="ind"></Section>
        <morelist></morelist>
        <assit></assit>
      </div>
      <transition>
        <div class="totop" id="totop" v-show="bln">
          <i class="glyphicon glyphicon-arrow-up"></i>
        </div>
      </transition>
    </div>
    <Footer id="footer"></Footer>
  </div>
</template>
<script>
import Header from "./header.vue";
import slide from "./slide.vue";
import Nav from "./nav.vue";
import Section from "./section.vue";
import morelist from "./morelist.vue";
import assit from "./assit.vue";
import Footer from "./footer.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: { Header, slide, Nav, Section, morelist, assit, Footer },
  mounted() {
    var myScroll = new IScroll(outside, {
      probeType: 2,
    });
    var that = this;
    myScroll.on("scroll", function() {
      var self=this;
      that.indexScr({that,self,outside,inside,totop});
    });
    myScroll.on("scrollEnd", function() {
      var self=this;
      that.indexScr({that,self,outside,inside,totop});
    });
    outside.addEventListener("touchmove", function(event) {
      var e = event || window.event;
      e.preventDefault();
    });
  },

  computed: {
    ...mapState(["sections", "moregoods"])
  },
  methods: {
    ...mapActions(["setImg", "load","indexScr"]),
  },
  data() {
    return {
      bln: false
    };
  }
};
</script>
<style scoped>
.mainindex {
  position: relative;
  background: #f5f5f5;
  height: 100%;
  width: 100%;
}
.index {
  position: absolute;
  left: 0;
  top: 0.9rem;
  right: 0;
  bottom: 1rem;
  overflow: hidden;
}
.inside {
  width: 100%;
  height: auto !important;
}
.totop {
  display: flex;
  position: fixed;
  width: 0.64rem;
  height: 0.64rem;
  opacity: 0.5;
  background: #555;
  color: #ddd;
  font-size: 0.32rem;
  right: 15px;
  bottom: 15%;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 999;
}
</style>

