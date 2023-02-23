const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos =[];

const TODOS_KEY="todos";

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event){
    const deleteToDoList = event.target.parentElement;
    deleteToDoList.remove();
    console.log(parseInt(deleteToDoList.id));
    toDos = toDos.filter((item) => item.id !== parseInt(deleteToDoList.id));
    saveToDos();
}

function paintToDo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDoObj.text;
    console.log(li);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    const newToDoObj ={
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newToDoObj);
    console.log(toDos);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !==null){
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

