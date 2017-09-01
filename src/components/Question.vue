<template>
  <div class="hello">
    <users-select />
    <Table on-row-click='selectClick' border :columns="columns7" :data="data6"></Table>
  </div>
</template>

<script>
import usersSelect from './usersSelect'
import {columns7,data6} from '@/data/table'
import Vue from 'vue'
export default {
  name: 'hello',
  data () {
    return {
      columns7:columns7
    }
  },
  components:{
    usersSelect
  },
  computed:{
    data6(){
      return this.$store.getters.urlDataFilter;
    }
  },
  mounted(){
    this.$store.dispatch('getUrlsDataAction');
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
