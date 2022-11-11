console.log('Hola Mundo');

const nombre = 'Carlos';
const apellido ='Gonzales';

const completo = nombre + ' ' + apellido;
const completo2 = `${nombre} ${apellido}`;

const completo3 = `
${nombre} 
${apellido}
${1 + 5}`;

console.log(completo);
console.log(completo2);
console.log(completo3);

function getSaludo(){
    return 'Car aprendiendo';
}

function getSaludo2(nombre){
    return 'Car aprendiendo con:' + nombre;
}

console.log(`Este es un texto: ${getSaludo2('Carlos')}`);