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
    },
    {
        id: 3,
        todo: "Pay Bills",
        completado: false
    },
    {
        id: 4,
        todo: "Go Shopping",
        completado: false
    },
    {
        id: 5,
        todo: "See the Doctor",
        completado: true
    }
  ];

  let cont_id = todos.length;
  
  const modificado = (id) => todos.find((to) => to.id == id);

  const agregar = document.querySelector("#add");
  agregar.addEventListener('click',(ev)=>{
    const nuevo = document.querySelector("#new-task").value;
    cont_id += 1;
    todos.push({id: cont_id, todo: nuevo, completado: false});
    document.querySelector("#new-task").value = "";
    pintarTodos();
  });

  const pintarTodos = ()=> {
        document.querySelector("#incomplete-tasks").innerHTML = " ";
        document.querySelector("#completed-tasks").innerHTML = " ";
    todos.forEach(t => {
        const newLog = document.createElement("li");
        if (!t.completado){
            newLog.innerHTML = `<li id="elem${t.id}"><input type="checkbox" class="cambio" id="check${t.id}"><label>${t.todo}</label><input type="text"><button class="delete" id="del${t.id}">Delete</button></li>`;
            document.querySelector("#incomplete-tasks").appendChild(newLog);
        }
        else{
            newLog.innerHTML = `<li id="elem${t.id}"><input type="checkbox" class="cambio" id="check${t.id}" checked ><label>${t.todo}</label><input type="text"><button class="delete" id="del${t.id}">Delete</button></li>`;
            document.querySelector("#completed-tasks").appendChild(newLog);
        }
        const checkear = document.querySelector(`#check${t.id}`);
        checkear.addEventListener('change', event => {
              const checkeado = modificado(event.target.id.replace('check',''));
              if(event.target.checked){
                checkeado.completado = true;
              }else{
                checkeado.completado = false;
              }
              pintarTodos();
          });
        const del = document.querySelector(`#del${t.id}`);
        del.addEventListener('click',(ev)=>{
            const quitar = modificado(ev.target.id.replace('del',''));
            todos.splice(todos.indexOf(quitar),1);
            pintarTodos();
        });
    });
  }

pintarTodos();