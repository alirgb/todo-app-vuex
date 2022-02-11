import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
    // site: {},
    // authenticated: false,
    // authUser: null,
  },
  mutations: {
    setTodos(state, value) {
      state.todos = value;
    },
    setNewTodo(state, value) {
      state.todos.push(value);
    },
  },
  actions: {
    loadTodos({ commit }) {
      //send request

      let response = {
        data: {
          todos: [
            {
              id: 1,
              title: "task 1",
              body: "new task hell no 1111",
              done: false,
            },
            {
              id: 2,
              title: "new task 2",
              body: "new task hell no 22222",
              done: true,
            },
            {
              id: 3,
              title: "new task 3",
              body: "new task hell no 3333",
              done: false,
            },
          ],
        },
      };
      setTimeout(() => {
        commit("setTodos", response.data.todos);
        console.log("inside callback");
      }, 0);
      console.log("outside callback");
    },
  },
  getters: {
    isTodosEmpty:state=>state.todos.length === 0,
    thisTodo:state=> (callback,id)=>callback(state,id)
    
    
  },
});

export default store;
