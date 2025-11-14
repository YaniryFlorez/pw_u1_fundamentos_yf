function guardar() {
  return validarCampos();
}

function validarCampos() {
  limpiarMensajes();

  let nombre = document.getElementById('id_nombre').value.trim();
  if (nombre === '') {
    mostrarMensaje('Nombre necesario');
    mostrarAsterisco('id_error_nombre');
    return false;
  }

  let apellido = document.getElementById('id_apellido').value.trim();
  if (apellido === '') {
    mostrarMensaje('Apellido necesario');
    mostrarAsterisco('id_error_apellido');
    return false;
  }

  let fecha = document.getElementById('id_fecha').value.trim();
  if (fecha === '') {
    mostrarMensaje('Fecha necesaria');
    mostrarAsterisco('id_error_fecha');
    return false;
  }

 let email = document.getElementById('id_email').value.trim();

if (email === '') {
  console.log('Campo de email vacío');
  mostrarMensaje('Email necesario');
  mostrarAsterisco('id_error_email');
  return;
}

if (!validarEmail(email)) {
  console.log('Formato de email inválido');
  mostrarMensaje('Formato de email inválido');
  mostrarAsterisco('id_error_email');
  return;
}
 
  let password = document.getElementById('id_password').value.trim();
  if (password === '') {
    mostrarMensaje('Contraseña necesaria');
    mostrarAsterisco('id_error_password');
    return false;
  }

  return true;
}

function mostrarMensaje(msj) {
  let mensaje = document.getElementById('id_msg_error');
  mensaje.innerText = msj;
  mensaje.style.display = "block";
}

function mostrarAsterisco(idElemento) {
  const elemento = document.getElementById(idElemento);
  elemento.innerText = '*';
  elemento.style.display = "inline";
}

function limpiarMensajes() {
  let mensaje = document.getElementById('id_msg_error');
  mensaje.innerText = "";
  mensaje.style.display = "none";

  const erroresAsteriscos = document.querySelectorAll('.error_asterisco');
  erroresAsteriscos.forEach(e => {
    e.innerText = '*';
    e.style.display = "none";
  });
}

function validarEmail(valor) {
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return patron.test(valor);
}