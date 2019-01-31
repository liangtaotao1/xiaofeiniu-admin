<template>
  <div class="xfn-category">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>菜品类别管理</el-breadcrumb-item>
      <el-breadcrumb-item>类别列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-button type="primary" @click="addCategory">添加新的菜品列别</el-button>
    <br>
    <el-table :data="category " stripe border>
      <el-table-column  prop="cid" label="编号" ></el-table-column>
      <el-table-column  prop="cname" label="名称" ></el-table-column>
      <el-table-column label="操作" >
        <template slot-scope="{row,$index}">
        <el-button type="success" size="mini" @click="updateCategory(row,$index)">修改</el-button>
        <el-button type="danger" size="mini" @click="deleteCategory(row,$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div> 
</template>
<script>
export default {
  data(){
    return{
      category:[]
    }
  },
  mounted() {
    var url = this.$store.state.globalSettings.apiUrl + '/admin/category';
    this.$axios.get(url).then((res)=>{
      this.category = res.data
    }).catch((err)=>{
      console.log(err)
    })
  },
  methods: {
    deleteCategory(c ,i){
      this.$confirm('删除不可撤销！你确定吗','提示',{
        type:"warning"
      }).then(()=>{
        var url = this.$store.state.globalSettings.apiUrl+'/admin/category'+'/'+c.cid;
        this.$axios.delete(url).then((res)=>{
          console.log(res)
          if(res.data.code==200){
            this.category.splice(i,1);
            this.$message.success("菜品删除成功")
          }else{
            this.$message.error('类别删除错误'+req.data.msg)
          }
        }).catch((err)=>{
          console.log(err);
        })
      }).catch(()=>{})  
    },
    updateCategory(c ,i){
      this.$prompt("请输入修改菜品类别名：",'提示',{
        inputValue:c.cname
      }).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(err)
      })
    },
    addCategory(){
      this.$prompt("请输入新的菜品类别名：",'提示',{
        type:'info'
      }).then(({value})=>{
        //获得用户的输入，调用数据API添加数据库
        var url = this.$store.state.globalSettings.apiUrl+'/admin/category';
        this.$axios.post(url,{cname:value}).then((res)=>{
          console.log(res)
          if(res.data.code==200){
            this.$message.success('类别添加成功')
            //模型数据添加
            this.category.push({cid:res.data.cid,cname:value})
          }else{
            this.$message.error('添加失败')
          }
        }).catch((err)=>{
          console.log(err)
        })
      }).catch(()=>{})
    }
  },
}
</script>