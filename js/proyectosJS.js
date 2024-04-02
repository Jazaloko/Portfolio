const main = document.querySelector("main")

const requestURL = "../json/proyectos.json"
const request = new XMLHttpRequest()
request.open("GET", requestURL)
request.responseType = "json"
request.send()

request.onload = function(){
    const proyectos = request.response
   
    populateMain(proyectos)
}

function populateMain(jsonObj){
    const H2 = document.createElement("h2")
    H2.textContent = jsonObj["titulo"]
    main.appendChild(H2)

    const listProyects = jsonObj["proyectos"]
    console.log (listProyects.lenght)

    for (var i = 0; i < 2; i++){
        
        //crear elementos
        const div = document.createElement("div")
        const figure = document.createElement("figure")
        const img = document.createElement("img")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")
        const a = document.createElement("a")
        
        //añadir contenido
        img.src = listProyects[i].imagen
        h3.textContent = listProyects[i].nombre
        p.textContent = listProyects[i].habilidades
        a.src = listProyects[i].url
        a.textContent = "Ver Proyecto"
        figure.appendChild(img)

        //añadir clases
        
        div.classList.add("proyecto")

        //añadir al main
        main.appendChild(div)
        div.appendChild(figure)
        div.appendChild(h3)
        div.appendChild(p)
        div.appendChild(a)
    }

    // const div2 = document.createElement("div")
    // div2.classList.add("dots")
    // for (var i = 0; i < 2; i++){
    //     const span = document.createElement("span")
    //     span.classList.add("dot")
    //     if (i = 0){
    //         span.classList.add("active")
    //     }
    //     span.onclick = cambiarProyecto(i)
    //     main.appendChild(span)
    // }
    

    // for (let index = 0; index < listProyects.lenght; index++) {
    //     const element = array[index];
        
    // }

    const contacto = document.createElement("a")
    contacto.classList.add("contacto")
    contacto.src = "#form"
    contacto.textContent = "Contactar"
    main.appendChild(contacto)

}

