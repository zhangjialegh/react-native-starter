export const SHOW_POP_BOX = 'SHOW_POP_BOX'
export const HIDE_POP_BOX = 'HIDE_POP_BOX'
export const SHOW_LOADING_TOAST = 'SHOW_LOADING_TOAST'
export const HIDE_LOADING_TOAST = 'HIDE_LOADING_TOAST'

// import createAction from '../store/createAction'
import $axios from '../../axios'
import {GET_FAQ_LIST_API} from '../constants/index'


export const showLoadingToast = (data) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      $axios({
        dispatch,
        url: GET_FAQ_LIST_API,
        method: 'get',
        data,
        doShowToast: true,
        success(res) {
          // 向前端通知操作成功
          // console.log(res,'res');
          resolve(res)
        },
        fail(err) {
          // 向前端通知操作失败
          reject(err)
        }
      })
    })
  }
}