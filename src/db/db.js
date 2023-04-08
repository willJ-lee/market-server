/**
 * @description mongoose 连接数据库
 * @author 李伟杰
 */

const mongoose = require('mongoose')

// 数据库配置
const url = 'mongodb://localhost:27017'
const dbName = 'jingdongdb'


// 连接数据库
mongoose.connect(`${url}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// 连接对象
const conn = mongoose.connection

conn.on('error', err => {
  console.error('error:', err)
})

module.exports = mongoose