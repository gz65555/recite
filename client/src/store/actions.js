import * as types from './mutation-types'

const actions = {
  setUserInfo: function (context, userInfo) {
    context.commit(types.SET_USERINFO, userInfo)
  }
}

export default actions;
