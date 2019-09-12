<template>
  <el-container style="height: 900px; border: 1px solid #eee">
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-user" style="margin-right: 15px">{{user.username}}</i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>

    <el-container>
      <el-aside style="background-color: rgb(238, 241, 246);width:200px;">
        <el-menu :default-openeds="['1', '2']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

        </el-menu>
      </el-aside>
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
export default {
  data() {
    let date1 = new Date('2018/09/14 18:00:00')
    let date2 = new Date()
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
      user:{
        username:'cww'
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

  }
}
</script>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
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
</style>
