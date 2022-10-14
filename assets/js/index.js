const input = document.getElementById('root-input')
const ul = document.getElementById('root-ul')
const currentList = []

class Todo {
    constructor(currentList){
        // ist kein setter oder getter > also ohne _ ???
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

    // Render Todo list
    renderTodoList(currentList){
        let li = document.createElement('li')
        currentList.forEach(item => {
            li.innerText = item
            ul.appendChild(li)
        })
    }

    // Clear Todo field
    clearTodoField(){
        input.value = ''
    }
}

// Load everything
window.addEventListener('load', () => {
    const TodoList = new Todo(currentList)
})