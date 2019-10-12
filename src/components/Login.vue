<template>
  <div class="center">
    <h2>登录中心</h2>
    <el-form ref="loginForm" :model="loginForm" label-width="80px" :rules="rules">
      <el-form-item label="用户名：" prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入用户名" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="pwd">
        <el-input v-model="loginForm.pwd" type="password" placeholder="请输入密码" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('loginForm')">登录</el-button>
        <el-button @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import axios from 'axios'
export default{
  data(){
    return {
      loginForm:{
        username:'',
        pwd:'',
      },
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
    login:function(formName){
      var self = this;
      this.$refs[formName].validate((verify) => {
        if (verify) {
          axios.get('/api/login',{ params: self.loginForm  }).then((r)=>{
            r = r.data;
            if(r.code === 0){
              this.$router.replace({path:'helloYt',
                query:{userName:self.loginForm.username},
              })
            }else{
              self.$message.error('账号或密码错误！');
            }
          })
        }
      });
    },
    register:function(){

    }
  }
}
</script>

<style>
  .center{
    width: 500px;
    border: 1px solid lightgray;
    margin: 200px auto;
    padding: 60px;
    background-color: #7b6a484d;
  }
</style>
