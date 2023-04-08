/**
 * @description user controller
 * @author 李伟杰
 */
const { User } = require('../model/User')

/**
 * 注册
 * @param {String} username 
 * @param {String} password 
 */
async function register(username, password) {
  // 保存到数据库
  const newUser = await User.create({
    username,
    password
  })
  return newUser
}

/**
 * 登录
 * @param {*} username 用户名
 * @param {*} password 密码
 */
async function login(username, password) {
  // 查找
  const userInfo = await User.findOne({username, password})
  if (userInfo !== null) {
    return true
  } else {
    return false
  }
}

module.exports = {
  register,
  login
}