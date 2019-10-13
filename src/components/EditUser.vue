<template>
  <div>
    <el-form  v-model="user" label-width="80px">
      <el-form-item label="ID：">
        <el-input v-model="user.id" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="用户名：">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="密码：">
        <el-input v-model="user.pwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="update">修改</el-button>
        <el-button @click="back">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
  export default  {
    name: 'editUser',
    data () {
      return {
        user: this.$route.params,
      }
    },
    methods:{
      update: function(){
        this.$message.error('该功能还未完善');
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

</style>
