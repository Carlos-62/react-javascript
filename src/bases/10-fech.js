const apiKey = 'Barku4vsv2h630yaQ5Y26OiVwzX2GMk7';

const  peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then(resp=>{
//     resp.json().then(data=>{
//         console.log(data)
//     });
// })
// .catch(console.warn)

peticion
    .then(resp =>resp.json())
    .then(data=>{
        const ruta = data.data.images.original.url
        const img = document.createElement('img');
        
        img.src= ruta;

        document.body.append(img);
    })
    .catch(console.warn)