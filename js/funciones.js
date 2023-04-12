var tresultado = document.getElementById('resultado');

/* codigo de botones numéricos */
var botonesNum = document.getElementsByClassName('pushy__btn pushy__btn--green');

for (let i = 0; i < botonesNum.length; i++) {
  const element = botonesNum[i];
  element.addEventListener('click', function () { putNumber(element.innerText) });
}

function putNumber(valor) {
  tresultado.value += valor;
}

/* var botonesAccion = document.getElementsByClassName('btn btn-secondary');*/
var botonesOperacion = document.getElementsByClassName('pushy__btn pushy__btn--red p-4');

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

/* codigo boton punto */
var bDot = document.getElementById('bdot');
bDot.addEventListener('click', function () { putDot() });

function putDot() {
  tresultado.value += '.';
}

/* codigo boton backspace (borra ultimo caracter) */
var bBack = document.getElementById('bback');
bBack.addEventListener('click', function () { backspace() });

function backspace() {
  tresultado.value = tresultado.value.slice(0, -1);
}

/* asignar variable ans*/
var ans = "";

/* codigo del botón igual */
var bIgual = document.getElementById('bequal');
bIgual.addEventListener('click', function () { igual()

  var resultadoAns = document.getElementById("resultado").value;
  
   
  if (resultadoAns !== "Error"){
  
   ans = resultadoAns;
   
  };

});// Obtener el valor del input con id "resultado"

/* Obtener Resultado Previo ANS*/
document.getElementById("btnans").addEventListener("click", function() {
  document.getElementById("resultado").value = ans;
});
function igual() {

  let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src", "../bequal-sound.wav")
      etiquetaAudio.play()

  //código de potencia
if (tresultado.value.includes("^"))
{
  tresultado.value = tresultado.value.replace("^","**")
}

//Código de radical
if (tresultado.value.includes("√"))
{
  var end1 = null
  var end2 = null
  var end3 = null
  var end4 = null
  var start = tresultado.value.indexOf("√")
  if (tresultado.value.indexOf("+",start)!=-1){var end1 = tresultado.value.indexOf("+",start)} else end1 = tresultado.value.length
  if (tresultado.value.indexOf("-",start)!=-1){var end2 = tresultado.value.indexOf("-",start)} else end2 = tresultado.value.length
  if (tresultado.value.indexOf("*",start)!=-1){var end3 = tresultado.value.indexOf("*",start)} else end3 = tresultado.value.length
  if (tresultado.value.indexOf("/",start)!=-1){var end4 = tresultado.value.indexOf("/",start)} else end4 = tresultado.value.length
  console.log(end1);
  console.log(end2);
  console.log(end3);
  console.log(end4);
  
  var end = Math.min(end1, end2, end3, end4)
  if (end==null || end==-1 || end==0)
  {
    end = tresultado.value.length;
  }
  console.log(end);
  tresultado.value = tresultado.value.replace("√","(")
  tresultado.value = tresultado.value.substring(0, end) + ")**(1/2)" + tresultado.value.substring(end);
}
console.log(tresultado.value);
tresultado.value = eval(tresultado.value);
}
const bequalBtn = document.querySelector("#bequal");
bequalBtn.addEventListener("click", () => {
  const resultadoInput = document.querySelector("#resultado");
  const operacion = resultadoInput.value;

  // Validar que la operación tenga un formato matemáticamente válido
  const operacionValida = /^[0-9+\-*/().\s]+$/.test(operacion);

  if (operacionValida) {
    try {
      // Evaluar la operación matemática
      const resultado = eval(operacion);
      resultadoInput.value = resultado;
    } catch (error) {
      resultadoInput.value = "Error";
    }
  } else {
    resultadoInput.value = "Error";
  }
});


