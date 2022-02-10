<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="1">
          <v-btn
            class="mx-2"
            fab
            dark
            color="indigo"
            :to="{ name: 'CreateForm' }"
          >
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="3">
          <!-- <todo-list></todo-list> -->
          <list @setTodo="showTodo" />
        </v-col>
        <!-- show Todo here -->
        <show :todo="todo" v-if="edit === false" @editTodo="willeditTodo" />
        <!-- edit Todo here -->
        <edit :todo="todo" v-if="edit === true" @editFlag="cancel" />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import list from "../components/list.vue";
import { mapActions, mapGetters } from "vuex";

import show from "../components/show.vue";
import edit from "../components/edit.vue";

export default {
  components: {
    list,
    show,
    edit,
  },

  data() {
    return {
      todo: null,
      edit: false,
    };
  },
  computed: {
    ...mapGetters(["isTodosEmpty"]),
  },
  methods: {
    ...mapActions(["loadTodos"]),
    showTodo(todo) {
      this.todo = todo;
    },
    willeditTodo() {
      this.edit = true; //edit comp #####
    },
    cancel() {
      this.edit = false;
    },
  },
  created() {
    if (this.isTodosEmpty) {
      this.loadTodos();
    }
  },
};
</script>
