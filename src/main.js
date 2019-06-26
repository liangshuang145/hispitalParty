// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// axios请求
import axios from 'axios'
// 百度地图
import BaiduMap from 'vue-baidu-map'
// echarts 统计使用组件引入
import echarts from 'echarts'
import global_ from  './GlobalData.js'

// 其他Js文件引入
// import global_ from './GlobalData.js'
// import store_ from './lib/localStorage.js'

// 全局变量
Vue.prototype.$http = axios;
// Vue.prototype.$echarts = echarts
Vue.prototype.$BASE_URL = global_.BASE_URL;
// Vue.prototype.store = store_
Vue.prototype.$echarts = echarts;

// 使用
Vue.use(ElementUI);
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'pkWX8eWsquKgIrHnDvYwVGVW9lg501yD'
});

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  // next()
  if(to.path === '/login')  {
    next()
  }  // 如果即将进入登录路由，则直接放行
  else {//进入的不是登录路由
    if(!sessionStorage.getItem('userInfo')){
      next({ path: '/login' })
    }else{
      next()
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
