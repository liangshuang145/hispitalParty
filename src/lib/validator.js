/**
 * 字段校验
 *
 * @author jillyandkai@qq.com
 * @date 2019-03-22
 */

/**
 * 检测用户名
 *
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 */
const checkUsername = (rule, value, callback) => {
  if (value === '') {
    return callback(new Error('请输入用户名或ID'))
  } else {
    callback()
  }
}

/**
 * 检测密码
 *
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 */
const checkPassword = (rule, value, callback) => {
  if (value === '') {
    return callback(new Error('请输入密码'))
  } else {
    callback()
  }
}

/**
 * 检测邮箱
 *
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 */
const checkEmail = (rule, value, callback) => {
  if (value === '') {
    return callback(new Error('请输入邮箱'))
  } else {
    callback()
  }
}

/**
 * 检测答案
 *
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 */
const checkAnswer = (rule, value, callback) => {
  if (value === '') {
    return callback(new Error('请输入答案'))
  } else {
    callback()
  }
}

// 用户组管理

/**
 * 名称检查
 *
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
const checkName = (rule, value, callback) => {
  if (value === '') {
    return callback(new Error('请输入名称'))
  } else {
    callback()
  }
};
/**
 * 机构检查
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 */
const checkSubjectId = (rule, value, callback) => {
  if (value === '') {
    return callback(new Error('请选择机构'))
  } else {
    callback()
  }
};

export default {
  checkUsername,
  checkPassword,
  checkEmail,
  checkAnswer,
  checkName,
  checkSubjectId
}
