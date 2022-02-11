<template>
  <div>
    <v-container>
      <v-row class="justify-center">
        <h2>TodoList App</h2>
      </v-row>
      <v-row>
        <v-col cols="4">
          <list :edit="false" @setTodo="showTodo" />
        </v-col>

        <v-col cols="8">
          <v-card d-flex>
            <div>
              <!-- create New Todo here -->
              <create v-if="createFlag === true" @createFlag="closeCreate" />
              <!-- show Todo here -->
              <show
                :todo="todo"
                v-if="edit === false && show === true"
                @editTodo="willeditTodo"
              />
              <!-- edit Todo here -->
              <edit :todo="todo" v-if="edit === true" @editFlag="cancel" />

              <v-btn
                absolute
                right
                fab
                dark
                class="mt-2"
                color="indigo"
                @click="createTodo"
              >
                <v-icon dark> mdi-plus </v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import list from "../components/list.vue";
import { mapActions, mapGetters } from "vuex";

import show from "../components/show.vue";
import edit from "../components/edit.vue";
import create from "../components/create.vue";

export default {
  components: {
    list,
    show,
    edit,
    create,
  },

  data() {
    return {
      todo: null,
      edit: false,
      createFlag: false,
      show: false,
    };
  },
  computed: {
    ...mapGetters(["isTodosEmpty"]),
  },
  methods: {
    ...mapActions(["loadTodos"]),
    showTodo(todo) {
      this.show = true;
      this.createFlag = false;
      this.edit = false;
      this.todo = todo;
    },
    createTodo() {
      this.createFlag = true;
      this.edit = false;
      this.show = false;
    },
    willeditTodo() {
      this.edit = true; //edit comp #####
      this.show = false;
      this.createFlag = false;
    },
    cancel() {
      this.edit = false;
      this.show = true;
      this.createFlag = false;
    },
    closeCreate() {
      this.createFlag = false;
      this.show = false;
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
