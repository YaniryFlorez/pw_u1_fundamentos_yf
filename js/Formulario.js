function guardar(){
validarCampos();
}

function validarCampos(){
 let nombre= document.getElementById('id_nombre').value;

 if(nombre === ''){
    console.log('Campo de nombre vacio');
    return;
 }

 let apellido= document.getElementById('id_apellido').value;

 if(apellido === ''){
    console.log('Campo de apellido vacio');
    return;
 }

 let fecha= document.getElementById('id_fecha').value;

 if(fecha === ''){
    console.log('Campo de fecha vacio');
    return;
 }

 let email= document.getElementById('id_email').value;

 if(email === ''){
    console.log('Campo de email vacio');
    return;
 }

 let password= document.getElementById('id_password').value;

 if(password === ''){
    console.log('Campo de password vacio');
    return;
 }

}