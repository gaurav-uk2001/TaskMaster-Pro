const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

// if tasksArray is filled then use localstorage array else use empty array which is case of begin
const tasks = localStorage.getItem("tasksArray")?JSON.parse(localStorage.getItem("tasksArray")):[];

showAllTasks();

form.addEventListener("submit",formClick);

function formClick(e){
    e.preventDefault();

    clearTasks();
    tasks.push({
        title:title.value,
        description:description.value,
    })

    // store(Parse method) tasks array into local storage 
    //while using JSON.Stringfy method use to convert array(object) 
    //into string for purpose to store in local store
    localStorage.setItem("tasksArray",JSON.stringify(tasks));
    showAllTasks();
}



function clearTasks(){
    // run n times to clear n task clear one by one
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
        // again using setItem to update while deleting tasks from real array
        localStorage.setItem("tasksArray",JSON.stringify(tasks));
        showAllTasks();

    })
}