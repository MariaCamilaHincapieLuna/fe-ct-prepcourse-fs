function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var visto = {};

  for (let i = 0; i < numeros.length; i++) {
    var numero = numeros[i];
    if (visto[numero]) {
      return numero;
    } else {
      visto[numero] = true;
    }
  }

  return undefined;
}


module.exports = encontrarElementoRepetido;