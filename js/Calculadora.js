let num1=0;
let num2=0;

function mostrarDisplay(valor) {
  const display = document.getElementById('display');
  display.innerText += valor;
}

function borrar() {
  document.getElementById('display').innerText = '';
}

function retroceder() {
  const display = document.getElementById('display');
  display.innerText = display.innerText.slice(0, -1);
}

function Calcularoperacion() {
  const display = document.getElementById('display');
  try {
    const resultado = eval(display.innerText);
    display.innerText = resultado;
  } catch (e) {
    display.innerText = 'Error';
  }
}