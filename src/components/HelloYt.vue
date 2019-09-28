<template>
  <el-container class="containerBody">

    <div :class="{'menuCollapse':isCollapse,'containerAside':true }">
      <el-menu
        :collapse="isCollapse"
        default-active="2"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
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
        <span @click="collapseTrans">
          <i class="el-icon-s-fold"></i>
        </span>

        </div>
        <div class="rightDiv">
          <span>
            <i class="el-icon-setting"></i>
          </span>
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-user">&nbsp;{{user.username}}</i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>

      <el-main>
        {{ dataTime.day }}天{{ dataTime.hour }}时{{ dataTime.min }}分{{ dataTime.second }}秒
        <template>
          <el-carousel :interval="4000" type="card" height="500px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </template>
      </el-main>

    </el-container>

  </el-container>
</template>

<script>
export default{
  data() {
    let date1 = new Date('2018/09/14 18:00:00');
    let date2 = new Date();
    let s1 = date1.getTime(),s2 = date2.getTime();
    let total = (s2 - s1)/1000;
    let day = parseInt(total / (24*60*60));//计算整数天数
    let afterDay = total - day*24*60*60;//取得算出天数后剩余的秒数
    let hour = parseInt(afterDay/(60*60));//计算整数小时数
    let afterHour = total - day*24*60*60 - hour*60*60;//取得算出小时数后剩余的秒数
    let min = parseInt(afterHour/60);//计算整数分
    let second = parseInt(total - day*24*60*60 - hour*60*60 - min*60);//取得算出分后剩余的秒数

    return {
      dataTime:{
        day: day,
        hour:hour,
        min:min,
        second:second,

      },
      isCollapse: false,
      user:{
        username:'cww2'
      }
    }

  },
  mounted:function(){
    let self = this.dataTime;
    setInterval(function(){
      self.second++;
      if(self.second===60){
        self.second = 0;
        self.min++;
        if(self.min===60){
          self.min=0;
          self.hour++;
          if(self.hour===24){
            self.hour=0;
            self.day++;
          }
        }
      }
    }, 1000);
  },
  methods:{
    collapseTrans:function(){
      let self = this;
      if(self.isCollapse){

      }
      self.isCollapse = !self.isCollapse;
    }
  }
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
    margin: 0 8px;
    color: white;
    padding: 20px;
    box-sizing: border-box;
  }
  .containerHeader span:hover{
    color:#0099ff;
    border-top:2px solid white;
  }
  .containerHeader .rightDiv{
    float:right;
  }
  .containerHeader .leftDiv{
    float:left;
  }
  .containerAside{
    background-color: #545c64;
    width: 200px;
    overflow-x: hidden;
  }
  .menuCollapse{
    width: 60px;
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
  @media screen and (max-width: 480px){
    .el-menu--collapse {
      overflow: hidden;
    }
    .menuCollapse{
      width: 0px;
    }
  }
</style>
