const todos = [
    {
      id: 1,
      todo: "ir a pasear a los perros",
      completado: false
    },
    {
      id: 2,
      todo: "ir a pagar la luz",
      completado: false
    }
  ];
  
  
const RenderTask = ()=> {
    // Repintado
    const pending = todos.filter((x) => x.completado == false).map((element) => {
        return `<li id=${element.id}><input id="markDone" type="checkbox" ${element.completado ? "checked":""}><label>${element.todo}</label><input type="text" value="${element.todo}"><button class="delete">Delete</button></li>`;
    }).join('');
    const ready = todos.filter((x) => x.completado == true).map((element) => {
        return `<li id=${element.id}><input id="markDone" type="checkbox ${element.completado ? "checked":""}><label>${element.todo}</label><input type="text" value="${element.todo}"><button class="delete">Delete</button></li>`;
    }).join('');
    console.log(pending);
    console.log(ready);
    const incompleteTask = document.querySelector("#incomplete-tasks");
    const completeTask = document.querySelector("#completed-tasks");
    incompleteTask.innerHTML = pending;
    completeTask.innerHTML = ready;
};

const BindDeleteButtons = (delButtons) => {
    for (let x=0; x < delButtons.length; x++) {
        delButtons[x].addEventListener("click", (event) => {
            const parentElement = delButtons[x].parentElement
            const toDel = todos.find((el) => el.id == parentElement.id)
            const delIndex = todos.indexOf(toDel, 0)
            todos.splice(delIndex, 1)
            parentElement.remove()
        }, false);
    }
    
}

const createHTML = (element) => {
    return `<input id="markDone" type="checkbox" ${element.completado ? "checked":""}><label>${element.todo}</label><input type="text" value="${element.todo}"><button class="delete">Delete</button>`;
}

const BindAddButton = () => {
    const addButton = document.querySelector("#addButton");
    addButton.addEventListener("click", (event) => {
        const todoText = document.querySelector("#new-task").value
        if (!todoText) {
            alert("You need write your task");
            return false
        };
        const newElement = {
            id: todos.length > 0 ? todos[todos.length - 1].id + 1: 1,
            todo: todoText,
            completado: false,
        };
        todos.push(newElement);
        const incompleteTask = document.querySelector("#incomplete-tasks");
        const newLi = document.createElement("li");
        newLi.id = newElement.id;
        newLi.innerHTML = createHTML(newElement);
        incompleteTask.appendChild(newLi);
        const BtnDone = incompleteTask.querySelectorAll(`li[id='${newElement.id}'] > input[id='markDone']`);
        BindMarkDoneButtons(BtnDone);
        const BtnDelt = incompleteTask.querySelectorAll(`li[id='${newElement.id}'] > button.delete`);
        BindDeleteButtons(BtnDelt);
    }, false)
     
}

const MarkDone = (markButton) => {
    const parentElement = markButton.parentElement
    const toUpd = todos.find((el) => el.id == parentElement.id)
    toUpd.completado = markButton.checked ? true:false;
    selectorId = markButton.checked ? "#completed-tasks":"#incomplete-tasks";
    console.log(selectorId);
    const currentTask = document.querySelector(selectorId);
    console.log(currentTask);
    const newLi = document.createElement("li");
    newLi.id = toUpd.id;
    newLi.innerHTML = createHTML(toUpd);
    parentElement.remove();
    currentTask.appendChild(newLi);
    const BtnDone = currentTask.querySelectorAll(`li[id='${toUpd.id}'] > input[id='markDone']`);
    console.log(BtnDone);
    BindMarkDoneButtons(BtnDone);
    const BtnDelt = currentTask.querySelectorAll(`li[id='${toUpd.id}'] > button.delete`);
    BindDeleteButtons(BtnDelt);
}

const BindMarkDoneButtons = (markDoneButtons) => {
    console.log("Botón Marca Done:", markDoneButtons);
    for (let x=0; x < markDoneButtons.length; x++) {
        markDoneButtons[x].addEventListener("click", (event) => {
                MarkDone(markDoneButtons[x]);
        });
    }
}

let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(stateCheck);
      RenderTask();
      BindDeleteButtons(document.querySelectorAll(".delete"));
      BindAddButton();
      BindMarkDoneButtons(document.querySelectorAll("#markDone")); 
    }
  }, 100);