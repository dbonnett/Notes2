import { createStore } from 'vuex'

export default createStore({
  state: {
    name: "FlexiNote",
    date: new Date()
  },
  getters: {
  },
  mutations: {
    UPDATE_TIME(state) {
      state.date = new Date();
    }
  },
  actions: {
  },
  modules: {
  }
})
