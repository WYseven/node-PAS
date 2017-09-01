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
      let index = null;
      let newData = data.filter((item,i) => {
                    index = i;
                    return payload.id === item.id;
                  })[0];
          newData.flagAnswer="allotNoAnswer"
      // 给每一条数据添加

      state.urlData.splice(index,1,newData)
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
