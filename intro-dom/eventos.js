// elementos les podemos
//agregar escuchadores de eventos

const calcular = document.querySelector("#calcular");
calcular.addEventListener("click", (ev) => {
  const value1 = parseInt(document.querySelector("#numero1").value);
  const value2 = parseInt(document.querySelector("#numero2").value);

  const resultado = value1 + value2;

  document.querySelector("#resultado").value = resultado;

  const newLog = document.createElement("p");
  newLog.innerHTML = `${value1} + ${value2} = ${resultado}`;

  document.querySelector("#log").appendChild(newLog);
});
