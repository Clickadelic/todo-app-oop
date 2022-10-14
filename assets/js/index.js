const currentList = []

class Todo {

    constructor(){
        const rootApp = document.getElementById('app')
        const rootUL = document.createElement('ul')
        rootApp.appendChild(rootUL)
    }

    renderDOM(){
        
    }
}
 
// Load everything
window.addEventListener('load', () => {
    const App = new Todo()
})