<template>
  <!-- <div id="app">
        <h2>やることリスト</h2>
        <form v-on:submit.prevent>
            <input type="text" v-model="newItem">
            <button v-on:click="addItem">追加</button>
        </form>
        <ul>
            <li v-for="(todo, index) in todos" v-bind:key="index">
                <input type="checkbox" v-model="todo.isDone">
                <span v-bind:class="{ done: todo.isDone }">{{ todo.item }}</span>
                <button v-on:click="deleteItem(index)">削除</button>
            </li>
        </ul>
    </div> -->
  <v-container style="max-width: 500px">
    <v-text-field
      v-model="newTask"
      label="What are you working on?"
      solo
      @keydown.enter="create"
    >
      <template v-slot:append>
        <v-fade-transition>
          <v-icon v-if="newTask" @click="create">
            add_circle
          </v-icon>
        </v-fade-transition>
      </template>
    </v-text-field>

    <h2 class="text-h4 success--text pl-4">
      Tasks:&nbsp;
      <v-fade-transition leave-absolute>
        <span :key="`tasks-${tasks.length}`">
          {{ tasks.length }}
        </span>
      </v-fade-transition>
    </h2>

    <v-divider class="mt-4"></v-divider>

    <v-row class="my-1" align="center">
      <strong class="mx-4 info--text text--darken-2">
        Remaining: {{ remainingTasks }}
      </strong>

      <v-divider vertical></v-divider>

      <strong class="mx-4 success--text text--darken-2">
        Completed: {{ completedTasks }}
      </strong>

      <v-spacer></v-spacer>

      <v-progress-circular :value="progress" class="mr-2"></v-progress-circular>
    </v-row>

    <v-divider class="mb-4"></v-divider>

    <v-card v-if="tasks.length > 0">
      <v-slide-y-transition class="py-0" group tag="v-list">
        <template v-for="(task, i) in tasks">
          <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

          <v-list-item :key="`${i}-${task.text}`">
            <v-list-item-action>
              <v-checkbox
                v-model="task.done"
                :color="(task.done && 'grey') || 'primary'"
              >
                <template v-slot:label>
                  <div
                    :class="(task.done && 'grey--text') || 'primary--text'"
                    class="ml-4"
                    v-text="task.text"
                  ></div>
                </template>
              </v-checkbox>
            </v-list-item-action>

            <v-spacer></v-spacer>

            <v-scroll-x-transition>
              <v-icon v-if="task.done" color="success">
                mdi-check
              </v-icon>
            </v-scroll-x-transition>
          </v-list-item>
        </template>
      </v-slide-y-transition>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tasks: [
      {
        done: false,
        text: "Foobar",
      },
      {
        done: false,
        text: "Fizzbuzz",
      },
    ],
    newTask: null,
  }),

  computed: {
    completedTasks() {
      return this.tasks.filter((task) => task.done).length;
    },
    progress() {
      return (this.completedTasks / this.tasks.length) * 100;
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks;
    },
  },

  methods: {
    create() {
      this.tasks.push({
        done: false,
        text: this.newTask,
      });

      this.newTask = null;
    },
  },
};
</script>

<style lang="scss" scoped>
// #app {
//   width: 25%;
//   margin: 20px auto 0 auto;
//   @media (max-width: 480px) {
//     width: 100%;
//     padding: 0 20px;
//   }
//   h2 {
//     font-size: 2.5rem;
//   }
//   form {
//     margin-left: 30px;
//     input {
//       border: 1px solid gray;
//     }
//   }
//   button {
//     width: 50px;
//     margin-left: 5px;
//     background-color: rgb(206, 205, 205);
//   }
//   ul {
//     list-style: none;
//     margin-top: 2rem;
//     li {
//       margin-bottom: 10px;
//     }
//     li input {
//       margin-right: 1.5rem;
//     }
//     span {
//       font-size: 1.5rem;
//     }
//     li > span.done {
//       text-decoration: line-through;
//     }
//     button {
//       float: right;
//     }
//   }
// }
</style>
