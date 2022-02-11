<template>
<div>
  <v-card>
    <v-card-title>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-card-text>
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
      </v-card-text>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="todos"
      :search="search"
      @click:row="showTodo($event)"
    >
      <template v-slot:[`item.done`]="{ item }">
        <v-simple-checkbox
          v-model="item.done"
          :ripple="false"
        ></v-simple-checkbox>
      </template>
    </v-data-table>
  </v-card>
</div>
    
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["todos"]),
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Title",
          align: "start",
          // filterable: false,
          value: "title",
        },
        // { text: "Task", value: "body" },
        { text: "Done", value: "done" },
      ],
    };
  },
  methods: {
    showTodo(todo) {
      this.$emit("setTodo", todo);
    },
  },
};
</script>
