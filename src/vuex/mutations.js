
/*
  包含n个状态数据属性的对象
*/
import { 
  RECEIVE_ADDRESS,
  ECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

export default{
  [RECEIVE_ADDRESS](state,address){
    state.address = address
  },
  [ECEIVE_CATEGORYS](state,categorys){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state,shops){
    state.shops = shops
  },
}