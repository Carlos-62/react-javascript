// const getImagenPromesa = ()=>{
//     const promesa = new Promise((resolve, reject)=>{
//         resolve('https://sicomperu.net')
//     })

//     return promesa;
// }

// getImagenPromesa().then(console.log);

const getImagen = async()=>{
    return 'https://sicomperu.net';
}
getImagen().then(console.log);

const getImagen2 = async()=>{

    try {
        const apiKey = 'Barku4vsv2h630yaQ5Y26OiVwzX2GMk7';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const data = await resp.json();
    
        const ruta = data.data.images.original.url;
        const img = document.createElement('img');
        img.src= ruta;
        document.body.append(img);
    
        console.log(data);
        console.log(ruta);
    } catch (error) {
       //Manejo de errores 
       console.error(error);
    }
 
}
getImagen2();

// peticion
//     .then(resp =>resp.json())
//     .then(data=>{
//         const ruta = data.data.images.original.url
//         const img = document.createElement('img');
        
//         img.src= ruta;

//         document.body.append(img);
//     })
//     .catch(console.warn)