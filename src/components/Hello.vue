<template>
  <div class="hello">
    <Row type="flex" justify="center" class="code-row-bg">
      <Col span="12">
        <Table border :columns="columns7" :data="data6"></Table>
      </Col>
    </Row>
    
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      columns7:[
        {
          title:'姓名',
          key:'name'
        },
        {
          title:'年龄',
          key:'age'
        },
        {
          title:'性别',
          key:'address'
        }
      ],
      data6:[
        {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
        },
      ]
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
