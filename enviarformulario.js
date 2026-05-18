emailjs.init("8vBiXXgUhxsNhIJ53");

/* FORMULARIO */
const formulario = document.getElementById("formulario");

/* LOADER */
const loader = document.getElementById("loader");

/* MENSAJE */
const mensaje = document.getElementById("mensajeForm");


/* ENVIAR */
formulario.addEventListener("submit", function(e){

    e.preventDefault();

    /* MOSTRAR SPINNER */
    loader.style.display = "block";

    /* LIMPIAR MENSAJES */
    mensaje.style.display = "none";

    emailjs.sendForm(
        "service_9170cab",
        "template_ekkp9o5",
        this
    )

    .then(() => {

        loader.style.display = "none";

        mensaje.style.display = "block";

        mensaje.className = "mensaje-form mensaje-exito";

        mensaje.innerHTML =
        "✅ Solicitud enviada correctamente";

        formulario.reset();

    })

    .catch((error) => {

        loader.style.display = "none";

        mensaje.style.display = "block";

        mensaje.className = "mensaje-form mensaje-error";

        mensaje.innerHTML =
        "❌ Error al enviar formulario";

        console.log(error);

    });

});