const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const filter = document.getElementById("filter")

function addTask(){
    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span>${taskText}</span>
        <button class="delete-btn">X</button>
    `;

    taskList.appendChild(li);
    input.value = "";

};

function Tasks(e){
    
    // DELETE
    if (e.target.classList.contains("delete-btn")) {
        e.target.closest("li").remove();
    }

    // CHECKBOX
    if (e.target.classList.contains("checkbox")) {
        const li = e.target.closest("li");

        if (e.target.checked) {
            li.style.textDecoration = "line-through";
        } else {
            li.style.textDecoration = "none";
        }
    }
};



function filters(e){
    if (!e.target.id) return;

    const tasks = document.querySelectorAll("#taskList li");

    if (e.target.id === "all") {
        tasks.forEach(li => li.style.display = "flex");
    }

    else if (e.target.id === "completed") {
        tasks.forEach(li => {
            const checkbox = li.querySelector(".checkbox");
            li.style.display = checkbox.checked ? "flex" : "none";
        });
    }

    else if (e.target.id === "pending") {
        tasks.forEach(li => {
            const checkbox = li.querySelector(".checkbox");
            li.style.display = !checkbox.checked ? "flex" : "none";
        });
    }

};


addBtn.addEventListener('click', addTask);

taskList.addEventListener("click", Tasks);

filter.addEventListener('click', filters);

input.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        addTask()
    } 
});