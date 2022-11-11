
import { getHeroeById2 } from "./bases/08-import-export";

// const promesa = new Promise((resolve, reject)=>{

//     setTimeout(() => {
        
//         const heroe = getHeroeById2(2);
//         //console.log(heroe); 
//         resolve(heroe);
//         //reject ('ho se pudo encontrar');
//     }, 2000);
// });

// promesa.then((heroe)=>{
//     console.log('Heroe', heroe);
// }).catch (err=>console.warn(err));

const getHeroeByIdAsync =(id)=>{
    return new Promise((resolve, reject)=>{
            setTimeout(() => {
                const heroe = getHeroeById2(id);
                //console.log(heroe); 
                if(heroe){
                    resolve(heroe);
                }else{
                    reject('No se pudo encontrar el heroe');
                }
                //reject ('ho se pudo encontrar');
            }, 2000);
        });
}

// getHeroeByIdAsync(20)
//     .then(heroe =>console.log('Heroe', heroe))
//     .catch(err=>console.warn(err))

getHeroeByIdAsync(2)
    .then(console.log)
    .catch(console.warn)

