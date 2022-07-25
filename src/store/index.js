// vue 核心模块声明
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutation';

// 声明使用 vuex 插件
Vue.use(Vuex);

const store = new Vuex.Store({
  state, 
  mutations
});


export default store;