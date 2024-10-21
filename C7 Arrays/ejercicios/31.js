function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  var caracteres = texto.split('');

  caracteres.reverse();

  var textoInvertido = caracteres.join('');

  return textoInvertido;
}

module.exports = invertirTexto;
