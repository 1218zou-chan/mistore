import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store/index'
import env from './env'
import VueCookie from 'vue-cookie';
Vue.use(VueCookie);
Vue.use(VueAxios,axios);
Vue.config.productionTip = false;
// 跨域的三种方式
// 1、cors:前端无需改变，后端改变即可；
// 2、jsonp插件，npm官网查找即可，使用方法jsonp(url,option,function(err,data){});前后端一同改变
// 3、代理跨域，前端改变，后端无需改变，打包时改变上线代理。
axios.defaults.baseURL = env.baseURL;
axios.defaults.baseURL = '/api';
// 数据的使用第一中方法，在本地存放，最终再改变baseURL地址即可；
// axios.defaults.baseURL = './mock/user';
// axios.get('/login.json').then(data=>{
//   console.log(data);
// })
// 后端数据使用第二中方法使用easymock方法；
// 同理，只要更换baseURL即可；
// 第三种方法
// mockjs
// let mock = true;
// if(mock){
//   require('./mock/api')
// }
// axios.get('/user/login').then(data=>{
//   console.log(data);
// })
axios.defaults.timeout = 6000;
// 前后端需商量接口信息，一般state为0成功返回信息，为10不成功，不返回数据信息;
axios.interceptors.response.use(function(response){
  let res = response.data;
  let path = window.location.hash;
  if(res.status == 0){
    return res.data;
  }else if(res.status == 10){
    if(path != '#/index'){
      window.location.href = '/#/login'
    }
    return Promise.reject(res.msg);
  }else{
    return Promise.reject(res.msg);
  }
},(error)=>{
  return Promise.reject(error);
})

// 后端尚未完成，为了能不阻碍前端的进程，通过三种方式模拟数据传送成功；

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
