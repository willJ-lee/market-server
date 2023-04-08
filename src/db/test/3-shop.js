/**
 * @description 商店模拟操作
 * @author 李伟杰
 */

const { Shop } = require('../../model/Shop')

!(async () => {
  // await Shop.create({
  //   name: '沃尔玛',
  //   imgUrl: '/images/shop/sam.jpeg',
  //   sales: 1000,
  //   expressLimit: 1,
  //   expressPrice: 34,
  //   slogan: '满300减去100'
  // })

  // await Shop.create({
  //   name: '山姆会员商店',
  //   imgUrl: '/images/shop/sam.jpeg',
  //   sales: 1988,
  //   expressLimit: 0,
  //   expressPrice: 33,
  //   slogan: '满3003减去100'
  // })

  // 查找
  const shopList = await Shop.find().sort({_id: -1})
  console.log(shopList)
})()