<template>
  <div>
    登录成功
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {

    }
  },
  created(){  //生命周期里接收参数
    this.data = this.$route.query.data,  //接受参数关键代码
    console.log(this.data)
  }
}
</script>

<style scoped>

</style>
