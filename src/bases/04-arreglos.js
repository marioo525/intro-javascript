//Arreglos en JS (Vectores)

//const vector = new Array(100); //Es raro que usemos esto
const vector = [1,2,3,4];
/*vector.push(1);
vector.push(2);
vector.push(3);
vector.push(4);
*/

let vector2 = [...vector,5];

const vector3 = vector2.map(function(numero){
  return numero*2;
});

console.log(vector);
console.log(vector2);
console.log(vector3);