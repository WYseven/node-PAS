import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

// 问题状态
let questionStatus = {
  unAnswer: '未回答',
  allotNoAnswer: '已分配',
  answerDone: '回答了'
}

let store = new Vuex.Store({
  state:{
    urlData:[],
    users:[]
  },
  getters:{
    urlDataFilter(state){
      // 标明问题的状态
      state.urlData.forEach((item) => {
        item.status = questionStatus[item.flagAnswer];
      })

      return state.urlData;
    }
  },
  mutations:{
    setUrlsData(state, payload){
      state.urlData = payload.urls;
      // 给每一条数据添加
    },
    setUsersData(state, payload){
      state.users = payload.users;
      // 给每一条数据添加
    },
    updataByAllotId(state, payload){
      let data = state.urlData;
      // 找到那一条更新
      let option = state.urlData.find((item) =>  item._id === payload._id)
      option.allotId = payload.allotId;
    },
    updataByAllotFlag(state, payload){
      let data = state.urlData;
      // 找到那一条更新
      let option = state.urlData.find((item) =>  item._id === payload._id)
      option.flagAnswer = payload.flagAnswer;
    }
  },
  actions:{
    async getUrlsDataAction({commit,dispatch}){
      let urls = await axios.get('/api/urls');  // 获取所有的问题
      let users = await dispatch('getUsers');   // 获取讲师人数
      commit('setUrlsData',{urls:urls.data})
      commit('setUsersData',{users:users.data})
    },
    async getUsers({commit,dispatch}){
      return axios.get('/user/getUsers')
    },
    async getUrlsByKeyWord({commit,dispatch}){
      return axios.get('/api/getDataByKeyWord')
    }
  }
})

export default store;
