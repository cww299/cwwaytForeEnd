import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//vuex实例
const store = new Vuex.Store({
  isCollapse:true,
  getters:{
    getIsCollapse:function(){
      return this.isCollapse;
    }
  },
  mutations:{
    collapseTrans:function(){

    }
  }
})

export default store;
