<template>
  <v-col cols="6" v-if="newTodo !== null">
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="newTodo.title"
          :counter="10"
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
        <v-btn color="primary" @click="update(newTodo.id)"> Update </v-btn>
        <v-btn color="error" @click="cancel"> Cancel </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapGetters } from "vuex";

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
    ...mapGetters(["thisTodo"]),
  },
  methods: {
    cancel() {
      this.editFlag = false;
      this.$emit("editFlag");
    },
    update(todoId) {
      let todo = this.thisTodo(todoId);
      if (todo === this.newTodo) {
        console.log("no change");
      } else {
        console.log("there is change");
      }
    },
  },
  created() {
    this.newTodo = { ...this.todo };
  },
};
</script>
