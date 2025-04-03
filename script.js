document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Obtener valores
    let name = document.getElementById("name")?.value.trim() || "";
    let email = document.getElementById("email")?.value.trim() || "";
    let password = document.getElementById("password")?.value.trim() || "";
    
    // Función auxiliar para mostrar mensajes de manera segura
    function showMessage(id, message) {
        const element = document.getElementById(id);
        if (element) element.innerHTML = message;
    }
    
    // Limpiar mensajes
    showMessage("errorName", "");
    showMessage("errorEmail", "");
    showMessage("errorPassword", "");
    showMessage("validPassword", "");
    showMessage("finalMessage", "");
    
    // Validar
    let isValid = true;
    
    if (!name) {
        showMessage("errorName", "El nombre es requerido.");
        isValid = false;
    }
    
    if (!email) {
        showMessage("errorEmail", "El correo es requerido.");
        isValid = false;
    }
    
    if (!password) {
        showMessage("errorPassword", "La contraseña es requerida.");
        isValid = false;
    } else if (password.length < 6) {
        showMessage("errorPassword", "Debe tener al menos 6 caracteres.");
        isValid = false;
    }
    
    if (isValid) {
        showMessage("finalMessage", "Registro exitoso!");
    } else {
        // Solo mostrar mensaje de validación de contraseña si hay algún error pero la contraseña es válida
        if (password.length >= 6) {
            showMessage("validPassword", "La contraseña cumple con la longitud mínima");
        }
    }
});