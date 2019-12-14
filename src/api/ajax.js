/*
  对axios进行2次封装一个能发ajax请求的函数
*/

import axios from 'axios'
import qs from 'qs' //query-string 解析urlencoded的包

const instance = axios.create({ 
  //baseURL:'http://localhost:4000'  会出现跨域问题，在vue.config.js中配置请求代理
  baseURL:'/api',//让代理服务器转发请求
  timeout:20000 //4、配置请求超时时间
})

//请求拦截器
instance.interceptors.request.use((config) =>   {
  console.log('req insterceptor')
  //3、对请求体参数进行urlencoded处理，而不使用默认的json格式（后台接口不支持）
  const data = config.data
  if(data instanceof Object){
    config.data = qs.stringify(data)
  }
  return config
})

//响应拦截器
instance.interceptors.response.use(
  response => {
    console.log('res insterceptor')
    // return response
    //2、异步请求成功的数据不是response，而是response.data
    return response.data
  },
  error => {
    // return Promise.reject(error)
    //1、同意处理请求异常
    alert('请求出错' + error.message)
    return new Promise(()=>{}) //返回pending的Promise =》 中断promise链
  }
)

export default instance
