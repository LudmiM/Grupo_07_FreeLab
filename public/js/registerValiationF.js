document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("userPassword");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const userTypeInput = document.getElementById("userType");
  const submitButton = document.getElementById("submitButton");

  emailInput.addEventListener("input", function () {
    validateEmail();
  });

  passwordInput.addEventListener("input", function () {
    validatePassword();
    validateConfirmPassword();
  });

  confirmPasswordInput.addEventListener("input", function () {
    validateConfirmPassword();
  });

  userTypeInput.addEventListener("input", function () {
    validateUserType();
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateEmail() && validatePassword() && validateConfirmPassword() && validateUserType()) {
      form.submit();
    }
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateEmail() {
    const emailError = document.getElementById("emailError");
    if (!emailInput.value.trim()) {
      emailError.textContent = "El email es obligatorio";
      return false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      emailError.textContent = "El email no es válido";
      return false;
    } else {
      emailError.textContent = "";
      return true;
    }
  }

  function validatePassword() {
    const passwordError = document.getElementById("passwordError");
    if (!passwordInput.value.trim()) {
      passwordError.textContent = "La contraseña es obligatoria";
      return false;
    } else if (passwordInput.value.length < 8) {
      passwordError.textContent = "La contraseña debe tener al menos 8 caracteres";
      return false;
    } else if (!/[a-z]/.test(passwordInput.value) || !/[A-Z]/.test(passwordInput.value) || !/\d/.test(passwordInput.value) || !/[@$!%*?&]/.test(passwordInput.value)) {
      passwordError.textContent = "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial";
      return false;
    } else {
      passwordError.textContent = "";
      return true;
    }
  }

  function validateConfirmPassword() {
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    if (!confirmPasswordInput.value.trim()) {
      confirmPasswordError.textContent = "La confirmación de contraseña es obligatoria";
      return false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordError.textContent = "Las contraseñas no coinciden";
      return false;
    } else {
      confirmPasswordError.textContent = "";
      return true;
    }
  }

  function validateUserType() {
    const userTypeError = document.getElementById("userTypeError");
    if (!userTypeInput.value.trim()) {
      userTypeError.textContent = "Debe seleccionar un tipo de registro";
      return false;
    } else {
      userTypeError.textContent = "";
      return true;
    }
  }
});



function togglePassword(inputId, iconId) {
    var input = document.getElementById(inputId);
    var icon = document.getElementById(iconId);
    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      input.type = "password";
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  }