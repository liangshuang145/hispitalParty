/**
 * 项目配置
 */

// 接口地址
const api = {
  // 聊天机器人
  // robot: 'http://robottest.uneedzf.com/api/talk@Robot'
};

const env = {
  local: {
    name: 'local',
    // base: 'http://192.168.1.3:8080/ayundao/'
    base: 'http://192.168.1.16:8030/'
    // base: 'http://192.168.1.17/'
    // base:'http://localhost/iyundao/'
    // base: 'http://localhost:8080/iyundao/'
  },
  dev: {
    name: 'dev',
    base: 'http://www.baidu.com'
  },
  sandbox: {
    name: 'sandbox',
    base: 'http://www.baidu.com'
  },
  product: {
    name: 'product',
    base: 'http://www.baidu.com'
  }
};

// 环境判断
(function name (params) {
  let href = window.location.href;
  if (href.indexOf('local') > -1) { // 本地
    api.name = env.local.name;
    api.base = env.local.base
  } else if (href.indexOf('dev') > -1) { // 开发
    api.name = env.dev.name;
    api.base = env.dev.base
  } else if (href.indexOf('sandbox') > -1) { // 测试
    api.name = env.sandbox.name;
    api.base = env.sandbox.base
  } else if (href.indexOf('product') > -1) { // 正式
    api.name = env.product.name;
    api.base = env.product.base
  }
})()

export default {
  api
}
