<template>
    <div class="qukuailian">
        <div class="des">
            <div class="title">{{$t("block_chain_technology")}}</div>
            <div class="des-font">{{$t("block_chain_description")}}</div>
        </div>
        <div class="index-news">
            <div class="news-one" v-for="(index,value) in this.lists" :key="value">
                <img :src="http+index.img" alt="">
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
                            <span class="news-author">{{index.view}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HqContent from '../../index/computed/hq-content'
import {mapState} from 'vuex'
export default {
  name: 'HangQingdata',
  components:{
      HqContent
  },
  data(){
      return{
        lists:[]
      }
  },
  methods: {
        getdata1() {
            let url = this.http+'pc.php/Article/lists/p/1/cid/41/access_token/'+this.token
            fetch(url)
                .then(e => e.json())
                .then(e => {
                    this.lists = e.data.lists
                    console.log(this.lists)
                });
            } 
    },
    computed: {
        ...mapState(["token","http"])
    },
    mounted () {
        this.getdata1()
    }
}
</script>
<style  lang="less">
    .qukuailian{
        width: 100%;
        height: 1300px;
        background: #fff;
        .des{
            background: yellow; 
            background: url(../../../assets/img/logo-12.png) no-repeat 26px 93px;
            .title{
                height: 83px;
                font: 24px/83px "黑体";
                text-indent: 24px;
            }
            .des-font{
                padding: 12px 26px 0 55px;  
                font: 14px/30px "微软雅黑";
                color: #333333;
            }
        }
        .index-news{
            width: 840px;
            box-sizing: border-box;
            padding: 0 30px;
            background: #fff;
            .news-one{
                width: 100%;
                height: 220px;
                border-bottom: 1px dashed #ecedf1; 
                img{
                    margin-top: 30px;
                    margin-right: 30px;
                    float: left;
                }
                .news-des{
                    width: 530px;
                    height: 156px;
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
    }
    @media screen and (max-width: 1210px)and (min-width: 960px) {
        #app .qukuailian .news-pic {
            width: 640px;
        }
        #app .qukuailian.index-news {
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
        #app .qukuailian .news-pic {
            width: 740px;
        }
        #app .qukuailian .index-news {
            width: 740px;
            img{
                margin-right: 50px;
            }
            .news-des{
                width: 410px;
                .news-author{
                    margin-right: 0;
                }
            }
        }
    }
</style>