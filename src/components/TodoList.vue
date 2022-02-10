<template>
  <div>
    <h2>TodoList App</h2>
    <p>
      Completed Tasks:
      {{
        todos.filter((todo) => {
          return todo.done === true;
        }).length
      }}
    </p>

    <p>
      Pending Tasks:
      {{
        todos.filter((todo) => {
          return todo.done === false;
        }).length
      }}
    </p>

    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <div class="d-flex flex-column-reverse">
      <v-card
        class="mt-4"
        elevation="3"
        v-for="(todo, index) in todos"
        :key="index"
        track-by="$index"
      >
        <v-card-title>
          {{ todo.title }}
        </v-card-title>
        <v-card-text>
          {{ todo.body }}
        </v-card-text>
        <v-checkbox
          v-model="todo.done"
          :label="todo.done ? 'done' : 'not yet'"
        ></v-checkbox>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["todos"]),
  },
};
</script>
