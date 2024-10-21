function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  var stringsNoVacios = [str1, str2, str3].filter(str => str.length > 0)

  var maxLength = Math.max(...stringsNoVacios.map(str => str.length));

  let resultado = '';
  for (let i = 0; i < maxLength; i++) {
    for (var str of stringsNoVacios) {
      if (i < str.length) {
        resultado += str[i];
      }
    }
  }

  return resultado;
}

module.exports = combine;