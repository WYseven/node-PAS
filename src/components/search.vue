<template>
  <div class="hello">
    <div style="font-size:30px;">
      共有{{data6.length+63}}个问题
    </div>
    <Table on-row-click='selectClick' border :columns="columns7" :data="data6"></Table>
  </div>
</template>

<script>
import {columns7,data6} from '@/data/search-table'
import Vue from 'vue'
export default {
  name: 'hello',
  data () {
    return {
      columns7:columns7,
      data6:[]
    }
  },
  mounted(){
    this.$store.dispatch('getUrlsByKeyWord')
    .then((data) => {
      this.data6 = data.data;
    })
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
