function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var mesesBuscados = ["Enero", "Marzo", "Noviembre"];
  var mesesEncontrados = [];

  for(let i = 0; i < array.length; i++){
    
    if(mesesBuscados.includes(array[i])){
      mesesEncontrados.push(array[i]);
    }
  }

  if (mesesEncontrados.length !== mesesBuscados.length) return "No se encontraron los meses pedidos"

  return mesesEncontrados;
}

module.exports = mesesDelAño;
