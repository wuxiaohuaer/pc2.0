<template>
    <div class="swing-loading">
        <swiper>
            <swiper-slide class="swiper-slider" v-for="(index,value) in this.imgs" :key="value">
                <img class="img-swing" :src="http+index.img">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: 'IndexSwiper',
  data(){
      return{
          imgs:[],
      }
  },
  methods: {
      getdata() {
        fetch(this.http+'api.php/Carousel/lists/access_token/'+this.token)
            .then(e => e.json())
            .then(e => {
                this.imgs = e.data.lists
            });
        } 
  },
  mounted () {
    this.getdata()
  },
  computed: {
    ...mapState(["token","http"])
  },
}
</script>
<style lang="less">
    .swing-loading{
        width: 840px;
        .img-swing{
            width: 840px;
            height: 318px;
        }
    }
    @media screen and (max-width: 1210px)and (min-width: 960px) {
        #app .swing-loading{
            width: 640px;
        }
        #app .img-swing {
            width: 640px;
        }
    }
    @media screen and (max-width: 960px) and (min-width: 740px) {
         #app .swing-loading{
            width: 740px;
        }
        #app .img-swing {
            width: 740px;
        }
    }
    @media screen and (max-width: 740px) and (min-width: 320px) {
         #app .swing-loading{
            width: 100%;
        }
        #app .img-swing {
            width: 100%;
        }
    }
</style>