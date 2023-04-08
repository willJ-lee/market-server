/**
 * @description 订单模拟
 * @author 李伟杰
 */

const { Order } = require('../../model/Order')
const { Address } = require('../../model/Address')
const { Product } = require('../../model/Product')

!(async () => {
  const requestBody = {
    addressId: '627a3eb9c4eac577b3572dc9',
    shopId: '627ce0b76b41ea8cbcb2522a',
    shopName: '沃尔玛',
    isCanceled: false, // 订单是否取消
    products: [
      {
        id: '627ce3b4bab5d0141d3ca007',
        num: 4 // 商品数量
      },
      {
        id: '627ce3b4bab5d0141d3ca00a',
        num: 3
      }
    ]
  }
  
  // 获取地址
  const address = await Address.findById(requestBody.addressId)
  // 获得商品id数组
  const pIds = requestBody.products.map(p => p.id)
  // console.log(pIds);
  // 获得商品列表
  const productList = await Product.find({
    shopId: requestBody.shopId,
    _id: {
      $in: pIds
    }
  })
  // 整合订单购买数量
  const productListWidthSales = productList.map(p => {
    const id = p._id.toString()
    // 找到商品购买数量
    const filterProduncts = requestBody.products.filter(item => item.id == id)
    if (filterProduncts.lengt === 0) {
      throw Error('未找到匹配项')
    }
    // 返回数据
    return {
      product: p,
      orderSales: filterProduncts[0].num
    }
  })
  // console.log(productListWidthSales);

  // 创建订单
  // await Order.create({
  //   username: 'zhangsan',
  //   shopId: requestBody.shopId,
  //   shopName: requestBody.shopName,
  //   isCanceled: requestBody.isCanceled,
  //   address,
  //   products: productListWidthSales
  // })

})()
