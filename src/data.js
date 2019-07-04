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
// Funcion para s
const tituloPorPais=(data,pais,tituloCountry)=>{
  const titleNew=[];
  let titleCountry = data[pais].indicators;
  for(let l=0;l<titleCountry.length; l++){
    titleNew.push(titleCountry[l]['countryName']);
  }
  return titleNew;
}
window.worldbank = {
  arrayCountry: arrayCountry,
  tituloPais:tituloPais,
  indicadoresPorPais: indicadoresPorPais,
  tituloPorPais: tituloPorPais,
}
