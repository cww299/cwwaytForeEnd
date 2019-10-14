<template>
  <el-container class="containerBody">
    <div :class="[{'menuCollapse': isCollapse },'containerAside']">
      <el-menu
        :collapse="isCollapse" default-active="index"
        background-color="#393D49"
        text-color="#fff"
        @select = 'selectMenu'
        active-text-color="#ffd04b">
        <el-submenu index="helloYt">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>系统</span>
          </template>
          <el-menu-item index="index">首页</el-menu-item>
          <el-menu-item index="sys/user">用户信息</el-menu-item>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
    <el-container>
      <el-header class="containerHeader">
        <div class="leftDiv">
          <span  @click="collapseChange" :class="[{'collapseIcon': isCollapse }]" style="font-size:22px;"> <!-- 隐藏菜单栏按钮 -->
            <i class="el-icon-s-fold"></i>
          </span>
        </div>
        <div class="rightDiv">
          <span>
            <i class="el-icon-setting"></i>
          </span>
          <span :click="fullScreen">
            <i class="el-icon-full-screen"></i>
          </span>
          <el-dropdown @command="dropdownAction">
            <span class="el-dropdown-link">
              <i class="el-icon-user">&nbsp;{{user.userName}}</i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <div :class="[{'blackDiv':!isCollapse}]" @click="collapseChange()"></div>
        <router-view/>
      </el-main>
    </el-container>

  </el-container>
</template>

<script>
export default{
  data() {
    return {
      isCollapse:false,
      user:{
        userName:'',
      },
      currMenu:'',
    }
  },
  methods:{
    collapseChange:function(){
      this.isCollapse = !this.isCollapse;
    },
    dropdownAction:function(command){
      if(command=='logout'){
        this.$confirm('是否确认退出?', '退出登录', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '注销成功!'
          });
          this.$router.push({path:'/'});
        }).catch(() => {
        })
      }
    },
    selectMenu:function(index,indexPath){
      if(this.currMenu == indexPath)
        return;
      else
        this.currMenu = indexPath;
      this.$router.push({
        path: '/'+indexPath[0]+'/'+indexPath[1]
      })
    },
    fullScreen:function(){
    }
  },
  mounted:function(){
    this.user = this.$route.query;
  },
}
</script>
<style>
  .containerBody{
    border: none;
    height: 100%;
  }
  .containerHeader{
    font-size: 12px;
    background-color: #393D49;
    line-height: 60px;
    padding-left: 0;
  }
  .containerHeader span{
    cursor: pointer;
    color: white;
    padding: 15px;
    box-sizing: border-box;
    font-size: 16px;
  }
  .containerHeader span:hover{
    color:#0099ff;
    border-top:3px solid #03a9f4ab
  }
  .containerHeader .rightDiv{
    float:right;
  }
  .containerHeader .leftDiv{
    float:left;
  }
  .containerAside{
    background-color: #393D49;
    width: 200px;
    overflow-x: hidden;
    transition: .4s;
  }
  .menuCollapse{
    width: 60px;
    transition: .4s;
  }
  .containerAside .el-menu:not(.el-menu--collapse) {
    width: 217px;
    overflow-x: hidden;
    height: 100%;
  }
  .el-menu{
    border-right:none;
    text-align: left;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color:#99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-menu-item.is-active{
    background: rgb(43, 86, 120) !important
  }
  .collapseIcon{
    transform: rotate(180deg) !important;
    display: inline-block;
    padding: 0px 15px !important
  }
  .collapseIcon:hover {
    border-top:0 !important;
    box-sizing: box-sizing;
    border-bottom: 3px solid #03a9f4ab !important;
  }
  @media screen and (max-width: 480px) {
    .el-menu--collapse {
      overflow: hidden;
    }
    .menuCollapse {
      width: 0px;
    }
    .blackDiv{
      background: rgba(0, 0, 0, 0.8);
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 99999;
    }
    .el-main {
      padding:0px;
    }
  }
</style>
