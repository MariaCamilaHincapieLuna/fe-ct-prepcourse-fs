function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var tablaDelSeis = []

  for (let i = 0; i <= 10; i++){
    tablaDelSeis.push(6 * i);
  }

  return tablaDelSeis;
}

module.exports = tablaDelSeis;
