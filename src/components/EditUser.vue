<template>
  <div class="contentDiv">
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :xs="20" :sm="20" :md="18" :lg="18" :xl="12">
        <el-form ref="user" :model="user" label-width="80px" :rules="rules">
          <el-form-item label="ID：">
            <el-input v-model="user.id" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="用户名：" prop="username">
            <el-input v-model="user.username"></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="pwd">
            <el-input v-model="user.pwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="update('user')">修改</el-button>
            <el-button @click="back">返回</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default  {
  name: 'editUser',
  data () {
    return {
      user: this.$route.params,
      rules: {
        username: [
          {required: true, message: '用户名不能为空！', trigger: 'blur'}
        ],
        pwd: [
          {required: true, message: '密码不能为空', trigger: 'blur'}
        ],
      }
    }
  },
  methods:{
    update: function(user){
      var self = this;
      this.$refs[user].validate((verify) => {
        if(verify){
          axios.get('/api/saveUser',{ params: self.user}).then((r)=>{
            r = r.data;
            if(r.code==0){
              self.$message({
                message: r.msg,
                type: 'success',
              })
            }else{
              self.$message.error(r.msg);
            }
          })
        }
      })
    },
    back:function(){
      this.$router.push({
      name:'sysUserList',
    })
    }
  },
  mounted:function(){

  }
}
</script>

<style>
  .contentDiv{
    padding:20px 10px;
  }
</style>
