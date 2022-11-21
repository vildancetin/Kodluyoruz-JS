


let todoForm = document.querySelector("#todoForm")
todoForm.addEventListener('submit',formSubmit);

let todoList=document.querySelector("#todoList")
let todo_i;

// create html 
const addHtml=(todo)=>{
    let todoItem=document.createElement('li')
    let todoButton=document.createElement("i")
    todoButton.setAttribute("type","button")
    todoItem.innerHTML=`${todo.text}`
    todoItem.append(todoButton)
    todoList.append(todoItem)
    todoItem.classList.add("list-group-item","p2")
    todoButton.classList.add("fa-sharp", "fa-solid", "fa-xmark","delete")

}
// when open the first screen
const startConf=()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(!todos){
        localStorage.setItem("todos",JSON.stringify([]))
    }
    else{
        todos.forEach(todo => {
            addHtml(todo)
            
        });
        todo_i=document.querySelectorAll(".delete")
            console.log(todo_i)
    }
}
startConf()
const isEmpty=(str) => {
    return !str.trim().length}   

function formSubmit(event){
    event.preventDefault();
    let todoInput=document.querySelector("#todoInput")
    if(!todoInput || isEmpty(todoInput.value)){
        
        let myToast=document.querySelector("#myToast")
        let toast=new bootstrap.Toast(myToast)
        toast.show();
        
    }
    else{
        addItem(todoInput.value)
        let successToast=document.querySelector("#successToast")
        let stoast=new bootstrap.Toast(successToast)
        stoast.show()
    }
    
    todoInput.value="";
}

function addItem(item){
    // todo is an object
    const todo={
        text: item,
        isCompleted:false,
    }
    
    const todos=JSON.parse(localStorage.getItem("todos"))
    todos.push(todo)
    
    localStorage.setItem('todos',JSON.stringify(todos))
    
    addHtml(todo);
    todo_i=document.querySelectorAll(".delete")
    todo_i.forEach(btn=>btn.addEventListener("click",deleteTodo));
    
    
    todoForm.reset()
}



const deleteTodo=(e)=>{
    const todo=e.target.parentElement;
    const text=todo.firstChild.textContent
    
    let todos=JSON.parse(localStorage.getItem("todos"))
    todos=todos.filter(td=>td.text!=text)
    localStorage.setItem("todos",JSON.stringify(todos))
    todo.remove()
}
todo_i.forEach(btn=>btn.addEventListener("click",deleteTodo));


const clicked=(e)=>{
    const todo=e.target;
    const text=todo.firstChild.textContent
    let todos=JSON.parse(localStorage.getItem("todos"))
     todos.forEach(td=>{
         if(td.text===text)
         td.isCompleted=!td.isCompleted
     });
    localStorage.setItem("todos",JSON.stringify(todos))
    todo.classList.toggle("checked")
}
todoList.addEventListener("click",clicked)