import { createStore } from 'vuex'

export default createStore({
  state: {
    name: "FlexiNote",
    date: new Date(),
    currentText: "",
    allNotes: new Map(),
    notesByDay: new Map(),
    searchMap: new Map()
  },
  getters: {
  },
  mutations: {
    UPDATE_TIME(state) {
      state.date = new Date();
    },
    ADD_SEARCH_ITEM(state, pairing) {
      state.searchMap.set(pairing[0], pairing[1]);
    },
    NOTES_BY_DAY(state, pairing) {
      if (state.notesByDay.has(pairing[0])) {
        state.notesByDay.get(pairing[0]).push(pairing[1]);
      } else {
        state.notesByDay.set(pairing[0], [pairing[1]]);
      }
    },
    //CALL WITH PERSISTED DATA ONCE PAGE MOUNTS
    UPDATE_NOTES(state, pairing) {
      state.allNotes.set(pairing[0], pairing[1]);
    }
  },
  actions: {
  },
  modules: {
  }
})
