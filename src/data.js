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
// Funcion para seleccion un indicador de un pais
const indicadoresPorPais = (data, pais) => {
  const ListaNueva = [];
  let indicator = data[pais].indicators;
  for (let i = 0; i < indicator.length; i++) {
    ListaNueva.push(indicator[i]['countryName'] + ' - ' + indicator[i]['indicatorName']);
  }
  return ListaNueva;
}
// Funcion para mostrar los porcentajes de un indicador por los años seleccionados
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
// Funcion para mostrar el titulo del pais seleccionar
const tituloPorPais=(data,pais)=>{
  const titleNew=[];
  let titleCountry = data[pais].indicators;
  for(let l=0;l<titleCountry.length; l++){
    titleNew.push(titleCountry[l]['countryName']);
  }
  return titleNew;
}
window.worldbank = {
  selectRangoYear :selectRangoYear,
  arrayCountry: arrayCountry,
  tituloPais:tituloPais,
  indicadoresPorPais: indicadoresPorPais,
  tituloPorPais: tituloPorPais,
}
