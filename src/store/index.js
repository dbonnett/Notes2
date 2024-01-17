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
    ADD_SEARCH_ITEM(state, key, value) {
      state.searchMap.set(key, value);
    },
    NOTES_BY_DAY(state, key, value) {
      if (state.notesByDay.has(key)) {
        state.notesByDay.get(key).push(value);
      } else {
        state.notesByDay.set(key, [value]);
      }
    },
    //CALL WITH PERSISTED DATA ONCE PAGE MOUNTS
    UPDATE_NOTES(state, key, value) {
      state.allNotes.set(key, value);
    }
  },
  actions: {
  },
  modules: {
  }
})
