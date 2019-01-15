
<template>
  <div class="bg">
    <div class="logo">
        此处可放logo或者产品名称
    </div>
    <div class="content">
      <form action="javascript:;" method="post">
        <div>
          <input type="text" placeholder="请输入用户名">
        </div>
        <div>
          <input type="text" placeholder="请输入密码">
        </div>
        <div>
          <button @click="login">
            登录
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {

    }
  },
  methods:{
    login:function(){
      var that = this;
      this.$axios.post("/api/data").then(function(res){
          // console.log(res);
          that.$router.push({  //核心语句
            path:'/index',   //跳转的路径
            query:{           //路由传参时push和query搭配使用 ，作用时传递参数
              id:that.id,
              data:res
            }
          })

      }).catch(function(error){
          console.log(error);
      });
    }
  }

}
</script>

<style scoped>
  .bg{
    background:url(../assets/loginBg.jpg) no-repeat;
    background-size: cover;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo{
    margin-bottom: 200px;
  }
  .content{
    background-color: #fff;
    width: 30%;
    padding: 2%;
    border-radius: 15px;

  }
  .content input{
    width: 100%;
    height: 40px;
    font-size: 20px;
    border-radius: 5px;
    margin-bottom: 10px;
    border: 1px solid #999;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .content button{
    width: 100%;
    height: 40px;
    font-size: 20px;
    border-radius: 5px;
    margin-bottom: 10px;
    border: 0;
    background: #08c;
    color:#fff;
  }
</style>


