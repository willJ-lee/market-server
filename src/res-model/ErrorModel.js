/**
 * @description 错误后返回的格式
 * @author 李伟杰
 */

class ErrorModel{
  constructor(errno = -1, message = 'error'){
    this.errno = errno
    this.message = message
  }
}

module.exports = ErrorModel