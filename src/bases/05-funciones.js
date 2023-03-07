//Funciones en JS
const saludar = function (nombre) {
  return `Hola ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola ${nombre}`;
};

const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola Mundo`;

//console.log(saludar("Mario"));
console.log(saludar2("Mario"));
console.log(saludar3("Sofia"));
console.log(saludar4());

/*const getUser = () => {
  return {
    uid: "ABC123",
    username: "El_Papi525",
  }
}*/

const getUser = () => ({
  uid: "ABC123",
  username: "El_Papi525",
});

console.log(getUser());

// Tarea
/*
 * function getUserActivo (nombre) {
 *  return {
 *    uid: "ABC123",
 *    username: nombre,  
 *  }
 * };
 * 
 * const usuarioActivo = getUserActivo("Mario");
 * console.log(usuarioActivo);
 */
//También se puede hacer así
/*const usuarioActivo = function getUserActivo(nombre) {
  return {
    uid: "ABC123",
    username: nombre,
  };
}
console.log(usuarioActivo("Mario"));*/
// 1. Transformen a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas
const getUsuarioActivo = (nombre) => 
  ({ 
    uid: "ABC123", 
    username: nombre,
  });

  const usuarioActivo = getUsuarioActivo("Mario")
  console.log(usuarioActivo);
