import { createStore } from 'vuex'

export default createStore({
  state: {
    name: "FlexiNote",
    date: new Date(),
    editing: {
      currentText: "",
      isoStr: "",
      dateStr: "",
    },
    allNotes: new Map(),
    notesByDay: new Map(),
    searchMap: new Map()
  },
  getters: {
  },
  mutations: {
    ADD_SEARCH_ITEM(state, payload) {
      state.searchMap.set(payload.attribute, payload.note);
    },
    NOTES_BY_DAY(state, payload) {
      if (state.notesByDay.has(payload.dateStr)) {
        state.notesByDay.get(payload.dateStr).push(payload.isoStr);
      } else {
        state.notesByDay.set(payload.dateStr, [payload.isoStr]);
      }
    },
    //CALL WITH PERSISTED DATA ONCE PAGE MOUNTS
    UPDATE_NOTES(state, payload) {
      state.allNotes.set(payload.isoStr, payload.noteObj);
    },
    EDITING(state, payload) {
      state.editing.currentText = state.allNotes.get(payload.isoStr).text;
      state.editing.isoStr = payload.isoStr;
      state.editing.dateStr = payload.dateStr;
    },
    DONE_EDITING(state) {
      state.editing.currentText = "";
      state.editing.isoStr = "";
      state.editing.dateStr = "";
    }
  },
  actions: {
  },
  modules: {
  }
})
