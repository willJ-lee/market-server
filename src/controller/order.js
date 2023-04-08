/**
 * @description 订单数据操作
 * @author  李伟杰
 */

const { Order } = require('../model/Order')
const { Product } = require('../model/Product')
const { Address } = require('../model/Address')

async function createOrder(username, data) {
  // 结构传过来的数据
  const {
    addressId,
    shopId,
    shopName,
    isCanceled = false,
    products = []
  } = data
  // 获取订单地址
  const address = await Address.findById(addressId)
  // 获取商品列表
  const pIds = products.map(p => p.id)
  const productList = await Product.find({
    shopId,
    _id: {
      $in: pIds
    }
  })

  // 拼接购买数量
  const productListWithSales = productList.map(p => {
    // 商品id
    const id = p._id.toString()
    // 通过商品id找到销售数量
    const filterProducts = products.filter(item => item.id === id)
    if (filterProducts.length === 0) {
      throw new Error('未找到商品数量')
    }
    return {
      product: p,
      orderSales: filterProducts[0].num
    }
  })

  // 创建订单到数据库
  const newOrder = await Order.create({
    username,
    shopId,
    shopName,
    address,
    isCanceled,
    products: productListWithSales
  })
  return newOrder
}

module.exports = createOrder