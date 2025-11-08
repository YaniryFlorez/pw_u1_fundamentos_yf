let num1=0;
let num2=0;
let SegundoDigito ="0";



function mostrarDisplay(valor){
    let elemento = document.getElementById('display');
    elemento.innerText = elemento.innerText+ valor;

}

function sumar(){
     if(esSegundoDigito === "0"){
        num1 = parseFloat(document.getElementById("id_display").innerText);
        SegundoDigito = "1";     

    }

}
function restar(){
    
}
function multiplicar(){
    
}
function dividir(){
    
}
function porcentaje(){
    
}
function guardar(){
  validar();
  
} 
