//export default []; //Forma de exportar un array
const heroes =  [
  {
    id: 1,
    name: "Batman",
    owner: "DC",
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    name: "Superman",
    owner: "DC",
  },
  {
    id: 4,
    name: "Flash",
    owner: "DC",
  },
  {
    id: 5,
    name: "Wolverine",
    owner: "Marvel",
  },
];

//export const owners = ['DC', 'Marvel']; //Es la favorita por el creador del curso
const owners = ['DC', 'Marvel'];

//export default heroes; //Otra forma de exportar un objeto/array

//Otra forma de exportar
export {
  heroes as default,
  owners
}