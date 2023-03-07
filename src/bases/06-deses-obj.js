//Desestructuración
//Asignación Desestructurante
const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

//console.log(persona.nombre);
//console.log(persona.edad);
//console.log(persona.clave);

//const {nombre,edad,clave} = persona;

//console.log(nombre);
//console.log(edad);
//console.log(clave);

/*const retornaPersona = (usuario) => {
    const {nombre,edad,clave} = usuario;
    console.log(edad,clave,nombre);
  };*/

/*
  const retornaPersona = ({nombre,edad, rango = "Capitan"}) => {
    console.log(edad,nombre, rango);
  };*/

const usaContext = ({ nombre, edad, rango = "Capitan" }) => {
  return {
    nombreClave: nombre,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

const {nombreClave,anios,latlng: { lat, lng },} = usaContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
