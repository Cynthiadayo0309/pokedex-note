<template>
    <div id="app">
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
    #app {
        width: 25%;
        margin: 20px auto 0 auto;
        h2 {
            font-size: 2.5rem;
        }
        form {
            margin-left: 30px;
            input {
                border: 1px solid gray;
            }
        }
        button {
            width: 50px;
            margin-left: 5px;
            background-color: rgb(206, 205, 205);
        }
        ul {
            list-style: none;
            margin-top: 2rem;
            li {
                margin-bottom: 10px;
            }
            li input {
                margin-right: 1.5rem;
            }
            span {
                font-size: 1.5rem;

            }
            li > span.done {
                text-decoration: line-through;
            }
            button {
                float: right;
            }
        }
    }
</style>