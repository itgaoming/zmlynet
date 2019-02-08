<template>
  <div class="slide">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../assets/images/banner01.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../assets/images/banner02.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../assets/images/banner03.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../assets/images/banner04.png" alt=""></div>
        <div class="swiper-slide"><img src="../assets/images/banner05.jpg" alt=""></div>
        <div class="swiper-slide"><img src="../assets/images/banner06.jpg" alt=""></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add Arrows -->
    </div>
  </div>
</template>
<script>
export default {
    mounted() {
        this.slide();
    },
    methods: {
      slide(){
        var swiper = new Swiper('.swiper-container', {
            centeredSlides: true,
            loop:true,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
         });
      }
    },
};
</script>
<style scoped>
.slide {
  width: 100%;
  height: 3.75rem;
}
.swiper-container {
      width: 100%;
      height: 100%;

    }
    img{
        width: 100%;
        height: 100%;
    }
</style>

