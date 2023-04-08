/**
 * @description 登录验证
 * @author 李伟杰
 */
const { ErrorModel } = require('../res-model/index')

async function loginCheck (ctx, next) {
  const session = ctx.session
  if (session && session?.userInfo) {
    await next()
    return
  }
  ctx.body = new ErrorModel(10003, '登录验证失败')
  // ctx.body = {
  //   errno: -1,
  //   message: '登录验证失败'
  // }
}

module.exports = loginCheck