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
// Funcion para ver pais seleccionado
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
         listaNuevaSector.push(indicadores[n]['countryName']+" - "+ indicadores[n]['indicatorName']);
      }
    }
    return listaNuevaSector;
  }
 // debugger
window.worldbank = {
  arrayCountry: arrayCountry,
  tituloPais:tituloPais,
  tituloPorPais: tituloPorPais,
  indicadoresPorSector:indicadoresPorSector
}