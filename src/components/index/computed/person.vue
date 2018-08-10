<template>
    <div>
        <img class="person-pic" src="../../../assets/img/img2.png" alt="">
        <img class="person-pic" src="../../../assets/img/img3.png" alt="">
        <div class="person">
            <div class="person-title">
                <h1>{{$t("person_spacial_colum")}}</h1>
                <span class="iconfont">&#xe6e7;</span>
            </div>
            <swiper>
                <swiper-slide v-for="(index,value) in pages" :key="value" >
                    <div class="icon"  v-for="item in index" :key="item.uid" @click="handleuid(item.uid)">
                        <div class="icon-img">
                            <img class="icon-img-content" :src="http+item.img" alt="">
                        </div>
                        <p class="icon-desc">{{item.username}}</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
// import Bus from '../../../api/bus.js'
import {mapState} from 'vuex'
export default {
    name: 'IndexPerson',
    components:{
    },
    data(){
        return{
            lists:[],
            num : 0,
            offsetTop:0
        }   
    },
    methods: {
      getdata1() {
            this.num++
            let url = this.http+'pc.php/SpecialColumn/getList/type/1/access_token/'+this.token
            fetch(url)
                .then(e => e.json())
                .then(e => {
                    this.lists = e.data.lists
                });
            },
        handleuid(id){
            window.localStorage.setItem('uid',id)
            // this.bus.$emit('handuid',id)
            this.$router.push({'path':'/xq'})
        }
    },
    mounted () {
      this.getdata1()  
    },
    computed: {
        ...mapState(["token","http"]),
        pages(){
            const pages = [];
            this.lists.forEach((item, index) => {
                const page = Math.floor(index / 9);
                if (!pages[page]) {
                    pages[page] = [];
                }
                pages[page].push(item);
            });
            
            return pages;
        }
    },
}
</script>
<style lang="less">
    .person-pic{
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
        img{
            width: 80px;
            height: 80px;
        }
        p{
            text-align: center;
        }
    }
    .swiper-slide{
        width: 100%;
    }
    @media screen and (max-width: 1210px)and (min-width: 960px) {
        #app .person-pic {
            width: 300px;
            height: 100px;
        }
        #app .icon {
            width: 90px;
            padding:17px  0;
        }
    }
    @media screen and (max-width: 960px) and (min-width: 320px) {
        #app .person-pic {
            display: none;
        }
        #app .person {
            display: none;
        }
    }
</style>