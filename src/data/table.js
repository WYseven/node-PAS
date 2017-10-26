import Button from 'iview/src/components/button';
import select from '@/components/select'

let actionRender = (h, params) => {
  return (
    <div>
      <Button style='margin:0px 5px;' type="primary">
        <a style='color:#fff;' href={params.row.url}>查看</a>
      </Button>
    </div>
  )
}


let data6 = [
  {
      name: '王小明',
      age: 18,
      address: '北京市朝阳区芍药居'
  },
]

function getColumns7Method () {
  let columns7 = [
    {
      title:'地址',
      key:'title'
    },
    {
      title:'问题状态',
      key:'status'
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
          ]),
          h(select,{
            props:{
              urlId:params.row._id,
              allotId:params.row.allotId
            }
          }),
          h('Button',{
            props: {
              type: 'primary',
              size: 'small'
            },
            on: {
              click: () => {
                this.completedHandle({
                  urlId:params.row._id,
                  allotId:params.row.allotId
                });
              }
            },
            domProps:{
              innerText: '回答完成'
            },
            style: {
                marginLeft: '5px'
            }
          })
        ])
      }
    }
  ]
  return columns7;
}

export {getColumns7Method,data6}
