function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener('DOMContentLoaded', function (){
    const regBtn = document.getElementById('regBtn');
  
    regBtn.addEventListener('click', function (event) {
      event.preventDefault();
  
      const nombre = document.getElementById('nombre').value.trim();
      const apellido = document.getElementById('apellido').value.trim();
      const email = document.getElementById('email').value.trim();
      const terminos = document.getElementById('terminos').checked;
      const pwd1 = document.getElementById("password1").value
      const pwd2 = document.getElementById("password2").value
 

      const alertSuccess = document.getElementById('alert-success');
      const alertDanger = document.getElementById('alert-danger');
  
      
      alertSuccess.classList.remove('show'); 
      alertDanger.classList.remove('show');
  
      let valid = true;
  //campos
      
      if (!nombre || !apellido || !email || !pwd1 || !pwd2) {
        valid = false;
        alertDanger.querySelector('p').textContent = 'Ningún campo puede estar vacío.';
        alertDanger.classList.add('show');
        return;
      }
  
      //caracteres
      if (pwd1.length < 6) {
        valid = false;
        alertDanger.querySelector('p').textContent = 'La contraseña debe tener al menos 6 caracteres.';
        alertDanger.classList.add('show');
        return;
      }

   //contraseñas
      if (pwd1 !== pwd2) {
        valid = false;
        alertDanger.querySelector('p').textContent = 'Las contraseñas no coinciden.';
        alertDanger.classList.add('show');
        return;
      }
      
      // terminos y condiciones
      if (!terminos) {
        valid = false;
        alertDanger.querySelector('p').textContent = 'Debe aceptar los términos y condiciones.';
        alertDanger.classList.add('show');
        return;
      }

      // Si esta todo ok
      if (valid) {
        showAlertSuccess();
      } else {
        showAlertError();
      }
    });
  });
  