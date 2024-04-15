// Selecciona el formulario
const newsletterForm = document.querySelector('.footer__section__cont');

// Agrega un controlador de eventos para el evento de envío del formulario
newsletterForm.addEventListener('submit', function(event) {
    // Prevenir el comportamiento predeterminado del formulario (evitar recargar la página)
    event.preventDefault();

    // Envía el formulario
    const formData = new FormData(newsletterForm);

    console.log(formData); // Deberías ver los datos en la consola

    fetch('/newsletter', {
        method: 'POST',
        body: formData
    })
    
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => {
        // Mostrar la alerta con SweetAlert2 según el resultado
        if (data.success) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'You have successfully subscribed to the newsletter!',
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            // Mostrar una alerta de error si la operación falla
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: data.message || 'Something went wrong!'
            });
        }
    })
    .catch(error => {
        console.error('Error al suscribirse al boletín:', error);
        // Manejar el error mostrando una alerta de error
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
        });
    });
});
