<template>
  <v-card v-if="todo !== null">
      <v-card-title> Task: {{ todo.title }} </v-card-title>

      <v-card-text>
        <p>{{ todo.body }}</p>
        <p>{{ todo.done ? "done" : "not yet" }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn
          @click="editTodo($event)"
          class="ma-2"
          outlined
          fab
          color="indigo"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

    

</template>

<script>
export default {
  props: ["todo"],
  components: {},

  data() {
    return {
      edit: false,
      edittodo: null,
    };
  },
  methods: {
    editTodo(todo) {
      this.edittodo = todo;
      this.edit = true;
      this.$emit("editTodo");
    },
  },
};
</script>
