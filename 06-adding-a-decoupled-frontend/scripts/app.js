const TodosApp = {
    data() {
        return {
            newTodo: "Learning Vue.js"
        }
    }
}

Vue.createApp(TodosApp).mount("#todos-app")