//FetchAPI
const apiKey = 'UiPqf7v10YNI1FglB1dYr0UO7wjzVmrJ';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); //Esto devuelve una promesa

// peticion.then( resp =>{
//     console.log(resp);
//      resp.json().then(data => {
//          console.log(data);
//      })
// })

//Código más limpio y legible
peticion.then(resp => resp.json())
.then(({data}) => {
    //console.log(data.images.original.url);
    const {url} = data.images.original;
    console.log(url);

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
})
.catch(console.warn);