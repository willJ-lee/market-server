/**
 * @description 模拟接口测试
 * @author 李伟杰
 */

const { User } = require('../../model/User')

!(async () => {
  // 创建
  // await User.create({
  //   username: 'zhangsan',
  //   password: 'abc123'
  // })

  // await User.create({
  //   username: '18539150233',
  //   password: 'abc123'
  // })

  // 登录
  const zhansan = await User.findOne({
    username: '18539150233',
    password: 'abc123'
  })
  console.log(zhansan);
})()