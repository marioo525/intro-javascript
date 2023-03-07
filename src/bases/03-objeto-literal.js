//Objetos literales
const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45, 
  direccion: {
    ciudad: "New York",
    zip: 53536665,
    lat: 14.3232,
    lng: 34.997246
  }
};

//console.table(persona);

const persona2 = { ...persona };
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);