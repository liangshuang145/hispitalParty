/**
 * Storage 存贮
 *
 * @author jillyandkai@qq.com
 * @date 2019-03-24
 */
const mainStorage = window.localStorage

/**
 * 获取数据
 *
 * @param key
 * @returns {any}
 */
const getStorage = (key) => {
  try {
    return JSON.parse(mainStorage.getItem(key))
  } catch (e) {
    console.log('error => ', `get ${key} storage error`)
    return ''
  }
}

/**
 * 设置数据
 *
 * @param key
 * @param data
 */
const setStorage = (key, data) => {
  try {
    mainStorage.setItem(key, JSON.stringify(data))
  } catch (e) {
    console.log('error => ', `set ${key} storage error`)
  }
}

/**
 * 删除数据
 *
 * @param key
 */
const delStorage = (key) => {
  try {
    mainStorage.removeItem(key)
  } catch (e) {
    console.log('error => ', `del ${key} storage error`)
  }
}

/**
 * 清除全部
 */
const clearStorage = () => {
  try {
    mainStorage.clear()
  } catch (e) {
    console.log('error => ', `clear all storage error`)
  }
}

export default {
  getStorage,
  setStorage,
  delStorage,
  clearStorage
}
