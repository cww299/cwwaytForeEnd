<!-- helloYt首页模块 -->
<template>
  <div>
    {{ dataTime.day }}天{{ dataTime.hour }}时{{ dataTime.min }}分{{ dataTime.second }}秒
    <template>
      <el-carousel :interval="4000" type="card" height="500px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </template>
  </div>
</template>

<script>
  export default {
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
        dataTime: {
          day: day,
          hour: hour,
          min: min,
          second: second,

        },
      }
    },
    methods:{
    },
    mounted() {
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
    }
  }
</script>
