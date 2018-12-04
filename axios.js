import axios from 'axios'
import createAction from './src/store/createAction'
import {
  SHOW_LOADING_TOAST,
  HIDE_LOADING_TOAST
} from './src/actions/alert'

export default $axios = ({ dispatch, url, method, data, headers, success, fail, doShowToast }) => {
  doShowToast && dispatch(createAction(SHOW_LOADING_TOAST))
  let config = {
    method,
    url,
    data,
    headers
  }
  if(method==='get') {
    config = {
      method,
      url,
      params: data,
      headers
    }
  }
  axios(config)
    .then(res => {
      dispatch(createAction(HIDE_LOADING_TOAST))
      success && success(res.data || res)
    })
    .catch(err => {
      dispatch(createAction(HIDE_LOADING_TOAST))
      if (err.response.status === 401) {
        // dispatch(SHOW_POP_BOX, 401)
      } else {
        // 失败后的回调函数
        // dispatch(SHOW_POP_BOX, 500)
      }
      fail && fail(err)
    })
}