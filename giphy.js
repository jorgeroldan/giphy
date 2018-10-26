// API GIPHY
// http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=i5fuQg464oUOLaOpN1CQQUusWHGA5p78&limit=2

// Valor del Input inicial
let input = "funny+cat"


// Instanciamos un nuevo objeto.
const xhttp = new XMLHttpRequest();

let btn_consultar = document.getElementById('btn')

btn_consultar.addEventListener('click', function(){
    let id_personaje = document.getElementById('buscar_gif').value
    const input = pedirData(id_personaje)
    // console.log(input)
})

function mostrarContenido(contenido){
    let info = document.getElementById('info')
    let personaje = contenido
    info.innerHTML = contenido
    parseData(contenido)
}

function parseData(data){
    respuestaRequest(data)
    pedirData(data)
}

// Quiero crear el objeto que fue parseado para poder acceder a sus propiedades
// let objeto = respuestaRequest()

// Acceso a la propiedad del link *.gif >> data[0].images.original.url
// Incrustar esa propiedad en el HTML

// Retornar el objeto parseado
function respuestaRequest(giphy_texto){
    // console.log("Aqui esta el GIF: "+giphy_texto)
    return JSON.parse(giphy_texto)
    
}

// Creamos una funcion que es la que va a ejecutar el pedido
const pedirData = idPeople =>{
    // Definimos la url a la cual le vamos a pedir la data
    let url = "http://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=i5fuQg464oUOLaOpN1CQQUusWHGA5p78&limit=2"

    // Le asignamos al metodo onreadystatechange una funcion la cual va a traer la informacion 
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            // Respuesta que nos da el servidor
        //    console.log(xhttp.responseText);
           mostrarContenido(xhttp.responseText)

        }
    };
    // Iniciamos la peticion de datos.
    xhttp.open("GET", url , true);
    xhttp.send();
}
