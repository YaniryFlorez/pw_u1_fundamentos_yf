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

         const e1 = {
            nombre :'Fidel',
            apellido: 'Vargas' ,
            Edad: '38',
            ecuatoriano: true,
            genero:'M',
            ciudad :'Quito'

        }
         const e2 = {
            nombre :'Fidel',
            apellido: 'Vargas' ,
            Edad: '38',
            ecuatoriano: true,
            genero:'M',
            ciudad :'Quito'

        }
        /*
       const arregloEstudiantes = [e1,e2];
       console.log(arregloEstudiantes);

       const arregloEstu =[e1,e2,{
         nombre :'Fidel',
            apellido: 'Vargas' ,
            Edad: '38',
            ecuatoriano: true,
            genero:'M',
            ciudad :'Quito'

       }];
       console.log( arregloEstu[0]);
       console.log( arregloEstu[0]);
*/

       // desestructuración
        //arreglos 
        const ar1 =[1,2,3,4,5,6,7];
        const [a,b,c,d,e] = ar1;
        console.log(a);
        console.log(d);

        const [primero, , , , ultimo] = ar1;
        console.log(primero);
        console.log(ultimo);

        const [pos1,pos2] = [1,2,3,4,5,6,7];
        imprime(ar1);

        //objetos
        const e3 = {
            nombre1 :'Fidel',
            apellido1: 'Vargas' ,
            Edad1: '38',
            ecuatoriano1: true,
            genero1:'M',
            ciudad1 :'Quito'

        }

      const {nombre1, ciudad1} = e3;
      console.log('objeto');
      console.log(nombre1);
      console.log(ciudad1);

       const {nombre1:nom, ciudad1:ciu} = {
            nombre1 :'Mario',
            apellido1: 'Florez' ,
            Edad1: '38',
            ecuatoriano1: true,
            genero1:'M',
            ciudad1 :'Loja'

        }
        console.log('redefinir nombre:')
        console.log(nom);
        console.log(ciu);

         const estu4 = {
            nombre :'Fidel',
            apellido: 'Vargas' ,
            Edad: '38',
            ecuatoriano: true,
            genero:'M',
            ciudad :'Quito',
            direccion :{
                  calle: 'Av. America',
                  barrio: 'la gasca',
                  numeracion:'123'
            }
        }
        console.log(estu4.direccion);
        console.log(estu4.direccion.barrio);

        const {edad:ed, direccion}= estu4;
        console.log(ed);
        console.log(direccion);
        const {calle} = direccion;
        console.log(calle);

        //desestructuracion en un solo paso 
        console.log('en un solo paso');
        const {direccion:{barrio,calle:c1, numeracion}}=estu4;
        console.log(barrio);
        console.log(c1);
        console.log(numeracion);

        
    }

    function imprime(a,b,c){
        console.log('imprime arreglo 1:')
        console.log(a);
        console.log(b);
        console.log(c);
    }