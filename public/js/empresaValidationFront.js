document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('employer-registration');
    const inputs = form.querySelectorAll('input, textarea');
    const errorContainer = document.getElementById('error-container');

    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = message;
    }

    function clearError(input) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = '';
    }

    function validateCompanyName() {
        const companyNameInput = document.getElementById('companyName');
        const companyName = companyNameInput.value.trim();
        if (companyName.length < 2) {
            showError(companyNameInput, 'El nombre de la empresa debe tener al menos 2 caracteres.');
        } else {
            clearError(companyNameInput);
        }
    }

    function validateLocation() {
        const locationInput = document.getElementById('location');
        const location = locationInput.value.trim();
        if (location.length === 0) {
            showError(locationInput, 'La ubicación de la empresa es obligatoria.');
        } else {
            clearError(locationInput);
        }
    }

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
              
            }
        });
    });

   
    form.addEventListener('submit', function(event) {
        validateCompanyName();
        validateLocation();
        validateEmpresaImage();
        validateWebsite();

        const errors = form.querySelectorAll('.text-danger');
        if (errors.length > 0) {
            event.preventDefault(); 
            errorContainer.textContent = 'Por favor, complete todos los campos correctamente.';
        }
    });
});
