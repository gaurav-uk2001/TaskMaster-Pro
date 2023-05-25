const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");


const tasks = [];

form.addEventListener("submit",formClick);

function formClick(e){
    e.preventDefault();

    clearTasks();
    tasks.push({
        title:title.value,
        description:description.value,
    })
    showAllTasks();
}


function clearTasks(){
    tasks.forEach(()=>{
        const div = document.querySelector(".task");
        div.remove();
    })
}

function showAllTasks(){
    tasks.forEach(createTaskFunc);   
}

function createTaskFunc(value,index){
    // console.log(tasks);
    
    const div = document.createElement("div");
    div.setAttribute("class", "task");

    const innerDiv = document.createElement("div");
    div.append(innerDiv);

    const p = document.createElement("p");
    p.innerText = value.title;
    innerDiv.append(p);

    const span = document.createElement("span");
    span.innerText = value.description;
    innerDiv.append(span);

    const btn = document.createElement("button");
    btn.setAttribute("class", "deleteBtn");

    btn.innerText = "-";

    div.append(btn);
    container.append(div);

    btn.addEventListener("click",()=>{
        clearTasks();   
        tasks.splice(index,1);
        showAllTasks();
        console.log(tasks);
    })
}