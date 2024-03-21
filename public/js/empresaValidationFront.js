document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('employer-registration');
    const inputs = form.querySelectorAll('input, textarea');
    const errorContainer = document.getElementById('error-container');

    // Función para mostrar mensajes de error
    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = message;
    }

    // Función para limpiar mensajes de error
    function clearError(input) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = '';
    }

    // Validación en tiempo real del nombre de la empresa
    function validateCompanyName() {
        const companyNameInput = document.getElementById('companyName');
        const companyName = companyNameInput.value.trim();
        if (companyName.length < 2) {
            showError(companyNameInput, 'El nombre de la empresa debe tener al menos 2 caracteres.');
        } else {
            clearError(companyNameInput);
        }
    }

    // Validación en tiempo real de la ubicación de la empresa
    function validateLocation() {
        const locationInput = document.getElementById('location');
        const location = locationInput.value.trim();
        if (location.length === 0) {
            showError(locationInput, 'La ubicación de la empresa es obligatoria.');
        } else {
            clearError(locationInput);
        }
    }

    // Validación en tiempo real de la imagen de la empresa
    function validateEmpresaImage() {
        const empresaImageInput = document.getElementById('empresaImage');
        const empresaImage = empresaImageInput.files[0];
        if (!empresaImage) {
            showError(empresaImageInput, 'La imagen de perfil de la empresa es obligatoria.');
        } else {
            const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
            const extension = empresaImage.name.split('.').pop().toLowerCase();
            if (!allowedExtensions.includes(extension)) {
                showError(empresaImageInput, 'Formato de archivo no válido. Debe ser JPG, JPEG, PNG o GIF.');
            } else {
                clearError(empresaImageInput);
            }
        }
    }

    // Validación en tiempo real del sitio web de la empresa
    function validateWebsite() {
        const websiteInput = document.getElementById('website');
        const website = websiteInput.value.trim();
        const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
        if (!urlRegex.test(website)) {
            showError(websiteInput, 'El formato del sitio web no es válido.');
        } else {
            clearError(websiteInput);
        }
    }

    // Asignar eventos de escucha a los campos para validar en tiempo real
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            switch (input.id) {
                case 'companyName':
                    validateCompanyName();
                    break;
                case 'location':
                    validateLocation();
                    break;
                case 'empresaImage':
                    validateEmpresaImage();
                    break;
                case 'website':
                    validateWebsite();
                    break;
                // Agrega más casos según sea necesario para otros campos
            }
        });
    });

    // Validación del formulario al enviar
    form.addEventListener('submit', function(event) {
        // Ejecutar todas las validaciones antes de enviar el formulario
        validateCompanyName();
        validateLocation();
        validateEmpresaImage();
        validateWebsite();

        // Verificar si hay errores
        const errors = form.querySelectorAll('.text-danger');
        if (errors.length > 0) {
            event.preventDefault(); // Evitar el envío del formulario si hay errores
            errorContainer.textContent = 'Por favor, complete todos los campos correctamente.';
        }
    });
});
