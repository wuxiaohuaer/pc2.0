<template>
    <div>
        <img class="news-pic" src="../../../assets/img/img1.png" alt="">
        <div class="index-news" ref="news">
            <router-link class="news-one" tag="div" to="/xq" v-for="(index,value) in this.lists" :key="value">
                <div> <img :src="http+index.img" alt=""></div>
                <div class="news-des">
                    <h1>{{index.title}}</h1>
                    <h3>{{index.depict}}</h3>
                    <div class="last">
                        <div class="news-left">
                            <span class="iconfont news-logo">&#xe65d;</span>
                            <span class="news-author">{{index.author}}</span>
                            <span class="news-time">{{index.create_time}}</span>
                        </div>
                        <div class="news-mid">
                            <span class="iconfont news-logo">&#xe664;</span>
                            <span class="news-author">交易所</span>
                        </div>
                        <div class="news-right">
                            <span class="iconfont news-logo">&#xe6e7;</span>
                            <span class="news-author">{{gettoken}}</span>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'IndexNews',
    data(){
        return{
            lists:[],
            num : 0,
            offsetTop:0,
            gettoken:this.tokens
        }
    },
    props:['tokens']
    ,
    methods: {
        getdata1() {
            this.num++
            console.log(this.gettoken);
            let url = this.http+'pc.php/Article/lists/limit/10/p/'+this.num+'/cid/39/access_token/'+ this.token
            fetch(url)
                .then(e => e.json())
                .then(e => {
                    this.lists = e.data.lists
                });
            },
        // handleScroll(){
        //     this.offsetTop = this.$refs.news.scrollTop
        //     // var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //     console.log(this.offsetTop);
            
        // } 
    },
    mounted () {
        this.getdata1()
        // this.handleScroll()
        //  window.addEventListener('scroll', this.handleScroll)
    },
    computed: {
        ...mapState(["token","http"])
    },
    watch: {
        offsetTop(a,b){
            console.log(a,b)
        }
    }
  }
</script>
<style lang="less">
    .index-news{
        width: 840px;
        box-sizing: border-box;
        margin-top:12px; 
        padding: 0 30px;
        background: #fff;
        .news-one:hover{
            cursor: pointer;
        }
        .news-one{
            width: 100%;
            overflow: hidden;
            border-bottom: 1px dashed #ecedf1; 
            img{
                width: 220px;
                height: 160px;
                margin-top: 30px;
                border-radius: 10px;
                margin-right: 30px;
                float: left;
            }
            .news-des{
                width: 530px;
                float: left;
                margin-top: 35px;
                h1{
                    font: bold 22px/26px "黑体";
                    margin-bottom:10px; 
                }
                h3{
                    font: 18px/22px "微软雅黑";
                    margin-bottom:15px;
                }
                .last{
                    height: 22px;
                    font:14px/22px "微软雅黑";
                    padding-left:4px;
                    .news-left{
                        float: left;
                        .news-logo{
                            margin-right: 10px;
                        }
                        .news-author{
                            margin-right: 20px;
                        }
                        .news-time{
                            margin-right: 30px;
                        }
                    } 
                    .news-mid{
                        float: left;
                        .news-logo{
                            margin-right: 10px;
                        }
                    } 
                    .news-right{
                        float: right;
                        .news-logo{
                            margin-right: 10px;
                        }
                        .news-author{
                            margin-right: 50px;
                        }
                    } 
                }
            }
        }
    }
    @media screen and (max-width: 1210px)and (min-width: 960px) {
        #app .index-news{
            width: 740px;
        }
        #app  .news-pic {
            width: 640px;
        }
        #app .index-news .index-news {
            width: 640px;
            padding: 0 10px;
            img{
                margin-right: 10px;
            }
            .news-des{
                width: 350px;
                .news-author{
                    margin-right: 0;
                }
            }
        }
    }
    @media screen and (max-width: 960px) and (min-width: 740px) {
        #app .index-news{
            width: 740px;
            .news-one{
                width: 740px;
            }
        }
        #app .news-pic {
            width: 740px;
        }
        #app .index-news{
            width: 740px;
            img{
                margin-right: 50px;
            }
            .news-des{
                width: 350px;
                .news-author{
                    margin-right: 0;
                }
            }
        }
    }
    @media screen and (max-width: 740px) and (min-width: 320px) {
        #app .index-news{
            width: 100%;
            padding: 0;
            .news-one{
                width: 100%;
            }
        }
        #app .news-pic {
            width: 100%;
        }
        #app .index-news .news-one{
            width: 100%;
            padding-left: 4%;
            img{
                width: 20%;
                height: 35%;
                margin-right: 10px;
            }
            .news-des{
                width: 69%;
                margin-right: 3%;
                margin-top: 10px;
                h1{
                    font-size: 16px;
                }
                h3{
                    font-size: 14px;
                }
                .last{
                    font-size: 12px;
                    .news-left{
                        float: none;
                    }
                }
                .news-author{
                    margin-right: 0;
                }
            }
        }
    }
</style>