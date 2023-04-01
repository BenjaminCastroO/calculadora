var tresultado = document.getElementById('resultado');

/* codigo de botones numéricos */
var botonesNum = document.getElementsByClassName('btn btn-dark');

for (let i = 0; i < botonesNum.length; i++) {
  const element = botonesNum[i];
  element.addEventListener('click', function () { putNumber(element.innerText) });
}

function putNumber(valor) {
  tresultado.value += valor;
}

/* var botonesAccion = document.getElementsByClassName('btn btn-secondary');*/
var botonesOperacion = document.getElementsByClassName('btn btn-primary');

for (let i = 0; i < botonesOperacion.length; i++) {
  const element = botonesOperacion[i];
  element.addEventListener('click', function () { putOperador(element.innerText) });
}

function putOperador(op) {
  tresultado.value += op;
}


/* codigo del botón limpiar */
var bLimpiar = document.getElementById('bclean');
bLimpiar.addEventListener('click', function () { clean() });

function clean() {
  tresultado.value = '';
}

/* codigo del botón igual */
var bIgual = document.getElementById('bequal');
bIgual.addEventListener('click', function () { igual() });

function igual() {
  tresultado.value = eval(tresultado.value)
}