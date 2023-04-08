/**
 * @description 用户地址相关
 * @author 李伟杰
 */

const { Address } = require('../model/Address')

/**
 * 创建新地址
 * @param {*} username 用户名
 * @param {*} data 地址内容
 * @returns 
 */
async function createAddress(username, data) {
  const newAddress = await Address.create({
    username,
    ...data
  })
  return newAddress
}

/**
 * 获取所有地址
 * @param {String} username 用户名
 */
async function getAddressList(username){
  const list = await Address.find({ username }).sort({ updatedAt: -1 })
  return list
}

/**
 * 
 * @param {String} id 参数id值
 */
async function getAddress(id) {
  const address = await Address.findById(id)
  return address
}


/**
 * 更新地址
 * @param {String} id 
 * @param {String} username 
 * @param {Object} data 
 * @returns 
 */
async function updateAddress(id, username, data) {
  const newAddress = await Address.findOneAndUpdate({
    _id: id,
    username
  }, 
  { username, ...data }, 
  { new: true }
  )
  return newAddress
}
 
module.exports = { 
  createAddress,
  getAddressList,
  getAddress,
  updateAddress
 }