<template>
 <div class="select-box">
    <Select v-model="model2" on-change='abc' :placeholder='initValue' size="small" style="width:100px">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
 </div>
</template>
<script>
export default {
  name:'select',
  props:['users','urlId',"allotId"],
  data(){
    return {
      cityList: [],
      model2: ''
    }
  },
  computed:{
    initValue(){
      let userNameFilter = this.users.filter((item) => {
        return item._id === this.allotId;
      });
      return userNameFilter.length ? userNameFilter[0].userName : '分配';
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
        //console.log(data.data)
      })
    }
  },
  mounted(){
    this.cityList = this.users.map((item) => {
      return {
        value: item._id,
        label: item.userName
      }
    })
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


