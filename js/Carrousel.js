let cardIndex = 0

var proyecto

const cards = document.getElementsByClassName("proyecto")

function cambiarProyecto(proyecto){
    for (let i = 0; i < cards.length; i++){
        cards[i].classList.remove("active-proyecto")
    }
    cards[proyecto].classList.add("active-proyecto")
}

function nextProyecto(){
    cambiarProyecto(proyecto)
    proyecto++
    if (proyecto == 2){
        proyecto = 0
    }

}

setInterval(nextProyecto, 2000)