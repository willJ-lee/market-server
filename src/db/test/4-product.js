/**
 * @description 商品的数据操作
 * @author 李伟杰
 */

const { Product } = require('../../model/Product')

!(async () => {
  // await Product.create({
  //   shopId: '627ce0b76b41ea8cbcb2522a',
  //   name: '桃子',
  //   imgUrl: '/images/product/peach.jpg',
  //   sales: 10,
  //   price: 10.00,
  //   oldPrice: 11.00,
  //   tabs: ['all', 'seckill', 'fruit']
  // }),
  // await Product.create({
  //   shopId: '627ce0b76b41ea8cbcb2522a',
  //   name: '苹果',
  //   imgUrl: '/images/product/apple.jpeg',
  //   sales: 4,
  //   price: 11.00,
  //   oldPrice: 15.00,
  //   tabs: ['all', 'seckill', 'fruit']
  // }),
  // await Product.create({
  //   shopId: '627ce0b76b41ea8cbcb2522a',
  //   name: '葡萄',
  //   imgUrl: '/images/product/grape.jpg',
  //   sales: 7,
  //   price: 9.00,
  //   oldPrice: 11.00,
  //   tabs: ['all', 'seckill', 'fruit']
  // }),
  // await Product.create({
  //   shopId: '627ce0f77dcd55f8c0c68586',
  //   name: '西瓜',
  //   imgUrl: '/images/product/watermelon.jpg',
  //   sales: 10,
  //   price: 3.00,
  //   oldPrice: 5.00,
  //   tabs: ['all', 'seckill', 'fruit']
  // })

  // 查询某个商店的tab商品
  const productList = await Product.find({
    shopId: '627ce0b76b41ea8cbcb2522a',
    tabs: {
      $in: 'seckill'
    }
  })
  console.log(productList)
})()