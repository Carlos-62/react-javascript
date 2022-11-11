console.log('Hola Mundo');

//const arreglo = Array(100);

// function saludar(nombre){
//     return `Hola, ${nombre}`;
// }

const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

const saludar2 =  (nombre)=>{
    return `Hola, ${nombre}`;
}

const saludar3 =  (nombre)=>`Hola, ${nombre}`;


const saludar4 =  ()=>`Hola Mundo`;


console.log(saludar('Carlos'));
console.log(saludar2('Eduardo'));
console.log(saludar3('Gonzales'));
console.log(saludar4());

const getUser = ()=>{
    return {
        uid: 'ABC123',
        username: 'EL_ksdbf'
    }
}

const getUser2 = ()=>
    ({
        uid: 'ABC123',
        username: 'EL_ksdbf'
    });


console.log(getUser);
console.log(getUser2);


function getUsuarioActivo(nombre){
    return{
        uid: 'ABC123',
        username: nombre
    }
}

const getUsuarioActivo2 =  (nombre)=>({
        uid: 'ABC123',
        username: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
const usuarioActivo2 = getUsuarioActivo2('Carlos');
console.log(usuarioActivo);
console.log(usuarioActivo2);
