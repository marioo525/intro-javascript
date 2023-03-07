//Desestructuración de arrays

const personajes = ['Goku', 'Vegeta', 'Trunks'];

/*console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);*/

const [,,p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo(); //Desestructuración de array
console.log(letras,numeros);

//Tarea
// 1. El primer valor del arr se llamará nombre
// 2. El segundo valor se llamará setNombre
const usaState = (valor) => {
    return [valor,()=>{
        console.log('Hola Mundo')
    }];
}

const [nombre,setNombre] = usaState('Goku');

console.log(nombre);
setNombre();

//arr[1](); También funcionaría como la linea 31 pero nos acostumbraremos de la otra forma por comodidad