import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    urlData:[],
    users:[]
  },
  getters:{
    urlDataFilter(state){
      state.urlData.forEach((item) => {
        item.status = '未回答';
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
    }
  },
  actions:{
    async getUrlsDataAction({commit,dispatch}){
      let urlsData = await axios.get('/api/urls');
      let usersData = await dispatch('getUsers');
      commit('setUrlsData',{urls:urlsData.data})
      commit('setUsersData',{users:usersData.data})
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
