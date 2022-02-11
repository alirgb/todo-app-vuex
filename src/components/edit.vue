<template>

    <v-card v-if="newTodo !== null">
      <v-card-title>
        <v-text-field
          v-model="newTodo.title"
          :counter="20"
          label="Title"
        ></v-text-field>
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="newTodo.body"
          :counter="100"
          label="Body"
        ></v-text-field>
        <v-checkbox v-model="newTodo.done" :ripple="false"></v-checkbox>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="update()" :disabled="disabled">
          Update
        </v-btn>
        <v-btn color="error" @click="cancel"> Cancel </v-btn>
      </v-card-actions>
    </v-card>

</template>

<script>
export default {
  props: ["todo"],
  components: {},

  data() {
    return {
      newTodo: {},
      updatedTodo: {},
    };
  },
  computed: {
    disabled() {
      if (
        this.todo.title === this.newTodo.title &&
        this.todo.body === this.newTodo.body &&
        this.todo.done === this.newTodo.done
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    cancel() {
      this.editFlag = false;
      this.$emit("editFlag");
    },
    update() {
      if (
        this.todo.title !== this.newTodo.title ||
        this.todo.body !== this.newTodo.body ||
        this.todo.done !== this.newTodo.done
      ) {
        this.todo.title = this.newTodo.title;
        this.todo.body = this.newTodo.body;
        this.todo.done = this.newTodo.done;
        this.cancel();
      }
    },
  },
  created() {
    this.newTodo = { ...this.todo };
  },
};
</script>
