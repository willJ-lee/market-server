/**
 * @description 订单相关
 * @author 李伟杰
 */

const router = require('koa-router')()

// 自定义模块
const { SuccessModel, ErrorModel } = require('../res-model/index')
const loginCheck = require('../middleware/loginChenk')
const createOrder = require('../controller/order')

router.prefix('/api/order')

// 创建订单
router.post('/', loginCheck, async function (ctx, next) {
  const userInfo = ctx.session.userInfo
  const username = userInfo.username
  const data = ctx.request.body
  // 创建
  try {
    const newOrder = await createOrder(username, data)
    ctx.body = new SuccessModel(newOrder)
  } catch (ex) {
    console.log(ex)
    console.log(data)
    ctx.body = new ErrorModel(10006, '创建订单出错')
  }
})

module.exports = router