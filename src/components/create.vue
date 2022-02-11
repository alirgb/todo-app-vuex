<template>
  <v-card>
    <v-card-title> Add New Task </v-card-title>

    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="submit">
        <!-- Task title -->
        <validation-provider
          v-slot="{ errors }"
          name="todoTitle"
          rules="required|max:20"
        >
          <v-text-field
            v-model="todoTitle"
            :counter="20"
            :error-messages="errors"
            label="Title"
            required
            class="pa-4"
          ></v-text-field>
        </validation-provider>
        <!-- Task body -->
        <validation-provider
          v-slot="{ errors }"
          name="todoBody"
          rules="required|max:100"
        >
          <v-text-field
            v-model="todoBody"
            :counter="100"
            :error-messages="errors"
            label="Body"
            required
            class="pa-4"
          ></v-text-field>
        </validation-provider>
        <v-card-actions>
          <v-btn @click="submitNewTodo" :disabled="invalid"> Save </v-btn>
          <v-btn @click="clear"> Clear </v-btn>
          <v-btn color="error" @click="cancel"> Cancel </v-btn>
        </v-card-actions>
      </form>
    </validation-observer>
  </v-card>
</template>

<script>
import { required, max } from "vee-validate/dist/rules";
import { mapMutations } from "vuex";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
import store from "../store/store";
setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    todoTitle: "",
    todoBody: "",
  }),

  methods: {
    ...mapMutations(["setNewTodo"]),
    submitNewTodo() {
      //send new todo to server
      let response = {
        data: {
          ok: true,
        },
      };
      setTimeout(() => {
        if (response.data.ok) {
          this.setNewTodo({
            title: this.todoTitle,
            body: this.todoBody,
            done: false,
            id: store.state.todos.slice(-1)[0].id + 1,
          });
        }
      }, 0);
    },
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.todoTitle = "";
      this.todoBody = "";

      this.$refs.observer.reset();
    },
    cancel() {
      this.$emit("createFlag");
    },
  },
};
</script>
