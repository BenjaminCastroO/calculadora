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

if (tresultado.value.includes("^"))
{
  tresultado.value = tresultado.value.replace("^","**")
}
if (tresultado.value.includes("√"))
{
  var start = tresultado.value.indexOf("√")
  var end1 = tresultado.value.indexOf("+",start)
  var end2 = tresultado.value.indexOf("-",start)
  var end3 = tresultado.value.indexOf("*",start)
  var end4 = tresultado.value.indexOf("/",start)
  var end = Math.min(end1, end2, end3, end4)
  if (end==-1)
  {
    end = tresultado.value.length;
  }
  tresultado.value = tresultado.value.replace("√","(")
  tresultado.value = tresultado.value.substring(0, end) + ")**(1/2)" + tresultado.value.substring(end);
}
  tresultado.value = eval(tresultado.value)
}