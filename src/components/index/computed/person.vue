<template>
    <div>
        <img src="../../../assets/img/img2.png" alt="">
        <img src="../../../assets/img/img3.png" alt="">
        <div class="person">
            <div class="person-title">
                <h1>人物专栏</h1>
                <span class="iconfont">&#xe6e7;</span>
            </div>
            <swiper>
                <swiper-slide>
                    <div class="icon" >
                        <div class="icon-img">
                            <img class="icon-img-content" src="../../../assets/img/person1.png" alt="">
                        </div>
                        <p class="icon-desc">百币书生</p>
                    </div>
                    <div class="icon" >
                        <div class="icon-img">
                            <img class="icon-img-content" src="../../../assets/img/person1.png" alt="">
                        </div>
                        <p class="icon-desc">百币书生</p>
                    </div>
                    <div class="icon" >
                        <div class="icon-img">
                            <img class="icon-img-content" src="../../../assets/img/person1.png" alt="">
                        </div>
                        <p class="icon-desc">百币书生</p>
                    </div>
                    <div class="icon" >
                        <div class="icon-img">
                            <img class="icon-img-content" src="../../../assets/img/person1.png" alt="">
                        </div>
                        <p class="icon-desc">百币书生</p>
                    </div>
                    <div class="icon" >
                        <div class="icon-img">
                            <img class="icon-img-content" src="../../../assets/img/person1.png" alt="">
                        </div>
                        <p class="icon-desc">百币书生</p>
                    </div>
                    <div class="icon" >
                        <div class="icon-img">
                            <img class="icon-img-content" src="../../../assets/img/person1.png" alt="">
                        </div>
                        <p class="icon-desc">百币书生</p>
                    </div>
                    <div class="icon" >
                        <div class="icon-img">
                            <img class="icon-img-content" src="../../../assets/img/person1.png" alt="">
                        </div>
                        <p class="icon-desc">百币书生</p>
                    </div>
                    <div class="icon" >
                        <div class="icon-img">
                            <img class="icon-img-content" src="../../../assets/img/person1.png" alt="">
                        </div>
                        <p class="icon-desc">百币书生</p>
                    </div>
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
        padding: 0 15px;
        box-sizing: border-box;
        margin-bottom:10px; 
        .person-title{
            height: 48px;
            border-bottom: 1px solid #eaeef1;
            h1{
                font: 18px/48px "微软雅黑";
                float: left;
            }
            span{
                float: right;
                font: 18px/48px "微软雅黑";
            }
        }
    }
    .icon{
        width: 106px;
        height: 125px;
        float: left;
        padding: 17px 14px 0 13px;
        box-sizing: border-box;
        p{
            text-align: center;
        }
    }
    .swiper-slide{
        width: 100%;
    }
</style>