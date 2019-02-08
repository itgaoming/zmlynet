import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    goodlist: [{
        img: "url(./src/assets/images/goods01.jpg)",
        title: "老年人轮椅",
        price: "6666",
        id: 1001
      },
      {
        img: "url(./src/assets/images/goods02.jpg)",
        title: "天子驾二",
        price: "9999",
        id: 1001
      },
    ],
    moregoods: [
      {
        zImg: "url(./src/assets/images/goods02.jpg)",
        img: "",
        title: "天子驾二",
        price: "9999",
        id: 1001
      },
      {
        zImg: "url(./src/assets/images/goods02.jpg)",
        img: "",
        title: "天子驾二",
        price: "9999",
        id: 1001
      },
      {
        zImg: "url(./src/assets/images/goods02.jpg)",
        img: "",
        title: "天子驾二",
        price: "9999",
        id: 1001
      },
      {
        zImg: "url(./src/assets/images/goods02.jpg)",
        img: "",
        title: "天子驾二",
        price: "9999",
        id: 1001
      },
      {
        zImg: "url(./src/assets/images/goods02.jpg)",
        img: "",
        title: "天子驾二",
        price: "9999",
        id: 1001
      },
      {
        zImg: "url(./src/assets/images/goods02.jpg)",
        img: "",
        title: "天子驾二",
        price: "9999",
        id: 1001
      },
    ],
    loadIndex:{
      start:0,
      end:4
    },
    sections: [{
        title: "今日促销"
      },
      {
        title: "热卖商品"
      },
      {
        title: "最新商品"
      },
      {
        title: "推荐商品"
      },
    ],

  },
  mutations: {
    autoplay(state, payload) {
      for (let i = 0; i < payload.length; i++) {
        payload[i].style.opacity = 0;
      }
      payload[0].style.opacity = 1;
      var index = 0;

      function autoplay() {
        index++;
        if (index >= payload.length) {
          index = 0;
        }
        for (let i = 0; i < payload.length; i++) {
          payload[i].style.opacity = 0;
          if (i == index) {
            payload[i].style.opacity = 1;
          }
        }
      }
      setInterval(function () {
        autoplay();
      }, 2000)
    },
    passView(state, payload) {
      console.log(payload);
      payload.view.addEventListener("click", function () {
        if (payload.upass.value.length > 0) {
          if (this.classList.contains('red')) {
            this.classList.remove('red');
            payload.upass.setAttribute("type", "password");
          } else {
            this.classList.add('red');
            payload.upass.setAttribute("type", "text");
          }
        }

      })
    },
    setImg(state,payload){
      state.moregoods[payload].img = state.moregoods[payload].zImg;
    },
    load(state){
       state.loadIndex.end += 4;
    },
    indexScr(state, payload) {
      var goods = document.querySelectorAll(".more-goods");
      var outside=payload.outside,inside=payload.inside,totop=payload.totop,that=payload.that,self=payload.self;
      for (let i = 0; i < goods.length; i++) {
        var stance =
          goods[i].offsetTop - outside.offsetHeight + goods[i].offsetHeight / 2;
        if (-self.y > stance) {
          that.setImg(i);
        }
      }
      if (self.y < 0) {
        that.bln = true;
        totop.addEventListener("click", function(event) {
          self.scrollToElement("#slide", 1000);
          that.bln = false;
        });
        if (self.y + inside.offsetHeight <= outside.offsetHeight) {
          if (that.moregoods.length > goods.length) {
            new Promise(function(resolve, reject) {
              that.load();
              setTimeout(function() {
                resolve(1);
              }, 100);
            }).then(function(res) {
              goods = document.querySelectorAll(".more-goods");
              self.refresh();
            });
          }
        }
      } else {
        that.bln = false;
      }
    }
  },
  actions: {
    autoplay({
      commit
    }, payload) {
      commit("autoplay", payload)
    },
    passView({
      commit
    }, payload) {
      commit("passView", payload);
    },
    setImg({commit},payload){
      commit("setImg",payload);
    },
    load({commit}){
      commit("load");
    },
    indexScr({
        commit
      }, payload) {
      commit("indexScr",payload);
    }
  },
  getters: {
    moregoods(state){
      return state.moregoods.slice(state.loadIndex.start, state.loadIndex.end);
    }
  }
})
export default store;
