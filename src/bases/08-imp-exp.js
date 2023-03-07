//Importaciones y exportaciones. Se necesita del archivo heroes.js que se encuentra en la carpeta data
import heroes, {owners} from '../data/heroes'

//console.log(owners); //Poner luego bien
//console.log(heroes);

//Se puede hacer así también aunque es más largo
/*const getHeroeById = (id) => {
    return heroes.find( (heroe) =>{
        if(heroe.id === id){
            return true;
        }else{
            return false;
        }
    })
}*/

//Mia
/*const getHeroeById = (id) => {
    return heroes.find( (heroe) => heroe.id === id);
}*/

export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id);

//console.log(getHeroeById(2)); //Poner luego bien

//Filter

export const getHeroesByOwner = (owner) => heroes.filter((heroe)=> heroe.owner === owner);

//console.log(getHeroesByOwner('DC')); //Poner luego bien

const [primero,segundo,tercero] = getHeroesByOwner('DC');
//console.log(primero,segundo,tercero); //Poner luego bien


