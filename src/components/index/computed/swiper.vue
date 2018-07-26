<template>
    <div class="swing-loading">
        <swiper>
            <swiper-slide class="swiper-slider">
                <img class="img-swing" src="../../../assets/img/swiper-1.png">
            </swiper-slide>
            <swiper-slide>
                <img class="img-swing" src="../../../assets/img/swiper-1.png">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'IndexSwiper',
  components:{
      
  }
}
</script>
<style>
    .swing-loading{
        width: 840px;
    }
</style>