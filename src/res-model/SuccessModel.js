/**
 * @description 成功返回的格式
 * @author 李伟杰
 */

class SuccessModel{
  constructor(data) {
    this.errno = 0
    // 判断是否传入数据
    if (data !== 0) {
      this.data = data
    }
  }
}

module.exports = SuccessModel