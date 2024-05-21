document.addEventListener('DOMContentLoaded', function() {
    const nom = document.getElementById('nombre');
    const surname = document.getElementById('apellido');
    const gender = document.getElementById('genero');
    const mail = document.getElementById('mail');
    const contraseña = document.getElementById('contraseña');
    const contraseñarep = document.getElementById('contraseñarep');
    const form = document.getElementById('form');
    const parrafo = document.getElementById('warnings');

    form.addEventListener('submit', e => {
        e.preventDefault();
        let warnings = '';
        let entrar = false;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        parrafo.innerHTML = '';

        if (nom.value.length < 4) {
            warnings += 'El nombre debe tener al menos 4 caracteres.<br>';
            entrar = true;
        }

        if (surname.value.length < 4) {
            warnings += 'El apellido debe tener al menos 4 caracteres.<br>';
            entrar = true;
        }

        if (gender.value === '') {
            warnings += 'Debe seleccionar su género.<br>';
            entrar = true;
        }

        if (contraseña.value.length < 6) {
            warnings += 'La contraseña debe tener al menos 6 caracteres.<br>';
            entrar = true;
        }

        if (contraseña.value !== contraseñarep.value) {
            warnings += 'Las contraseñas no coinciden.<br>';
            entrar = true;
        }

        if(!regexEmail.test(mail.value))
            {
                warnings += 'El e-mail no es válido.<br>';
                entrar = true;
            }

        if (entrar){
            parrafo.innerHTML = warnings;
        }else{
            parrafo.innerHTML = 'Enviado';
        }
        
    });
});

