const todo = document.querySelector("#todo");
let ul = document.querySelector("ul")
const add = document.querySelector('#add')


const addTodo = ()=>{
    
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(todo.value));
    ul.appendChild(li);
    
    let btn = document.createElement('button');
    btn.appendChild(document.createTextNode('remove'));
    li.appendChild(btn);
    btn.onclick = function removechild() {ul.removeChild(li);};

    let done =document.createElement('button');
    done.appendChild(document.createTextNode('done'));
    li.appendChild(done);
    done.onclick = function donef(){li.classList.toggle('done')}

    todo.value="";
    
    

}

const todolist =() => {
    if(todo.value.length <= 0) {
        alert("Please Enter Todo's");}
    else {addTodo()};
}

add.addEventListener("click", todolist);

