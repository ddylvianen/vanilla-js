/*   TODO(leterely lol):
        1. complete a search addlistiner(for each letter search emediatly)
        2. complete the adding of todos
        3. add a edit button
        4. save in local storage for now(eventualy in a sql database)

let todos = {}
window.onload({
    todos = localStorage.getItem("todos")
    todos.array.forEach(element => addtodo(element));
})
*/

function addtodo(e){
        let todobox = document.getElementById("addtodo").innerHTML
        todobox += `
        <div class="todo">
                <div class="todo-note"><p class="note">${e.todo}</p></div>
                <button class="button todo-edit-btn" >edit</button>
                <button class="button todo-delete-btn">delete</button>
        </div>
    `
}


function save_addtodo(e){
        console.log(toString(e.innerText))
}

function remove(div) {
        div.parentNode().removechild(div)
}
