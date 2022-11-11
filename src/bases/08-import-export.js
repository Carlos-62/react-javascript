//import { heroes } from './data/heroes.js';
//import {heroes} from './data/heroes'

//import { heroes } from "./data/heroes";

import heroes,{data} from "../data/heroes";

// const getHeroeById = (id)=>{
//     return heroes.find((heroe)=>{
//         if(heroe.id === id){
//             return true;
//         }else{
//             return false;
//         }    
//     })
// }

const getHeroeById =(id)=>{
    return heroes.find((heroe)=>heroe.id = id);
}
export const getHeroeById2 = (id)=> heroes.find((heroe)=>heroe.id === id);
console.log(getHeroeById(4));
console.log(getHeroeById2(4));

const getHeroesByOwner = (owner)=>heroes.filter((heroe)=>heroe.owner === owner);
console.log(getHeroesByOwner('Marvel'));