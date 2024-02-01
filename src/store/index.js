import { createStore } from 'vuex'

export default createStore({
  state: {
    name: "FlexiNote",
    date: new Date(),
    monthsOffset: 0,
    monthView: true,
    editing: {
      currentText: "",
      isoStr: "",
      dateStr: "",
    },
    currentCategories: {
      brainstorm: false,
      list: false,
      reminder: false,
      goal: false,
    },
    monthNumbers: [0],
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
    },
    DELETE_MAIN(state, key) {
      state.allNotes.delete(key);
    },
    DELETE_TODAYS(state, payload) {
      if (!state.notesByDay.has(payload.key) && state.notesByDay.get(payload.key)!== undefined) {
        return;
      }
      for (let i = 0; i < state.notesByDay.get(payload.key)[i].length; i++) {
        if (state.notesByDay.get(payload.key)[i] === payload.value) {
          state.notesByDay.get(payload.key).splice(i,1);
          return;
        }
      }
    },
    CHANGE_VIEW(state) {
      state.monthView = !state.monthView;
    }, 
    OFFSET_MONTHS(state, num) {
      state.monthsOffset = num;
    },
    SET_MONTH_NUMBERS(state, arr) {
      state.monthNumbers = arr;
    }
  },
  actions: {
  },
  modules: {
  }
})
