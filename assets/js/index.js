const input = document.getElementById('root-input')
const ul = document.getElementById('root-ul')
const currentList = []

class Todo {
    constructor(currentList){
        this.currentList = currentList
        this.addTodoListeners()
    }

    // Add DOM Event Listeners
    addTodoListeners(){
        input.addEventListener('change', (event) => {
            this.pushTodoValue(event.target.value)       
        })
    }

    // Push value from input field to array
    pushTodoValue(value){
        currentList.push(value)
        this.renderTodoList(currentList)
        this.clearTodoField()
    }

    // Clear Todo field
    clearTodoField(){
        input.value = ''
    }

    // Delete single Todo item
    deleteTodoItem(){

    }

    // Render Todo list
    renderTodoList(currentList){
        let li = document.createElement('li')
        currentList.forEach((item, index) => {
            // Don't start IDs with zero
            index = index + 1
            // Build LI
            li.setAttribute('class', 'todo-item todo-item-' + index)
            li.setAttribute('data-item-id', index)
            li.innerText = item
            ul.appendChild(li)
        })
    }

}

// Load everything
window.addEventListener('load', () => {
    const TodoList = new Todo(currentList)
})