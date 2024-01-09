import { createStore } from 'vuex'

export default createStore({
  state: {
    name: "FlexiNote",
    date: new Date(),
    allNotes: new Map()
  },
  getters: {
  },
  mutations: {
    UPDATE_TIME(state) {
      state.date = new Date();
    },
    //CALL WITH PERSISTED DATA ONCE PAGE MOUNTS
    UPDATE_NOTES(state, map) {
      state.allNotes = map;
    }
  },
  actions: {
  },
  modules: {
  }
})
