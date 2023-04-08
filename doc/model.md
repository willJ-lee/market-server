# 数据模型设计

列举各个模型的示例, 声明属性

## 用户

```js
{
  _id: 'xxx'
  username: '123321321312',
  password: 'abc2223'
}
```

## 地址

```js
{
  _id: 'xxx',
  usernma: '123321321312',
  city: '北京',
  department: 'xx小区',
  houseNumber: '门牌号',
  name: '张三',
  phone: '13894019411'
}
```

## 商店

```js
{
  _id: '店铺id',
  name: '沃尔玛',
  imgUrl: '图片url地址',
  sales: 10000, // 月售
  expressLimit: 0, // 起送价
  expressPrice: 5, // 配送费
  slogan: 'VIP满 80 元减 4 元运费券'
}
```

## 商品
```js
{
  _id: '商品id',
  shopId: '店铺id', // 对应的店铺id
  name: '番茄 250g/份',
  imgUrl: '图片地址'
  sales: 10,
  price: 30.5,
  oldPrice: 40.2
}
```

## 订单

```js
{
  username: 'zhangsan',
  _id: 'xxx',
  shopId: '商店id',
  shopName: '商店名称',
  isCanceled: false,
  address: {
    "username": "zhangsan",
    "city": "焦作",
    "department": "东尚村",
    "houseNumber": "门牌号213",
    "name": "张三a",
    "phone": "18539150244",
  },
  products: [
    {
      product: {
        "shopId": "627ce0b76b41ea8cbcb2522a",
        "name": "桃子",
        "imgUrl": "/images/product/peach.jpg",
        "sales": 10,
        "price": 10,
        "oldPrice": 11,
        "tabs": [
          "all",
          "seckill",
          "fruit"
        ],
      },
      orderSales: 4
    }
  ]
}
```
