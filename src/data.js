/* Manejo de data */
 const arrayCountry =(pais)=>{
   let country = [];
   country = object.keys(pais);
   return country;
 }
 const tituloPais =(tituloCountry)=>{
   let NuevoTitulo=[];
   NuevoTitulo=object.keys(tituloCountry);
   return NuevoTitulo;
 }
// const sectorIndicador = (sectorVariado)=>{
//   let sector = [];
//   sector=object.keys(sectorVariado);
//   return sector;
// }

// Funcion para seleccion un indicador de un pais
// const indicadoresPorPais = (data, pais) => {
//   const ListaNueva = [];
//   let indicator = data[pais].indicators;
//   for (let i = 0; i < indicator.length; i++) {
//     ListaNueva.push(indicator[i]['countryName'] + ' - ' + indicator[i]['indicatorName']);
//   }
//   return ListaNueva;
// }

// Funcion para s
const tituloPorPais=(data,pais)=>{
  const titleNew=[];
  let titleCountry = data[pais].indicators;
  for(let l=0;l<titleCountry.length; l++){
    titleNew.push(titleCountry[l]['countryName']);
  }
  return titleNew;
}
//funcion para selecionar un sector
const indicadoresPorSector =(data,pais,sector)=>{
  const listaNuevaSector = [];
  let indicadores = data[pais].indicators;
     for(let n = 0; n < indicadores.length; n ++){
         if((indicadores[n]['indicatorCode']).substring(0,2)==sector){
         listaNuevaSector.push(indicadores[n]['countryName']+indicadores[n]['indicatorName']+indicadores[n]['indicatorCode']);
      }
    }
    return listaNuevaSector;
  }
 // debugger
window.worldbank = {
  arrayCountry: arrayCountry,
  tituloPais:tituloPais,
  // sectorIndicador:sectorIndicador,
  // indicadoresPorPais: indicadoresPorPais,
  tituloPorPais: tituloPorPais,
  indicadoresPorSector:indicadoresPorSector
}