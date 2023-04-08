const router = require('koa-router')()
// 自定义模块
const { register, login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../res-model/index')

router.prefix('/api/user')

// 注册
router.post('/register', async function (ctx, next) {
  const { username, password } = ctx.request.body
  // 存储
  try {
    const newUser = await register(username, password)
    // ctx.body = {
    //   errno: 0,
    //   data: newUser
    // }

    // 使用成功后统一返回格式
    ctx.body = new SuccessModel(newUser)
  } catch (ex) {
    // ctx.body = {
    //   errno: 10001,
    //   message: `创建用户出错, ${ex.message}`

    // 使用错误后统一返回格式
    ctx.body = new ErrorModel(10001, `创建用户出错, ${ex.message}`)
  }
 
})

// 登录
router.post('/login', async function(ctx, next) {
  const { username, password } = ctx.request.body
  // 操作数据库查询
  const res = await login(username, password)
  if (res) {
    ctx.session.userInfo = { username }
    ctx.body = new SuccessModel()
  } else {
    ctx.body = new ErrorModel(10002, `登录出错`)
  }
})

module.exports = router
