import Button from 'iview/src/components/button';

let columns7 = [
  {
    title:'地址',
    key:'title'
  },
  {
    title:'操作',
    key:'action',
    align: 'center',
    render: (h, params) => {
      return h("div", [
        h('Button',{
          props: {
            type: 'primary',
            size: 'small'
          },
          style: {
              marginRight: '5px'
          }
        },[
          h('a',{
            style: {
              color: '#fff'
            },
            domProps:{
              target:'_blank',
              href:params.row.url,
            }
          },"查看")
        ])
      ])
    }
  }
]

let data6 = [
  {
      name: '王小明',
      age: 18,
      address: '北京市朝阳区芍药居'
  },
]

export {columns7,data6}
