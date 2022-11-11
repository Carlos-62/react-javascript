console.log('Hola Mundo');

const persona ={
    nombre:'Tony',
    apellido: 'Start',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 4521552,
        lat: 21.21445,
        lng: 45.21214,
    }
};

const persona2 = {...persona};
persona2.nombre = 'Peter';

// console.log( {persona: persona});
// console.table( {persona: persona});
console.log( {persona});
console.table( {persona});

// console.log( {persona2: persona2});
// console.table( {persona2: persona2});
console.log( {persona2});
console.table( {persona2});