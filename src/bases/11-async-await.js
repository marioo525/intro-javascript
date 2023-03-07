//Async y Await

// const getImagenPromesa = () => new Promise (resolve => resolve('https://asdfghjkl.com'));
// getImagenPromesa().then(console.log);

// const getImage = async() => {
//     return 'https://asdfghjkl.com';
// }

// getImage().then(console.log);

const getImagen = async () => {
  try {
    const apiKey = "UiPqf7v10YNI1FglB1dYr0UO7wjzVmrJ";
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    //console.log(data);
    //Tarea - Mostrar el gift random en pantalla
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    //Manejo del error;
    console.error(error);
  }
};

getImagen();
