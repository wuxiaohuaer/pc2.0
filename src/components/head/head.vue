<template>
    <div>
        <top-head></top-head>
        <bottom-head></bottom-head>
    </div>
</template>
<script>
import TopHead from './computed/top-head'
import BottomHead from './computed/bottom-head'
export default {
  name: 'HdHead',
  components:{
      TopHead,
      BottomHead
  }
}
</script>
<style lang="less">
    
</style>