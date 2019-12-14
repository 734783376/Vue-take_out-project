import {
  reqAddress,
  reqCategorys,
  reqShops

} from '@/api'

import { 
  RECEIVE_ADDRESS,
  ECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

export default{
  /* 
    获取当前地址信息对象的异步action
  */
  async getAddress ({commit,state}){
    const {longitude,latitude} = state
    //发异步ajax请求
    const result = await reqAddress(longitude,latitude)
    //请求成功后，提交mutation
    if(result.code === 0){
      const address = result.data
      commit(RECEIVE_ADDRESS,address)
    }
  },
  /* 
    获取商品分类数组的异步action
  */
  async getCategorys ({commit}){
    
    //发异步ajax请求
    const result = await reqCategorys()
    //请求成功后，提交mutation
    if(result.code === 0){
      const categorys = result.data
      commit(ECEIVE_CATEGORYS,categorys)
    }
  },
/* 
    获取商家数组的异步action
  */
  async getShops ({commit,state}){
    const {longitude,latitude} = state
    //发异步ajax请求
    const result = await reqShops({longitude,latituade})
    //请求成功后，提交mutation
    if(result.code === 0){
      const shops = result.data
      commit(RECEIVE_SHOPS,shops)
    }
  }
}