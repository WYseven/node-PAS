<template>
 <div class="select-box">
    <Select v-model="model2" on-change='abc' :placeholder='initValue' size="small" style="width:100px">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
 </div>
</template>
<script>
export default {
  name:'users-select',
  data(){
    return {
      model2: ''
    }
  },
  computed:{
    users(){
      return this.$store.state.users;
    },
    initValue(){
      return '选择';
    },
    cityList(){
        return this.users.map((item) => {
          console.log(item._id);
          return {
            value: item._id,
            label: item.userName
          }
      })
    }
  },
  watch:{
    model2(userId){
      // 分配给对应的人
      this.$http.get('/api/setAllotId',{
        params:{
          urlId:this.urlId,
          userId
        }
      }).then((data) => {
      })
    }
  },
  mounted(){

  },
  methods:{
    abc(){
      console.log(123)
    }
  }
}
</script>
<style scoped>
.select-box {
  display: inline-block;
}
</style>
