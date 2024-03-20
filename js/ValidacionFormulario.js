/*<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_LG"> <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#ff7b00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>*/

const contactFormContainer = document.querySelector(".formulario-contacto")
const btnEnviar = document.querySelector(".btn-enviar")

const nombreForm = document.getElementById("form-nombre")
const emailForm = document.getElementById("form-correo")
const mensajeForm = document.getElementById("form-mensaje")

const NombreError = document.getElementById("Nombre-error")
const CorreoError = document.getElementById("Email-error")
const MensajeError = document.getElementById("Mensaje-error")

const verificarNombre = function () {
    if (nombreForm.value === "") {
        NombreError.textContent = "Rellene el nombre"
        NombreError.classList.add("error")
        btnEnviar.disabled = true
        return false
    } else {
        NombreError.textContent = ""
        NombreError.classList.remove("error");
        btnEnviar.disabled = false
    }
    return true
}

nombreForm.addEventListener("change", function () {
    verificarNombre()
})

const verificarCorreo = function () {
    let email = emailForm.value
    if (!email.includes('@')) {
        CorreoError.textContent = "Ponga un formato de Email correcto porfavor"
        CorreoError.classList.add("error")

        btnEnviar.disabled = true
        return false
    } else {
        CorreoError.textContent = ""
        CorreoError.classList.remove("error")
        btnEnviar.disabled = false
    }
    return true
}

emailForm.addEventListener("change", function () {
    verificarCorreo()
})

const verificarMensaje = function (){
    if (mensajeForm.value === ""){
        MensajeError.textContent = "Debe poner algún mensaje"
        MensajeError.classList.add("error")
        btnEnviar.disabled = true
        return false
    } else {
        MensajeError.textContent = ""
        MensajeError.classList.remove("error")
        btnEnviar.disabled = false
    }
    return true
}

mensajeForm.addEventListener("change", function () {
    verificarMensaje()
})

btnEnviar.addEventListener("click", function (e) {
    e.preventDefault()
    verificarNombre()
    verificarCorreo()
    verificarMensaje()

    if (verificarNombre() && verificarMensaje() && verificarCorreo() === true) {
        nombreForm.value = ""
        emailForm.value = ""
        mensajeForm.value = ""
    }

})