// array que contiene los nombres de los paises
const tituloPorPais=(data,pais)=>{
  const titleNew=[];
  let titleCountry = data[pais].indicators;
  for(let l=0;l<titleCountry.length; l++){
    titleNew.push(titleCountry[l]['countryName']);
  }
  return titleNew;
}
//nuevo array que contiene los indicadores(muestra los nombres) de los sectores seleccionados
const indicadoresPorSector =(data,pais,sector)=>{
  const listaNuevaSector = [];
  let indicadores = data[pais].indicators;
     for(let n = 0; n < indicadores.length; n ++){
         if((indicadores[n]['indicatorCode']).substring(0,2)==sector){
         listaNuevaSector.push(indicadores[n]['countryName']+" - "+ indicadores[n]['indicatorName']);
      }
    }
    return listaNuevaSector;
  }
//funcion que muestra los datos del indicador/sector seleccionado
const datosPaisSector=(data,pais,sector)=>{
  const listaNuevaSector = [];
  let indicadores = data[pais].indicators;
     for(let n = 0; n < indicadores.length; n ++){
         if((indicadores[n]['indicatorCode']).substring(0,2)==sector){
         listaNuevaSector.push(indicadores[n]['data']);
      }
    }
    return listaNuevaSector;
  }
//funcion que muestra el nombre del indicador seleccionado
const tituloPorIndicador=(data,pais,sector)=>{
    const titleNew=[];
    let titleCountry = data[pais].indicators;
    for(let l=0;l<titleCountry.length; l++){
        if((titleCountry[l]['indicatorCode']).substring(0,2)==sector){
          titleNew.push(titleCountry[l]['indicatorName']);
      }
    }
    return titleNew;
  }
//funcion par ordenar datos del inidicador selccionado en ascendente y descendente
const ordenarDatoIndicador= (objectData, orden)=>{
  // const arrayIndicador = object.entries(objectData);
   let arrayDatosIndicador = [];
   for(let i in objectData)
   arrayDatosIndicador.push([i, objectData[i]]);
   if (orden ==='ascendente'){
     arrayDatosIndicador.ordenarDatoIndicador((a,b)=>{
       return a[1]- b[1];
     });
   }else if(orden ==='descendente'){
    arrayDatosIndicador.ordenarDatoIndicador((a,b)=>{
      return b[1]- a[1];
    });
   }
   return arrayDatosIndicador;
}
//funcion para obtener el promedio de los porcentajes
const formulaPromedio =(arrayPorcentaje)=>{
  let promedio1 = arrayPorcentaje.reduce((a,b)=>{
    return a+b;
  })
  let cantidadPorcentaje =  arrayPorcentaje.length;
  return promedio1/cantidadPorcentaje;
}
 // debugger
// array que contiene los porcentajes de un indicador por el rango de años seleccionados
// const selectRangoYear = (numeroInicial, numeroFinal, objYear) => {
//   let rango = [];
//   const arrYears = Object.keys(objYear);
//   const arrValue =Object.values(objYear);
//   for (let i = 0; i <= arrYears.length; i++) {
//       if(arrYears[i] >= numeroInicial && arrYears[i] <= numeroFinal){
//           rango.push([arrYears[i],arrValue[i]]);
//       } 
//   }
//   return rango;
// }
//array para guardar los datos de indicador seleccionado por sector

window.worldbank = {
  formulaPromedio:formulaPromedio,
  datosPaisSector:datosPaisSector,
  tituloPorPais: tituloPorPais,
  tituloPorIndicador:tituloPorIndicador,
  indicadoresPorSector:indicadoresPorSector,
  ordenarDatoIndicador:ordenarDatoIndicador,
}
