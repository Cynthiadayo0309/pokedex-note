<template>
    <div id="app">
        <h2>ToDoリスト</h2>
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
    </div>
</template>

<script>

export default {
    data: () => ({
        newItem: '',
        todos: []
    }),
    methods: {
        addItem: function() {
            // alert();
            if(this.newItem == '') return

            const todo = {
                item: this.newItem,
                isDone: false
            }

            this.todos.push(todo)
            this.newItem = ''
        },
        deleteItem: function(index) {
            this.todos.splice(index, 1)
        }
    }
}
</script>

<style lang="scss" scoped>
    #app ul {
        list-style: none;
        li > span.done {
            text-decoration: line-through;
        }
    }
</style>