let todos = [
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

const contentIncomleted = document.querySelector("#incomplete-tasks");
const contentCompleted = document.querySelector("#completed-tasks");
const btnAdd = document.querySelector(".add");
const todo = document.querySelector("#new-task");

const initCompletedItem = () => {
  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  checkboxes.forEach(item => {
    item.addEventListener('change', event => {
      event.preventDefault();
      const id = Number(item.getAttribute("data-todo-id"));
      todos = todos.map(todo => todo.id === id ? ({...todo, completado: !todo.completado}) : todo);
      printerTodos();
      event.stopPropagation();
    })
  });
};

const initBtnsDeletes = () => {
  const btnsDelete = document.querySelectorAll(".delete");
  btnsDelete.forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      const id = Number(item.getAttribute("data-todo-id"));
      todos = todos.filter(todo => todo.id !== id);
      printerTodos();
      event.stopPropagation();
    })
  });
}

const initInputEdits = () => {
  const btnsDelete = document.querySelectorAll(".edit");
  btnsDelete.forEach(item => {
    item.addEventListener('change', event => {
      event.preventDefault();
      const id = Number(item.getAttribute("data-todo-id"));
      todos = todos.map(todo => todo.id === id ? ({...todo, todo: item.value}) : todo);
      printerTodos();
      event.stopPropagation();
    })
  });
}

const printerTodos = () => {
  contentIncomleted.innerHTML = '';
  contentCompleted.innerHTML = '';
  contentIncomleted.innerHTML = todos.filter(todo => !todo.completado).map(todo => `
    <li class="editMode" data-todo-id="${todo.id}"><input data-todo-id="${todo.id}" type="checkbox"><label>${todo.todo}</label><input class="edit" data-todo-id="${todo.id}" type="text" value="${todo.todo}"><button data-todo-id="${todo.id}" class="delete">Delete</button></li>
  `).join('\n');
  contentCompleted.innerHTML = todos.filter(todo => todo.completado === true).map(todo => `
    <li data-todo-id="${todo.id}"><input data-todo-id="${todo.id}" type="checkbox" checked><label>${todo.todo}</label><input data-todo-id="${todo.id}" type="text"><button data-todo-id="${todo.id}" class="delete">Delete</button></li>
  `).join('\n');
  initCompletedItem();
  initBtnsDeletes();
  initInputEdits();
}

const addTodo = () => {
  if (todo.value.length > 1) {
    todos.push({
      id: todos.length + 1,
      todo: todo.value,
      completado: false
    });
    printerTodos();
  } else {
    alert('Uppss, sorry but you should enter a new item!')
  }
};

btnAdd.addEventListener('click', addTodo);

printerTodos();