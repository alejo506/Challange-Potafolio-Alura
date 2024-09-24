document.getElementById("contact").addEventListener("input", function() {
    validarFormulario(); // Validar en cada cambio de entrada
});

document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario para validar primero
    if (validarFormulario()) {
        alert("Formulario enviado exitosamente.");
        document.getElementById("contact").reset(); // Reiniciar los campos del formulario
        resetErrors(); // Limpiar los mensajes de error
        document.getElementById("send").disabled = true; // Desactivar el botón de enviar de nuevo
    }
});

function validarFormulario() {
    const fnameInput = document.getElementById("fname");
    const emailInput = document.getElementById("femail");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");
    const sendButton = document.getElementById("send");

    // Spans para mostrar mensajes de error
    const fnameError = document.getElementById("fname-error");
    const emailError = document.getElementById("femail-error");
    const subjectError = document.getElementById("subject-error");
    const messageError = document.getElementById("message-error");

    const fname = fnameInput.value.trim(); // Eliminar espacios en blanco
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    // Expresión regular para permitir solo letras en el nombre
    const soloLetras = /^[A-Za-záéíóúÁÉÍÓÚÑñ\s]+$/;

    // Expresión regular para validar el formato del correo electrónico
    const formatoEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Resetear mensajes de error individuales
    fnameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    let formularioValido = true;

    // Validar el nombre
    if (fname === "") {
        fnameError.textContent = "First Name must not be empty.";
        formularioValido = false;
    } else if (fname.length > 50) {
        fnameError.textContent = "First Name must not exceed 50 characters.";
        formularioValido = false;
    } else if (!soloLetras.test(fname)) {
        fnameError.textContent = "First Name must only contain letters.";
        formularioValido = false;
    }

    // Validar el correo electrónico
    if (email === "") {
        emailError.textContent = "Email Address must not be empty.";
        formularioValido = false;
    } else if (!formatoEmail.test(email)) {
        emailError.textContent = "Please enter a valid Email Address (example: text@domain.com).";
        formularioValido = false;
    }

    // Validar el asunto
    if (subject === "") {
        subjectError.textContent = "Subject must not be empty.";
        formularioValido = false;
    } else if (subject.length > 50) {
        subjectError.textContent = "Subject must not exceed 50 characters.";
        formularioValido = false;
    }

    // Validar el mensaje
    if (message === "") {
        messageError.textContent = "Message must not be empty.";
        formularioValido = false;
    } else if (message.length > 300) {
        messageError.textContent = "Message must not exceed 300 characters.";
        formularioValido = false;
    }

    // Habilitar o deshabilitar el botón de envío según la validez del formulario
    sendButton.disabled = !formularioValido;

    return formularioValido;
}

// Función para limpiar los mensajes de error después de enviar el formulario
function resetErrors() {
    document.getElementById("fname-error").textContent = "";
    document.getElementById("femail-error").textContent = "";
    document.getElementById("subject-error").textContent = "";
    document.getElementById("message-error").textContent = "";
}
