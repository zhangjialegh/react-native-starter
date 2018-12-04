
import createReducer from '../store/createReducer'
import {
  SHOW_LOADING_TOAST,
  HIDE_LOADING_TOAST
} from '../actions/alert'

const initialState = {
    loading: false
}

export default createReducer(state=initialState, {
  [SHOW_LOADING_TOAST]: (state) => {
    return {
      ...state,
      loading: true
    }
  },
  [HIDE_LOADING_TOAST]: (state) => {
    return {
      ...state,
      loading: false
    }
  }
})
