document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    function validateEmail() {
        const emailError = document.querySelector('.error__message-email-login');
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'El email es obligatorio';
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'El email debe ser válido';
        } else {
            emailError.textContent = '';
        }
    }

    function validatePassword() {
        const passwordError = document.querySelector('.error__message-contra-login');
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'La contraseña es obligatoria';
        } else {
            passwordError.textContent = '';
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        if (!validateEmail() || !validatePassword()) {
            return false;
        }

        // Si no hay errores, el formulario se enviará
        this.submit();
    });
});

//ESTO HACE QUE SE MUESTRE U OCULTE LA CONTRASEÑA 
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleIcon = document.getElementById("toggle-icon");
  
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.classList.remove("fa-eye");
      toggleIcon.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      toggleIcon.classList.remove("fa-eye-slash");
      toggleIcon.classList.add("fa-eye");
    }
  }
  