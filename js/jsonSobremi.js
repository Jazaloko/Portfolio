const main = document.querySelector("main")

const requestURL = "../json/sobremi.json"

const request = new XMLHttpRequest()

request.open("GET", requestURL)

request.onload = function(){
    const sobreMi = request.response
    populateMain(sobreMi)
}

function populateMain(jsonObj){
    const H2 = document.createElement("h2")
    H2.textContent = jsonObj["titulo"]
    main.appendChild(H2)

    const p = document.createElement("p")
    p.textContent = jsonObj["Contenido"]
    main.appendChild(p)
}

