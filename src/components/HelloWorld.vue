<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button type="button" v-on:click="test">测试</button>
    <p>异步调用数据：{{ getDate }}</p>
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to my heart! yt',
      getDate:'',
    }
  },
  methods: {
    test: function(){
      var self = this;
        axios.get('/api/helloYt').then(function(r){
          self.getDate = r.data;
        })
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
