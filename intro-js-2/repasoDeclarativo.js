const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

// funcion que retorne un array con los textos
//["Bradley Bouley is a Full Stack Resident" ]

//cesar moreno
const retornaTexto = () => {
  return users.map(
    (data) => data.firstName + " " + data.lastName + "  " + data.role
  );
};
console.log(retornaTexto());

//jose moreno

const getDescription = (array) => {
  return array.map((element) => {
    return `${element.firstName} ${element.lastName} is a ${element.role}`;
  });
};

// susana

const traerTextos = users.map((u) => {
  return `${u.firstName} ${u.lastName} is a ${u.role}`;
});
console.log(traerTextos);

//daniel
const returnPhrase = () =>
  users.map((usu) => `${usu.firstName} ${usu.lastName} is a ${usu.role}`);

// Andres
const mostrar = () => {
  return users.map((u) => {
    return `${u.firstName} ${u.lastName} is a ${u.role}`;
  });
};

//camilo medina

const GetUserNames = (array) => {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    result = `${array[index].firstName} ${array[index].lastName} is a ${array[index].role}`;
  }
  return result;
};
console.log(GetUserNames(users));

// funcion que traiga usuarios por rol
// traerUsuariosPorRol('Instructor')//

const filtraRole = (role) => users.filter((user) => user.role == role);

console.log(filtraRole("Instructor"));

// sandra

const traerUsuariosPorRol = (rol, users) => {
  return users.filter((user) => {
    return user.role.includes(rol);
  });
};
console.log(traerUsuariosPorRol("Resident", users));

// una funcion que use prompt e inserte nuevos registros a usuario

const promptNewUsers = () => {
  const firstName = prompt("Enter firstName: ");
  const lastName = prompt("Enter lastName: ");
  const role = prompt("Enter role: ");
  users.push({
    firstName,
    lastName,
    role,
  });
  return users;
};

function constructorUsuarios(nombre, apellido, rol) {
  users.push({ nombre, apellido, rol });
  return users;
}
const nombre = String(prompt("Ingrese un nombre"));
const apellido = String(prompt("Ingrese un Apellido"));
const rol = String(prompt("Ingrese un rol"));

console.log(constructorUsuarios(nombre, apellido, rol));
