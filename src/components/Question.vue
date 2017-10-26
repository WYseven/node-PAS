<template>
  <div class="hello">
    <users-select />
    <Table on-row-click='selectClick' border :columns="columns7" :data="data6"></Table>
  </div>
</template>

<script>
import usersSelect from './usersSelect'
import {getColumns7Method,data6} from '@/data/table'
import Vue from 'vue'

export default {
  name: 'hello',
  data () {
    return {}
  },
  components:{
    usersSelect
  },
  computed:{
    data6(){
      // 拿到过滤后的值
      return this.$store.getters.urlDataFilter;
    },
    columns7() {
      return getColumns7Method.bind(this)();
    }
  },
  mounted(){
    this.$store.dispatch('getUrlsDataAction');
  },
  methods: {
    selectClick(){
      console.log(123)
    },
    completedHandle(paylod){  // 点击回答完成任务执行
      this.$http.get('/api/completedById',{
        params:paylod
      }).then((data) => {
        this.$store.commit('updataByAllotFlag',data.data.data)
      })
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
