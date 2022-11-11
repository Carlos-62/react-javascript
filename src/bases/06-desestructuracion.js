//Desestructuracion

console.log('Hola Mundo');

//const arreglo = Array(100);

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman',
};

// const {nombre} = persona;
// const {edad, clave} = persona;

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona =(usuario)=>{
    const {nombre, edad, clave} = usuario;
    console.log(nombre, edad, clave);
};
retornaPersona(persona);

//Desestructuracion solo nombre,edad,rango
const retornaPersona2 =({nombre, edad, rango='Capitan'})=>{

    console.log(nombre, edad, rango);
};
retornaPersona2(persona);

const userContext =({clave, nombre, edad, rango='Capitan'})=>{
    return {
        nombreClave: clave,
        anios : edad,
        latlng:{
            lat: 14.214,
            lng: -12452

        }
    }
};
const {nombreClave,anios,latlng:{lat,lng}} = userContext(persona);
console.log(nombreClave,anios,lat,lng);