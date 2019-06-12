/**
 * Created by bjy on 2019/5/15.
 */
const STORAGE_KEY = 'todos-vuejs'
const Storage = window.localStorage // 便于支持 session

export default {
  fetch() {
    return window.JSON.parse(Storage.getItem(STORAGE_KEY) || '[]')
  },
  save(items) {
    Storage.setItem(STORAGE_KEY, window.JSON.stringify(items))
  },
  saveByName(name, items) {
    Storage.setItem(name, window.JSON.stringify(items))
  },
  getByName(name) {
    return window.JSON.parse(Storage.getItem(name) || '[]')
  },
  delByName(name) {
    return Storage.removeItem(name)
  },
  clearAll() {
    return Storage.clear()
  }
}
