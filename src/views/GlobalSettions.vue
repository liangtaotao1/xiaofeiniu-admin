<template>
  <div class="settings">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>全局设置</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-card shadow="never">
      <el-form label-width="120px" >
        <el-form-item label="应用名称">
          <el-input v-model="appName"></el-input>
        </el-form-item>
        <el-form-item label="应用API网址">
          <el-input v-model="apiUrl"></el-input>
        </el-form-item>
        <el-form-item label="后台管理端网址">
          <el-input v-model="adminUrl"></el-input>
        </el-form-item>
        <el-form-item label="客户端App网址">
          <el-input v-model="appUrl"></el-input>
        </el-form-item>
        <el-form-item label="ICP备案号">
          <el-input v-model="icp"></el-input>
        </el-form-item>
        <el-form-item label="版权声明">
          <el-input v-model="copyright"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="doSubmit">保存修改</el-button>
          <el-button @click="doCancel">取消修改</el-button>
        </el-form-item>
        
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data(){
    return{
      appName: "",
      appUrl: '',
      apiUrl: '',
      appUrl: '',
      icp: '',
      copyright: ''
    }
  },
   
 mounted(){
    //引用复制，两个变量指向一个对象
    //this.formData = this.$store.state.globalSettings;
    //对象复制
   
    this.appName = this.$store.state.globalSettings.appName;
    this.apiUrl = this.$store.state.globalSettings.apiUrl;
    this.adminUrl = this.$store.state.globalSettings.adminUrl;
    this.appUrl = this.$store.state.globalSettings.appUrl;
    this.icp = this.$store.state.globalSettings.icp;
    this.copyright = this.$store.state.globalSettings.copyright;
  },
  methods: {
    doSubmit(){
      var url = this.$store.state.globalSettings.apiUrl+'/admin/settings';
      var data = {
        appName: this.appName,
        apiUrl: this.apiUrl,
        adminUrl: this.adminUrl,
        appUrl: this.appUrl,
        icp: this.icp,
        copyright: this.copyright
      }
      this.$axios.put(url,data).then((res)=>{
        console.log(res.config.data)
        if(res.data.code==200){
          this.$message.success('全局设置修改成功')
          res.config.data.appName = this.$store.state.globalSettings.appName
        }else{
          this.$message.error('全局设置修改失败')
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    doCancel(){
      this.appName = this.$store.state.globalSettings.appName;
      this.apiUrl = this.$store.state.globalSettings.apiUrl;
      this.adminUrl = this.$store.state.globalSettings.adminUrl;
      this.appUrl = this.$store.state.globalSettings.appUrl;
      this.icp = this.$store.state.globalSettings.icp;
      this.copyright = this.$store.state.globalSettings.copyright;
    }
  }
}
</script>
