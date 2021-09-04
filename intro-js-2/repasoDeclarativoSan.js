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

const GetArray = (users) => {
  return users.map((user) => {
      return `${user.firstName} ${user.property} is a ${user.role} `
  });
};
console.log(GetArray(users));

// funcion que traiga usuarios por rol
// traerUsuariosPorRol('Instructor')//
const traerUsuariosPorRol = (rol,users) => {
  return users.filter((user) => { 
    return user.role.includes(rol)
  });
};
console.log(traerUsuariosPorRol("Resident", users));

// una funcion que use prompt e inserte nuevos registros a usuario
