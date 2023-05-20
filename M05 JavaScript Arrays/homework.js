/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
      return array.shift ();
   // return array [0]
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
       return array.pop ();
   //return array[array.length -1]
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
      return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
      return array.map(elemento => elemento+1);  
   
   // var nuevoArreglo = [];
   // for (let i= 0; i < array.length; i++) {
   //    array [i]++;
   //       o
   //    nuevoArray.push(array[i]+1);
   //                   (++array[i])
   //}
   //return nuevoArreglo
   //
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push (elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift (elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join (" "); //(",") te separa el string mediante comas
   
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
  //for (let =0 ; array.length; i++){
   // if (array[i]===elemento) return true {
  //} retur false;
  
   return array.includes (elemento);
   //if (array.includes(elemento)) return true;
   //retutn false;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let resultado = 0;
   arrayOfNums.forEach(element => {
      resultado += element;   
   });
      return resultado;
   //var resultado = arrayOfNums.reduce(
      //(acumulador, elemento) => acumulador + elemento, 0 )
   // return resultado;              
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let cantidad = resultadosTest.length;
   let resultado = resultadosTest.reduce (
      (acumulador, element) => acumulador + element, 0
    );
    return resultado/cantidad;
      // let cantidad = 0;
      // let resultado = 0;
       // for (let i= 0; i < resultadoTest.length; i++) {
            //resultado += resultadoTest [i];
            //cantidad += 1;
            //return resultado/cantidad;
      //}
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   let numeroMasGrande = arrayOfNums [0];
   arrayOfNums.forEach(num  => {
      if (num>numeroMasGrande)numeroMasGrande = num;
   });
      return numeroMasGrande;
  
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   
   if (arguments.length === 0) {
      return 0;
   }

   else if (arguments.length === 1) {
      return arguments [0]; 
   }

   else { 
   var resultado = 1;

   for (var i = 0; i < arguments.length; i++) {
      resultado = resultado * arguments [i];
      //resultado *= arguments [i];
   }   
      return resultado; 
   }
}
//return 

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
  
   var resultado = 0;

   for (var i = 0; i < array.length; i++) {
      if (array [i] > 18) {
         resultado ++;
      }
    }   
      return resultado; 
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if ( numeroDeDia === 1 || numeroDeDia === 7) {
      return "Es fin de semana";
   }
   else {
      return "Es dia laboral";
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

   const numStr = num.toString ()
   
   if (numStr [0] === "9" ) {
      return true;
   }else{
      return false;
   }

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

   for (var i = 1; i < array.length; i++) {
    
      if (array [0] !== array [i] ) {
      return false;
      }

    //if ( array [0] === array [i]) array [0] = array [i]
    // else return false;
    
    }   
      return true;    
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var nuevoArreglo = []; 

   for (let i = 0; i < array.length; i++) {
      if (array[i]==='Enero' || array[i]==='Marzo' || array[i]==='Noviembre') { 
      nuevoArreglo.push(array[i]);
      // if (array [i]==='Enero') nuevoArreglo.push('Enero')
      // if (array [i]==='Marzo') nuevoArreglo.push('Marzo')
      // if (array [i]==='Noviembre') nuevoArreglo.push('Noviembre')
      }
   }
      if (nuevoArreglo.length === 3) {
      return nuevoArreglo;
   }   
      else {
      return ("No se encontraron los meses pedidos");
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

   var tabla = [];

   for (let i = 0; i <= 10; i++) {
      tabla.push (i*6)
   }
   return tabla;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   
   var resultado = [];

   for (let num of array) {
      if (num > 100) resultado.push (num)
   }   
       return resultado;
         
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:

   const nuevoArreglo = [];
   let usarBreak = false;

   for (let i = 0; i < 10; i++) {
      
      if (num===i) {
         usarBreak = true
         break; 
         //return "Se interrumpió la ejecución";
      }
      nuevoArreglo.push(num +=2);
    }    
      if (usarBreak) 
         return "Se interrumpió la ejecución";        
        
       return nuevoArreglo;       

}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
    
   const nuevoArreglo = [];
   

   for (let i = 0; i < 10; i++) {
      if (i===5) continue;
      nuevoArreglo.push(num +=2);
    }         
     return nuevoArreglo;       
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
