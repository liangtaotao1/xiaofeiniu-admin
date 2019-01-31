<template>
  <div class="xfn-main-header">
    <h3 class="xfn-titel">{{$store.state.globalSettings.appName}}管理后台</h3>
    <div class="xfn-right">
      当前用户：{{$store.state.adminName}}
      <el-button size="mini" @click="quit" type="primary">退出</el-button>      
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    quit(){
      //清除登录信息
      this.$store.commit('setAdminName','')
      //跳转登录页
      this.$router.push('/login')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$header-height:60px;
.xfn-main-header{
  background: #DCDFE6;
  border-radius:4px;
  line-height:$header-height;
  height:$header-height;
  padding:0 6px;
  .xfn-titel {
    color:#303133;
    float:left;
    margin:0;
  }
  .xfn-right {
    float:right;
  }
}
</style>
