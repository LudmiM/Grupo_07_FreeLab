document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('freelancer-registration');
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

    // Validación en tiempo real del nombre
    function validateFirstName() {
        const firstNameInput = document.getElementById('firstName');
        const firstName = firstNameInput.value.trim();
        if (firstName.length < 2) {
            showError(firstNameInput, 'El nombre debe tener al menos 2 caracteres.');
        } else {
            clearError(firstNameInput);
        }
    }

    // Validación en tiempo real del apellido
    function validateLastName() {
        const lastNameInput = document.getElementById('lastName');
        const lastName = lastNameInput.value.trim();
        if (lastName.length < 2) {
            showError(lastNameInput, 'El apellido debe tener al menos 2 caracteres.');
        } else {
            clearError(lastNameInput);
        }
    }

    // Validación en tiempo real del país
    function validateCountry() {
        const countryInput = document.getElementById('country');
        const country = countryInput.value.trim();
        if (country.length === 0) {
            showError(countryInput, 'El país es obligatorio.');
        } else {
            clearError(countryInput);
        }
    }

    // Validación en tiempo real del teléfono
    function validatePhone() {
        const phoneInput = document.getElementById('phone');
        const phone = phoneInput.value.trim();
        if (!/^\d+$/.test(phone)) {
            showError(phoneInput, 'El número de teléfono no debe contener letras.');
        } else {
            clearError(phoneInput);
        }
    }

    // Validación en tiempo real de la imagen
    function validateMainImage() {
        const mainImageInput = document.getElementById('mainImage');
        const mainImage = mainImageInput.files[0];
        if (!mainImage) {
            showError(mainImageInput, 'La imagen es obligatoria.');
        } else {
            const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
            const extension = mainImage.name.split('.').pop().toLowerCase();
            if (!allowedExtensions.includes(extension)) {
                showError(mainImageInput, 'Formato de archivo no válido. Debe ser JPG, JPEG, PNG o GIF.');
            } else {
                clearError(mainImageInput);
            }
        }
    }

    // Validación en tiempo real del valor por hora
    function validateHourValue() {
        const hourValueInput = document.getElementById('hourValue');
        const hourValue = hourValueInput.value.trim();
        if (!/^\d+$/.test(hourValue)) {
            showError(hourValueInput, 'El valor por hora no debe contener letras.');
        } else {
            clearError(hourValueInput);
        }
    }

    // Validación en tiempo real del código de país
    function validatePhoneCode() {
        const phoneCodeInput = document.getElementById('phoneCode');
        const phoneCode = phoneCodeInput.value.trim();
        if (!/^\d+$/.test(phoneCode)) {
            showError(phoneCodeInput, 'El código de país no debe contener letras.');
        } else {
            clearError(phoneCodeInput);
        }
    }

    // Asignar eventos de escucha a los campos para validar en tiempo real
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            switch (input.id) {
                case 'firstName':
                    validateFirstName();
                    break;
                case 'lastName':
                    validateLastName();
                    break;
                case 'country':
                    validateCountry();
                    break;
                case 'phone':
                    validatePhone();
                    break;
                case 'mainImage':
                    validateMainImage();
                    break;
                case 'hourValue':
                    validateHourValue();
                    break;
                case 'phoneCode':
                    validatePhoneCode();
                    break;
                // Agrega más casos según sea necesario para otros campos
            }
        });
    });

    // Validación del formulario al enviar
    form.addEventListener('submit', function(event) {
        // Ejecutar todas las validaciones antes de enviar el formulario
        validateFirstName();
        validateLastName();
        validateCountry();
        validatePhone();
        validateMainImage();
        validateHourValue();
        validatePhoneCode();

        // Verificar si hay errores
        const errors = form.querySelectorAll('.text-danger-reg-form');
        if (errors.length > 0) {
            event.preventDefault(); // Evitar el envío del formulario si hay errores
            errorContainer.textContent = 'Por favor, complete todos los campos correctamente.';
        }
    });
});
``
