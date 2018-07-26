<template>
    <div>
        <img src="../../../assets/img/img2.png" alt="">
        <img src="../../../assets/img/img3.png" alt="">
        <div class="person">
            <swiper>
                <swiper-slide>
                    <div class="icon" >
                        <div class="icon-img">
                            <img class="icon-img-content" src="../../../assets/img/person1.png" alt="">
                        </div>
                        <p class="icon-desc">百币书生</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
export default {
  name: 'IndexPerson',
  components:{
  }
}
</script>
<style lang="less">
    img{
        margin-bottom: 10px;
    }
    .person{
        height: 470px;
        width: 100%;
        background: #fff;
    }
</style>