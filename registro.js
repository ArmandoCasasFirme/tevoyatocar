// Script básico para el formulario de registro

document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const passwordStrength = document.getElementById('passwordStrength');

    passwordInput.addEventListener('input', function() {
        const password = this.value;
        let strength = 0;

        // Criterios básicos de fuerza
        if (password.length >= 8) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        // Actualizar barra de fuerza
        const strengthBar = passwordStrength.querySelector('.strength-bar') || document.createElement('div');
        strengthBar.className = 'strength-bar';
        passwordStrength.appendChild(strengthBar);

        let color = '#dc3545'; // Rojo para débil
        let width = '20%';

        if (strength >= 2) {
            color = '#ffc107'; // Amarillo para medio
            width = '60%';
        }
        if (strength >= 4) {
            color = '#28a745'; // Verde para fuerte
            width = '100%';
        }

        strengthBar.style.width = width;
        strengthBar.style.backgroundColor = color;
    });
});