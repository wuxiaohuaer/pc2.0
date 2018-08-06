<template>
  <div id="app"  ref="app" style="width:100%;height:100%;">
    <router-view/>
  </div>
</template>
<script>
export default {
    data() {
      return{
          screenWidth: document.body.clientWidth   // 这里是给到了一个默认值 （这个很重要）
      }
    },
    methods:{
        _isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        }
  },
  mounted () {
        if (this._isMobile()) {
            window.localStorage.setItem('userAgent','mobile')
        } else {
            window.localStorage.setItem('userAgent','pc')
        }
    },
    watch: {
    }
}
</script>

<style lang="less">
    #app{
        overflow: hidden;
    }
    @media screen and (max-width: 740px) and (min-width: 320px) {
        #app {
            padding-top: 140px;
        }
    }
</style>
