/* Manejo de data */


// Funcion para seleccion un indicador de un pais
const arrayindicador = (dataOriginal) => {
  const ListaNueva = [];
  let indicator = dataOriginal["indicators"];
  for (let i = 0; i < indicator.length; i++) {
    ListaNueva.push(indicator[i]['indicatorName']);
  }
  return ListaNueva;
}

window.worldbank = {
  arrayindicador: arrayindicador,
}