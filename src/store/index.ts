import { createStore } from 'vuex'
import UserStore from './user'

const store = createStore({
  // 里面其他
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    UserStore,
  },
})

export default store
