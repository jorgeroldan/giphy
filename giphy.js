// API GIPHY
// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=i5fuQg464oUOLaOpN1CQQUusWHGA5p78&limit=2

// Valor del Input inicial
let input = "funny+cat"

// Instanciamos un nuevo objeto.
const xhttp = new XMLHttpRequest();

let btn_consultar = document.getElementById('btn')

btn_consultar.addEventListener('click', function () {
    let gifABuscar = document.getElementById('buscar_gif').value
    const input = pedirData(gifABuscar)
})

function mostrarContenido(contenido){
    let ul = document.getElementById('elem')
    ul.innerHTML = ''
    
    let respuestaRequest = JSON.parse(contenido)
    let values = Object.values(respuestaRequest.data[0].images.original)
    let Keys = Object.keys(respuestaRequest.data[0].images.original)
    
    console.log(values)
    console.log(Keys)
    for (let i = 0; i < Keys.length; i++) {
        let li = document.createElement('li')
        li.append(Keys[i],': ', values[i])
        ul.append(li)
        console.log()
    }
}

// Quiero crear el objeto que fue parseado para poder acceder a sus propiedades
// let objeto = respuestaRequest()

// Acceso a la propiedad del link *.gif >> data[0].images.original.url
// Incrustar esa propiedad en el HTML

// Retornar el objeto parseado
// function respuestaRequest(giphy_texto) {
//     // console.log("Aqui esta el GIF: "+giphy_texto)
//     return JSON.parse(giphy_texto)

// }

// Creamos una funcion que es la que va a ejecutar el pedido
const pedirData = idPeople => {
    // Definimos la url a la cual le vamos a pedir la data
    let url = "http://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=i5fuQg464oUOLaOpN1CQQUusWHGA5p78&limit=2"

    // Le asignamos al metodo onreadystatechange una funcion la cual va a traer la informacion 
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            // Respuesta que nos da el servidor
            //    console.log(xhttp.responseText);
            mostrarContenido(xhttp.responseText)

        }
    };
    // Iniciamos la peticion de datos.
    xhttp.open("GET", url, true);
    xhttp.send();
}