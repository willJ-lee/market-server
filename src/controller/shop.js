/**
 * @description 商店操作相关
 * @author 李伟杰
 */

const { Shop } = require('../model/Shop')
const { Product } = require('../model/Product')

/**
 * 获取附近商店
 * @returns 
 */
async function getHotList() {
  const hotList = await Shop.find().sort({ _id: -1 })
  return hotList
}

/**
 * 获取某个商店信息
 * @param {String} id 
 */
async function getShopInfo(id) {
  const shopContent = await Shop.findById(id)
  return shopContent
}

/**
 * 获取某个商店中的所有商品
 * @param {String} shopId 
 * @param {String} tab 
 * @returns 
 */
async function getProductsByShopId(shopId, tab = 'all') {
  const list = await Product.find({
    shopId,
    tabs: {
      $in: tab
    }
  }).sort({ _id: -1 })
  return list
}

module.exports = {
  getHotList,
  getShopInfo,
  getProductsByShopId
}