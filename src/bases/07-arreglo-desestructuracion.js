const personajes = ['car','luis','benji'];

// console.log(personajes);
// console.log(personajes[0]);

const [,,p3] = personajes;
console.log(p3);

const retornaArreglo = ()=>{
    return['ABC',123]
}

const arr = retornaArreglo();
console.log(arr);

const [letras, numero] = retornaArreglo();
console.log(letras, numero);

//Tarea
const usarEstado = (valor)=>{
    return [valor,()=>{
        console.log('Hola Carlos')
    }];
}

const [nombre,setNombre] = usarEstado('Carlos');
console.log(nombre);
setNombre();
