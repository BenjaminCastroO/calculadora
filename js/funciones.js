$(document).ready(function () {
  var tresultado = document.getElementById('resultado');

  function addClickSound() {
    let etiquetaAudio = $("<audio></audio>");
    etiquetaAudio.attr("src", "../click.ogg");
    etiquetaAudio[0].play();
  }  
  function addEqualSound() {
    let etiquetaAudio = $("<audio></audio>");
    etiquetaAudio.attr("src", "../bequal-sound.wav");
    etiquetaAudio[0].play();
  }
  /* codigo de botones numéricos */
var botonesNum = document.getElementsByClassName('pushy__btn pushy__btn--green');

  for (let i = 0; i < botonesNum.length; i++) {
    const element = botonesNum[i];
    element.addEventListener("click", function () {
      addClickSound();
      putNumber(element.innerText);
    });
  }

  function putNumber(valor) {
    tresultado.value += valor;
  }

  /* var botonesAccion = document.getElementsByClassName('btn btn-secondary');*/
var botonesOperacion = document.getElementsByClassName('pushy__btn pushy__btn--red p-4');

  for (let i = 0; i < botonesOperacion.length; i++) {
    const element = botonesOperacion[i];
    element.addEventListener("click", function () {
      addClickSound();
      putOperador(element.innerText);
    });
  }

  function putOperador(op) {
    tresultado.value += op;
  }

  /* codigo del botón limpiar */
  $("#bclean").on("click", function () {
   addClickSound();
   clean();
  });

  function clean() {
    tresultado.value = "";
  }
 
  /* codigo boton punto */
  $("#bdot").on("click", function () {
    addClickSound();
    putDot();
  });
  

  function putDot() {
    tresultado.value += ".";
  }

  /* codigo boton backspace (borra ultimo caracter) */
  $("#bback").on("click", function () {
    addClickSound();
    backspace();
  });

  function backspace() {
    tresultado.value = tresultado.value.slice(0, -1);
  }

  /* codigo del botón porcentaje */
  $("#bpercent").on("click", function () {
    addClickSound();
    putPercent();
  });

  function putPercent() {
    let value = tresultado.value;
    if (value.length > 0) {
      let lastChar = value.charAt(value.length - 1);
      if (lastChar === "%") {
        return;
      } else {
        tresultado.value = value + "%";
      }
    }
  }

/* asignar variable ans*/
var ans = "";

  /* codigo del botón igual */
  $("#bequal").on("click", function () {
    addEqualSound();
    igual();
 

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

    //código de potencia
if (tresultado.value.includes("^"))
{
  tresultado.value = tresultado.value.replace("^","**")
}
    //Código de radical
if (tresultado.value.includes("√")) {
  var numRaiz = contar(tresultado.value , "√");
  
  for (let i = 0; i < numRaiz; i++) {
    //console.log(tresultado.value);
  var start = tresultado.value.indexOf("√");
  cierreParentesis(tresultado.value.substring(start));

  //si raíz no usa paréntesis.
  if (cierre == -2) {
    //console.log("la raíz no usa paréntesis");
    var end1 = null;
    var end2 = null;
    var end3 = null;
    var end4 = null;
    var end5 = null;
    var start = tresultado.value.indexOf("√");
    if (tresultado.value.indexOf("+", start) != -1) {
      var end1 = tresultado.value.indexOf("+", start);
    } else end1 = tresultado.value.length;
    if (tresultado.value.indexOf("-", start) != -1) {
      var end2 = tresultado.value.indexOf("-", start);
    } else end2 = tresultado.value.length;
    if (tresultado.value.indexOf("*", start) != -1) {
      var end3 = tresultado.value.indexOf("*", start);
    } else end3 = tresultado.value.length;
    if (tresultado.value.indexOf("/", start) != -1) {
      var end4 = tresultado.value.indexOf("/", start);
    } else end4 = tresultado.value.length;
    if (tresultado.value.indexOf(")", start) != -1) {
      var end5 = tresultado.value.indexOf("/", start);
    } else end5 = tresultado.value.length;

    cierre = Math.min(end1, end2, end3, end4, end5);
    //console.log("aca cierre es " + cierre);
    if (cierre == null || cierre == -1 || cierre == 0) {
      cierre = tresultado.value.length;
    }
   
    tresultado.value = tresultado.value.replace("√", "((");
  tresultado.value =
    tresultado.value.substring(0, cierre+1) +
    ")**(1/2))" +
    tresultado.value.substring(cierre + 1);
  }

  //si raíz no cierra paréntesis inicial.
  else if (cierre == -1) {
   // console.log("la raíz no cierra paréntesis inicial");
    tresultado.value = tresultado.value + ")";
    cierre = tresultado.value.length;
    tresultado.value = tresultado.value.replace("√", "((");
  tresultado.value =
    tresultado.value.substring(0, cierre+1) +
    ")**(1/2))" +
    tresultado.value.substring(cierre + 1);
  }
  else { 
    tresultado.value = tresultado.value.replace("√", "((");
  tresultado.value =
    tresultado.value.substring(0, cierre + start+1) +
    ")**(1/2))" +
    tresultado.value.substring(cierre + start + 1);}
 
}
}
console.log(tresultado.value);

    // calcular porcentajes
  const regex = /(\d+(?:\.\d+)?)\s*([-+*/])\s*(\d+(?:\.\d+)?%)/g;
  let operacion = tresultado.value.replace(regex, (match, p1, p2, p3) => {
    const porcentaje = parseFloat(p3.slice(0, -1)) / 100;
    let valorPorcentaje;
    if (p2 === "*") {
      valorPorcentaje = porcentaje;
    } else {
      valorPorcentaje = parseFloat(p1) * porcentaje;
    }
    return `${p1} ${p2} ${valorPorcentaje}`;
  });

  try {
    tresultado.value = eval(operacion);
  } catch (error) {
    tresultado.value = "Error";
  }
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
});


//necesario para raíces y paréntesis anidados
function cierreParentesis(expresion) {
  var parenOk = false;
  let parenArray = [];

  for (let i = 0; i < expresion.length; i++) {
    const char = expresion[i];
   // console.log(parenArray.length);
    if (char === "(") {
      parenArray.push(i);
    } else if (char === ")") {
      const ultimoAbreParen = parenArray[parenArray.length - 1];

      if (ultimoAbreParen !== undefined) {
        parenArray.pop();

        if (ultimoAbreParen === expresion.indexOf("(")) {
          cierre = i;
          parenOk = true;
          break;
        }
      }
    } else {
      if (expresion.charAt(1)!=="(")
      {cierre = -1;
     // console.log("sdf");
      break;
    }
    cierre = -1;
    }
  }
  if (parenArray == 0 && parenOk == false) {
    cierre = -2;
  }
}

function contar(texto, caracter) {
  var cont = 0;
  for (var i = 0; i < texto.length; i++) {
    if (texto[i] == caracter) {
      cont = cont + 1;
      //console.log(cont);
    }
  }
  return cont;
}

var cierre = null;
