document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('encuesta-form');
    const botonEnviar = document.querySelector('button[type="submit"]');
    const botonCancelar = document.querySelector('button[onclick*="location.href"]');
    const botonRestablecer = document.querySelector('button[type="reset"]');

    // Validaciones de campos
    form.addEventListener('submit', function (event) {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const fecha = document.getElementById('fecha').value;
        const email = document.getElementById('email').value;

        const nombreRegex = /^[a-zA-Z]+$/;
        const fechaRegex = /^\d{2}-\d{2}-\d{4}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let valid = true;

        if (!nombreRegex.test(nombre)) {
            alert('El nombre solo puede contener letras.');
            valid = false;
        }

        if (!nombreRegex.test(apellido)) {
            alert('El apellido solo puede contener letras.');
            valid = false;
        }

        if (!fechaRegex.test(fecha)) {
            alert('La fecha debe tener el formato dd-mm-aaaa.');
            valid = false;
        }

        if (!emailRegex.test(email)) {
            alert('El email debe tener un formato válido.');
            valid = false;
        }

        // Mostrar alerta con datos si es válido
        if (valid) {
            alert(`Nombre: ${nombre}\nApellido: ${apellido}\nFecha de Nacimiento: ${fecha}\nSexo: ${document.getElementById('sexo').value}\nValoración: ${document.getElementById('valoracion').value}\nEmail: ${email}\nComentario: ${document.getElementById('comentario').value}`);
        } else {
            event.preventDefault(); // Detener el envío del formulario si no es válido
        }
    });

    // Evento para el botón "Cancelar"
    botonCancelar.addEventListener('click', function (event) {
        event.preventDefault();
        const confirmacion = confirm("¿Deseas volver a la página anterior?");
        if (confirmacion) {
            window.history.back(); // Volver a la página anterior
        }
    });

    // Evento para el botón "Restablecer valores"
    botonRestablecer.addEventListener('click', function () {
        form.reset(); // Restablece los valores del formulario
    });
});
