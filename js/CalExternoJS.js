 function cambiarColor(id_elemento, color){
            document.getElementById(id_elemento).style.color = color;

        }
        function agregarElemento(idelementopadre,html){
            document.getElementById(idelementopadre).innerHTML = html;

        }
        function construirH1(){
            return '<h1 id="id_calculadora">Calculadora</h1>';        }
        function eliminarElemento(idElemento){
            document.getElementById(idElemento).remove();
        }
        function ocultarElemento(idElemento){
            document.getElementById(idElemento).style.display='none';
        }
        function mostrarElemento(idElemento){
            document.getElementById(idElemento).style.display='block';
        }
    function evaluarOperacion(tipo){
    let num1 = parseFloat(document.getElementById('id_n1').value);
    let num2 = parseFloat(document.getElementById('id_n2').value);
    let resultado = 0;

    if (tipo === '+') {
        resultado = sumar(num1, num2);
    }
    if (tipo === '-') {
        resultado = restar(num1, num2);
    }
    if (tipo === '*') {
        resultado = multiplicar(num1, num2);
    }
    if (tipo === '/') {
        resultado = dividir(num1, num2);
    }

    document.getElementById('id_resultado').innerText = resultado;
}

        function sumar(num1, num2){
           return num1+num2;
        }
         function restar(num1, num2){
              return num1-num2;
        }
         function multiplicar(num1, num2){
              return num1*num2;
        }
         function dividir(num1, num2){
             return num1/num2; 
        }

    function fundamentosJS(){
        /*  var: tipo de variable obsoleta*/
        var nombre= "Yaniry";
        let apellido= "Florez";//variables cambiantes
        let  apellido2= 15;
        apellido2 ="Vargs";
        let arreglo =[1,2,3,4,5,6];
        let diasSemana =['lunes','martes','...'];
        const IVA = 12.8;
        console.log('fundamentos JS');
        console.log(IVA);
        console.log(arreglo);
       //arreglos
       const arreglosDiasSemana =['Lunes','Martes','Miercoles'] ;
       arreglosDiasSemana.push('jueves');
       console.log(arreglosDiasSemana);
       arreglosDiasSemana.unshift('Dias');
       console.log(arreglosDiasSemana[0]);
       console.log('Manejo de nulos, undefined y vacios');
       arreglosDiasSemana.push(null);
       arreglosDiasSemana.push('');
       console.log(arreglosDiasSemana[5]);
       console.log(arreglosDiasSemana[6]);
       console.log(arreglosDiasSemana[7]);
       
       const numerosPares = [2,4,6,8];
       const numerosImpares = [1,3,5,7,9];
       const numerosTotales =numerosImpares.concat(numerosPares);
       console.log(numerosTotales);
       
       // sentencias de control
       let edad = 18;
       if(edad >=18){
        console.log('Es mayor de edad');
       }else{
        console.log('Es menor de edad');
        }

        let dia = 'Lunes';
        switch(dia){
            case'Lunes':
            console.log('es lunes');
            break;
            case'Martes':
            console.log('es martes');
            break;
            default:
                console.log('No es ninguno de esos dias');

        }
       
        for(let i=0; i<=5; i++){
            console.log(i);
        }

        const frutas =['Manzana','Sandia','Papaya','Naranja'];
        for(let fruta of frutas){
            console.log(fruta);
        }

        // Manejo de objetos
        const profesor = {
            nombre :'Fidel',
            apellido: 'Vargas' ,
            Edad: '38',
            ecuatoriano: true,
            genero:'M',
            ciudad :'Quito'

        }
        console.log(profesor);
        console.log(profesor.nombre);
        profesor.apellido='Villalba';
        console.log(profesor);

        if(profesor.ciudad === 'Quito'){
            console.log('Es Quiteño');
        }
        if(profesor.edad !== 35){
            console.log('direfente de 38');

        }else{
            console.log('Es 38');

        }

        for(let clave in profesor){
            console.log(clave);
            console.log(profesor[clave]);

        }
        
    }