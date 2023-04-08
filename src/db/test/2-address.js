/**
 * @description 地址数据模拟测试
 * @author 李伟杰
 */

const { Address } = require('../../model/Address')

!(async () => {
  // 创建地址
  // await Address.create({
  //   username: 'zhangsan',
  //   city: '上海',
  //   department: '东尚村社区2',
  //   houseNumber: '南二街42b',
  //   name: '张三',
  //   phone: '18539150234'
  // })

  // 查找地址
  // const zhangsan = await Address.find({
  //   username: 'zhangsan'
  // })
  // console.log(zhangsan)
  
  const id = '627a3eb9c4eac577b3572dc9'
  // const zhangsan = await Address.findById(id)
  // console.log(zhangsan)

  // 更新地址信息
  const newData = {
    username: 'zhangsan',
    city: '焦作',
    department: '东尚村',
    houseNumber: '门牌号213',
    name: '张三a',
    phone: '18539150244'
  }
  const zhangsan = await Address.findOneAndUpdate(
    { _id: id, username: 'zhangsan' },
    newData,
    {
      new: true
    }
  )
  console.log(zhangsan)
})()