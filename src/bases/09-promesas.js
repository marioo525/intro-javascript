//Promesas
import { getHeroeById } from "./bases/08-imp-exp";

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(()=>{
//         //Tarea
//         // Importar el getHeroeById
//         const heroe = getHeroeById(2);
//         //console.log(heroe);
//         resolve(heroe);
//         //reject('No se pudo encontrar el héroe')
//     },2000)
// });

// promesa.then((heroe)=>{
//     console.log('Then de la promesa', heroe);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //Tarea
      // Importar el getHeroeById
      const heroe = getHeroeById(id);
      //console.log(heroe);
      if (heroe) {
        resolve(heroe);
      } else {
        reject("No se pudo encontrar el héroe");
      }
    }, 2000);
  });
  //return promesa; //Menos usado
};

getHeroeByIdAsync(1)
  //.then((heroe) => console.log("Heroe", heroe))
  //.catch((err) => console.warn(err));
  .then(console.log)
  .catch(console.warn);
