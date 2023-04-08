# 文档

## 注册

### url

`/api/user/register`

### method

`post`

### request body

```js
{
  username: 'zhangsan',
  password: 'abc213'
}
```

### respones body

```js
{
  errno: 0,
  message: 'error !==0时的错误提示'
}
```

## 登录

### url

`/api/user/login`

### request body 

```js
{
  username: 'zhangsan',
  posswrod: 'abd123'
}
```

### respones body 

```js
{
  errno: 0,
  message: 'error !== 0 错误信息'
}
```

## 获取信息

### url

`/api/user/userInfo`

### request body

```js
{
  username
}
```

### respones body 

```js
{
  errno: 0,
  message: 'error !== 0 错误信息'
}
```

## 创建收货地址

### url

`/api/user/address`

### method

`post`

### request body

```js
{
  city: '北京',
  department: 'xx小区',
  houseNumber: '门牌号',
  name: '张三',
  phone: '13894019411'
}
```
### respones body

```js
{
  errno: 0,
  data: {
    _id: '收货地址ID',
    city: '北京',
    department: 'xx小区',
    houseNumber: '门牌号',
    name: '张三,
    phone: '138201032103',
    createdAt: Date,
    updatedAt: Date
  },
  message: 'errno !== 0 错误信息'
}
```

## 获取收货地址

### url

`/api/user/address`

### method

`get`

### request body

无

### respones body

```js
{
  errno: 0,
  data: [
    {
      _id: '收货地址ID',
      city: '北京',
      department: 'xx小区',
      houseNumber: '门牌号',
      name: '张三,
      phone: '138201032103'
    }
  ]
  message: 'errno !== 0 错误信息'
}
```

## 获取单个收货地址

### url

`/api/user/address/:id`  `:id`是携带的参数,根据参数得到具体哪一个收货地址

### method

`get`

### request body

无

### respones body

```js
{
  errno: 0,
  data: {
    _id: '收货地址ID',
    city: '北京',
    department: 'xx小区',
    houseNumber: '门牌号',
    name: '张三,
    phone: '138201032103'
  },
  message: 'errno !== 0 错误信息'
}
```

## 更新收货地址

### url

`/api/user/address/:id`

### method

`patch`

### request body

```js
{
  city: '北京',
  department: 'xx小区',
  houseNumber: '门牌号',
  name: '张三,
  phone: '138201032103'
}
```

### respones body

```js
{
  errno: 0,
  message: 'errno !== 0 错误信息'
}
```

## 附近店铺

### url

`/api/shop/hot-list`

### method

`get`

### request body

无

### respones body

```js
{
  errno: 0,
  data: [
    {
      _id: '店铺id',
      name: '沃尔玛',
      imgUrl: '图片url地址',
      sales: 10000, // 月售
      expressLimit: 0, // 起送价
      expressPrice: 5, // 配送费
      slogan: 'VIP满 80 元减 4 元运费券'
    }
  ]
  message: 'errno !== 0 错误信息'
}
```

## 获取店铺详情

### url

`/api/shop/:id`

### method

`get`

### request body

无

### respones body

```js
{
  errno: 0,
  data: {
    _id: '店铺id',
    name: '沃尔玛',
    imgUrl: '图片url地址',
    sales: 10000, // 月售
    expressLimit: 0, // 起送价
    expressPrice: 5, // 配送费
    slogan: 'VIP满 80 元减 4 元运费券'
  }
  message: 'errno !== 0 错误信息'
}
```

## 获取一个商店列表详情

### url

`/api/shop:id/products`

### query

`tab=全部商品`

举例 `/api/shop/10/products?tab=全部商品`

### method

`get`

### request body

无

### respones body

```js
{
  errno: 0,
  data: [
    {
      _id: '商品id',
      name: '番茄 250g/份',
      sales: 10,
      price: 30.5,
      oldPrice: 40.2
    }
  ]
  message: 'errno !== 0 错误信息'
}
```

## 创建订单

### url

`/api/order`

### method

`post`

### request body

```js
{
  addressId: '地址id',
  shopId: '商店id',
  shopName: '商店名称',
  isCanceled: false, // 订单是否取消
  products: [
    {
      id: '商品id',
      num: 4 // 商品数量
    }
  ]
}
```

### respones body

```js
{
  errno: 0,
  data: {
    _id: '订单id'
  }
  message: 'errno !== 0 错误信息'
}
```

