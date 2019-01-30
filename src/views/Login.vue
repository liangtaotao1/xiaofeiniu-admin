<template>
  <div class="xfn-login-card">
    <el-card>
      <div slot="header">管理员登录</div>
      <div>
        <el-form label-width="80px">
          <el-form-item label="管理员名:">
            <el-input v-model="formData.aname" placeholder="请输入管理员名"></el-input>
          </el-form-item>
          <el-form-item label="登录密码:">
            <el-input type="password" v-model="formData.apwd" placeholder="请输入管理员密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type='primary' @click="doLogin">登录</el-button>
            <el-button @click="doCancel">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script>
  export default {
    data(){
      return{ 
        formData:{
          aname:"admin",
          apwd:"123456"
        }
      }
    },
    methods: {
      doLogin(){ //执行登陆
        var url = this.$store.state.globalSettings.apiUrl+`/admin/login/${this.formData.aname}/${this.formData.apwd}`;
        //console.log(url)
        this.$axios.get(url).then((res)=>{
          if(res.data.code==200){
            //把用户名存入vuex存储仓库
            this.$store.commit('setAdminName',this.formData.aname)
            this.$router.push('/main');
          }else{
            this.$alert('用户名或密码错误','确定',{type:'error'}).then(()=>{}).catch(()=>{});
          }
        }).catch((err)=>{
          console.log(err)
        })
      },
      doCancel(){ //清除用户输入
        this.formData.aname = "";
        this.formData.apwd = "";
      }
    }
    
  }
</script>
<style lang="scss">
  .xfn-login-card{
    width:450px;
    margin:100px auto;
    .el-card__header{
      text-align: center;
      font-size: 1.2em;
    }
  }
  
</style>
