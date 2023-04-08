/**
 * @description address router
 * @author  李伟杰
 */

const router = require('koa-router')()
// 自定义模块
const { SuccessModel, ErrorModel } = require('../res-model/index')
const loginCheck = require('../middleware/loginChenk')
const { createAddress, getAddressList, getAddress, updateAddress } = require('../controller/address')

router.prefix('/api/user/address')

// 创建收货地址
router.post('/', loginCheck, async function (ctx, next) {
  // 获取前端传过来的内容
  const data = ctx.request.body
  // 获取session中当前的用户信息
  const userInfo = ctx.session.userInfo
  const username = userInfo.username
  // 创建
  try {
    const newAddress = await createAddress(username, data)
    ctx.body = new SuccessModel(newAddress)
  } catch (ex) {
    console.log(ex)
    ctx.body = new ErrorModel(10004, '创建收货地址失败')
  }
})

// 获取收货地址列表
router.get('/', loginCheck, async function (ctx, next) {
  const userInfo = ctx.session.userInfo
  const username = userInfo.username
  // 获取
  const list = await getAddressList(username)
  ctx.body = new SuccessModel(list)
})

// 获取单个收货地址
router.get('/:id', loginCheck, async function (ctx, next) {
  // 获取传递的参数: id
  const id = ctx.params.id
  // 获取
  const address = await getAddress(id)
  ctx.body = new SuccessModel(address)
})

// 更新收货地址
router.patch('/:id', loginCheck, async function (ctx, next) {
  const id = ctx.params.id
  const data = ctx.request.body
  const userInfo = ctx.session.userInfo
  const username = userInfo.username
  // 更新
  try {
    const newAddress = await updateAddress(id, username, data)
    ctx.body = new SuccessModel(newAddress)
  } catch (ex) {
    console.log(ex)
    ctx.body = new ErrorModel(10005, '更新失败')
  }
})

module.exports = router