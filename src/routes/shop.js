/**
 * @description 商店相关
 * @author 李伟杰
 */

const router = require('koa-router')()
// 自定义模块
const { SuccessModel, ErrorModel } = require('../res-model/index')
const { getHotList, getShopInfo, getProductsByShopId } = require('../controller/shop')
// const loginCheck = require('../middleware/loginChenk')

router.prefix('/api/shop')

// 获取附近商店
router.get('/hot-list', async function (ctx, next) {
  // 获取
  const hotList = await getHotList()
  ctx.body = new SuccessModel(hotList)
})

// 获取某个商店内容
router.get('/:id', async function (ctx, next) {
  // 获取前端传递过来的参数
  const id = ctx.params.id
  // 获取
  const shopContent = await getShopInfo(id)
  ctx.body = new SuccessModel(shopContent)
})

// 获取商店中的商品信息
router.get('/:id/products', async function (ctx, next) {
  const shopId = ctx.params.id
  // 获取query参数
  const tab = ctx.query.tab || 'all'   // query没有值时默认为'all'
  // 获取
  const products = await getProductsByShopId(shopId, tab)
  ctx.body = new SuccessModel(products)
})

module.exports = router