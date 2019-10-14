<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-form :inline="true" :model="userForm" ref="userForm" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input v-model="userForm.username" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('userForm')">查询</el-button>
      </el-form-item>
    </el-form>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="12">
        <div class="">
          <el-table :data="userData" border>
            <el-table-column prop="id"
                             label="ID"
                             align="center"></el-table-column>
            <el-table-column prop="username"
                             label="用户名"
                             align="center" ></el-table-column>
            <el-table-column prop="pwd"
                             label="密码"
                             align="center"></el-table-column>
            <el-table-column label="操作"
                             align="center">
              <template slot-scope="scope">
                <el-button size="mini" @click="editUser(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" @click='deleUser(scope.$index)' type="danger">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="block">
            <el-pagination
              background
              @size-change="trunSize"
              @current-change="jumpPage"
              :page-sizes="[2, 5, 10]"
              :current-page="page.currPage"
              :page-size="page.pageSize"
              :total="page.total"
              layout="total, sizes, prev, pager, next, jumper">
            </el-pagination>
          </div>
        </div>
      </el-col>
    </el-row>
    
    
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'HelloYt',
  data () {
    return {
      msg: 'Welcome to my heart! yt',
      userData:[],
      page:{
        currPage:1,
        pageSize:5,
        total:0,
      },
      userForm:{
        username:''
      }
    }
  },
  mounted: function(){
  },
  methods: {
    submitForm: function(formName){
      var self = this;
      this.$refs[formName].validate((verify)=>{
        if(verify){
          axios.get('/api/listUserPage?size='+self.page.pageSize+'&page='+self.page.currPage,{
            params: self.userForm  }).then((r)=>{
            r = r.data;
            if(r.code === 0){
              self.userData = r.data.rows;
              self.page.total = r.data.total;
            }
          })
        }
      })
    },
    trunSize: function(val){
      this.page.pageSize = val;
      this.page.currPage = 1;
      this.submitForm('userForm');
    },
    jumpPage: function(val){
      this.page.currPage = val;
      this.submitForm('userForm');
    },
    editUser: function(index,data){
      this.$router.push({
        name:'sysEditUser',
        params: {
          'id': data.id,
          'username': data.username,
          'pwd': data.pwd,
        },
      })
    },
    deleUser: function(index){
      this.$confirm('是否确认删除？','删除',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() =>{
        this.userData.splice(index,1);
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(()=>{
      })
    }
  }
}
</script>

<style scoped>

</style>
