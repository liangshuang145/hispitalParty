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
 * 校验账号
 * @param rule
 * @param value
 * @param callback
 */
const checkAccount = (rule, value, callback) => {
  if(!value){
    return callback(new Error('请输入账号'))
  }
  if(value.match(/^[\u4e00-\u9fa5]+$/)){ // 校验中文
    return callback(new Error('账号不能为中文'))
  }else{
    callback()
  }
};

/**
 * 校验SubjectId 机构id
 * @param rule
 * @param value
 * @param callback
 */
const checkSubjectId = (rule, value, callback) => {
  if(!value){
    return callback(new Error('请选择所属机构'))
  }else{
    callback()
  }
};

/**
 * 校验年度
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 */
const checkYear = (rule, value, callback) => {
  if(!value){
    return callback(new Error('请选择所属年度'))
  }else{
    callback()
  }
};

/**
 * 校验工作周期
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 */
const checkWorkCycle = (rule, value, callback) => {
  console.log('校验工作周期',value)
  if(!value){
    return callback(new Error('请选择工作周期'))
  }else{
    callback()
  }
};

/**
 * 校验行政编号
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 */
const checkNumber = (rule, value, callback) => {
  if(!value){
    return callback(new Error('请输入行政编号'))
  }else{
    callback()
  }
};

/**
 * 校验支部
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 */
const checkBranchName = (rule, value, callback) => {
  if(!value){
    return callback(new Error('请输入支部'))
  }else{
    callback()
  }
};

/**
 * 校验科室
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 */
const checkDepartment = (rule, value, callback) => {
  if(!value){
    return callback(new Error('请输入所在科室'))
  }else{
    callback()
  }
};

/**
 * 校验出生日期
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 */
const checkBirthday = (rule, value, callback) => {
  if(!value){
    return callback(new Error('请输入出生日期'))
  }else{
    callback()
  }
};

/**
 * 校验学历
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 */
const checkEducation = (rule, value, callback) => {
  if(!value){
    return callback(new Error('请输入学历'))
  }else{
    callback()
  }
};

/**
 * 校验籍贯
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 */
const checkPlace = (rule, value, callback) => {
  if(!value){
    return callback(new Error('请输入籍贯'))
  }else{
    callback()
  }
};

/**
 * 校验民族
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 */
const checkNation = (rule, value, callback) => {
  if(!value){
    return callback(new Error('请输入民族'))
  }else{
    callback()
  }
};

/**
 * 校验职务
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 */
const checkPost = (rule, value, callback) => {
  if(!value){
    return callback(new Error('请输入职务'))
  }else{
    callback()
  }
};



export default {
  checkUsername,
  checkPassword,
  checkEmail,
  checkAnswer,
  checkName,
  checkAccount,
  checkSubjectId,
  checkYear,
  checkWorkCycle,
  checkNumber,
  checkBranchName,
  checkDepartment,
  checkBirthday,
  checkEducation,
  checkPlace,
  checkNation,
  checkPost
}
