<template>
  <div class="hello">
    <Table on-row-click='selectClick' border :columns="columns7" :data="data6"></Table>
  </div>
</template>

<script>
import {columns7,data6} from '@/data/table'
import Vue from 'vue'
export default {
  name: 'hello',
  data () {
    return {
      columns7:columns7
    }
  },
  computed:{
    data6(){
      return this.$store.getters.urlDataFilter;
    }
  },
  mounted(){
    this.$store.dispatch('getUrlsDataAction');

    // 获取所有问题的地址
    /*this.$http.get('/api/urls')
    .then((data) => {
      let datas = data.data;
      datas.forEach((item) => {
        item.status = '未回答';
      })
      return datas;
    }).then((datas) =>{
      // 获取讲师
      this.$http.get('/user/getUsers').then((data) => {
        console.log(data.data)
        datas.forEach((item) => {
          item.users = data.data;
        })
        this.data6 = datas;
      })
    });*/

  },
  methods: {
    selectClick(){
      console.log(123)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
