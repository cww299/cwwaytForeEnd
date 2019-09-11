<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-row>
      <el-button type="primary" v-on:click="getUserData">获取用户信息</el-button>
    </el-row>
    <el-table :data="userData" style="width: 40%;margin:0 auto;" border>
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
        <el-button size="mini">编辑</el-button><!-- @click="handleEdit(scope.$index, scope.row)"-->
        <el-button size="mini" type="danger">删除</el-button>
      </el-table-column>
    </el-table>
    <el-pagination background
                   layout="prev,pager,next"
                   :total="allUser"
                   :page-size="5"
                   @current-change="trunPage"></el-pagination>
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
      currPage:1,
      allUser:0
    }
  },
  methods: {
    getUserData: function(){
      var self = this;
        axios.get('/api/listUser?size=5&page='+self.currPage).then(function(r){
          r = r.data;
          if(r.code==0){
            self.userData = r.data.rows;
            self.allUser = r.data.total;
          }

        })
    },
    trunPage: function(val){
      this.currPage = val;
      this.getUserData();
    }
  }
}
</script>

<style scoped>

</style>
