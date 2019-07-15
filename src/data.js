// array que contiene los nombres de los paises
const tituloPorPais = (data, pais) => {
  let nombrePais;
  nombrePais = data[pais].indicators[0]['countryName'];
  return nombrePais;
 }
//nuevo array que contiene los indicadores(muestra los nombres) de los sectores seleccionados
const indicadoresPorSector = (data, pais, sector) => {
  const listaNuevaSector = [];
  let indicadores = data[pais].indicators;
  for (let n = 0; n < indicadores.length; n++) {
    if ((indicadores[n]['indicatorCode']).substring(0, 2) == sector) {
      listaNuevaSector.push(indicadores[n]['countryName'] + " - " + indicadores[n]['indicatorName']);
      //listaNuevaSector.push(indicadores[n]['indicatorName']);
    }
  }
  return listaNuevaSector;
}
//funcion que muestra los datos del indicador/sector seleccionado
const datosPaisSector = (data, pais, sector) => {
  const listaNuevaSector = [];
  let indicadores = data[pais].indicators;
     for(let n = 0; n < indicadores.length; n ++){
         if((indicadores[n]['indicatorCode']).substring(0,2) === sector){
         listaNuevaSector.push(indicadores[n]['data']);
      }
    }
    return listaNuevaSector;
  }

//funcion que muestra el nombre del indicador seleccionado
const tituloDeIndicadorporIndice = (data, pais, sector, indice) => {
  const listaNuevaSector = [];
  let indicadores = data[pais].indicators;
  for (let n = 0; n < indicadores.length; n++) {
    if ((indicadores[n]['indicatorCode']).substring(0, 2) == sector) {
      listaNuevaSector.push(indicadores[n]['indicatorName']);
    }
  }
  let valor = listaNuevaSector[indice];
  return valor;
 }

// //funcion para ordenar porcentajes
// const formulaOrdenar =(objectData)=>{
//   const arrayIndicador = Object.entries(objectData);
//   return arrayIndicador.sort((a,b)=>{return a[1] - b[1];})
// }

//funcion par ordenar datos del inidicador selccionado en ascendente y descendente
const formulaOrdenar = (objectData) => {
  const arrayIndicador=Object.entries(objectData);
  return arrayIndicador.sort((a,b)=>{return a[1]-b[1];})
};
//funcion para obtener el promedio de los porcentajes
const formulaPromedio = (arrayPorcentaje) => {
  let promedio1 = arrayPorcentaje.reduce((a, b) => {
    return a + b;
  })
  let cantidadPorcentaje = arrayPorcentaje.length;
  return promedio1 / cantidadPorcentaje;
}
 // debugger
// array que contiene los porcentajes de un indicador por el rango de años seleccionados
const selectRangoYear = (numeroInicial, numeroFinal, objYear) => {
  let rango = [];
  const arrYears = Object.keys(objYear);
  const arrValue =Object.values(objYear);
  for (let i = 0; i <= arrYears.length; i++) {
      if(arrYears[i] >= numeroInicial && arrYears[i] <= numeroFinal){
          rango.push([arrYears[i],arrValue[i]]);
      } 
  }
  return rango;
}
window.worldbank = {
  selectRangoYear:selectRangoYear,
  datosPaisSector:datosPaisSector,
  tituloPorPais: tituloPorPais,
  tituloDeIndicadorporIndice:tituloDeIndicadorporIndice,
  indicadoresPorSector:indicadoresPorSector,
  formulaOrdenar:formulaOrdenar,
  formulaPromedio:formulaPromedio,
}
