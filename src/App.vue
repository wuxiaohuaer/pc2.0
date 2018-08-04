<template>
  <div id="app" ref="app" style="width:100%;height:100%;">
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
      // getwidth(){
      //     // this.$refs.app.width = this.screenWidth;
          
      //     this.$refs.app.style.width = this.screenWidth
      // }
  },
  mounted () {
        const that = this
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                that.screenWidth = window.screenWidth
            })()
        }
        
    },
    watch: {
        screenWidth (val) {
            this.screenWidth = val
            
            // this.getwidth()
        }
    }
}
</script>

<style lang="less">
</style>
