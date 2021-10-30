import { Module } from 'vuex'
import { UserActionType } from './actionType'

//在这里扩展user的属性字段
type userAtt = 'username' | 'userpass' | 'email'

export type IUser = Record<userAtt, any>
export interface IUserStore {
  userInfo: IUser
}
const UserStore: Module<IUserStore, Record<string, unknown>> = {
  state: {
    userInfo: {
      username: '',
      userpass: '',
      email: 11,
    },
  },
  mutations: {
    [UserActionType.ACTION_SET_USERNAME](state, value: string) {
      state.userInfo.username = value
    },
  },
  actions: {
    [UserActionType.ACTION_SET_USERNAME]({ commit }, value: string) {
      commit(UserActionType.ACTION_SET_USERNAME, value)
    },
  },
  getters: {},
}

export default UserStore
