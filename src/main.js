google.charts.load('current', {packages: ['corechart', 'bar']});
/* Manejo del DOM */
const password = document.getElementById("password");
const mnsInc = document.getElementById("mnsInc");
const btnIngresar = document.getElementById("btnIngresar");
const menuInicio = document.getElementById("menuInicio");
const menuCountry = document.getElementById("menuCountry");
const menuGraphic = document.getElementById("menuGraficos");
const menuLogin = document.getElementById("menuLogin");
const selectCountry = document.getElementById("banderas");
const ListIndicador = document.getElementById('list');
const titulo = document.getElementById("titulo");
const buscar = document.getElementById('buscar');
const numeroInicial = document.getElementById('year1');
const numeroFinal = document.getElementById('year2');
//const resultadoGrafico = document.getElementById('chart_div');
const selectSectores = document.getElementById("sectores");
const mostrarIndicador = document.getElementById("indicadoresSector");

const mostrarAnioPorcentaje=document.getElementById("aniopor");

menuLogin.addEventListener('click', () => {
    document.getElementById("header").classList.add('hide');
    document.getElementById("seccion1").classList.remove('hide');
    document.getElementById("seccion2").classList.add('hide');
    document.getElementById("seccion3").classList.add('hide');
    // document.getElementById("seccion5").classList.add('hide');

    document.getElementById("seccion6").classList.add("hide");
})
btnIngresar.addEventListener('click', () => {
    // if(password.value===''){
    //     mnsInc.innerHTML="ingrese password";
    // }
    // else{
    //     if(password.value==='laboratoria'){
    document.getElementById("header").classList.remove('hide');
    document.getElementById("seccion1").classList.add('hide');
    document.getElementById("seccion2").classList.remove('hide');
    //     }
    //     else{
    //         mnsInc.innerHTML="contraseña incorrecta";
    //     }
    // }
    // password.value="";
});
menuInicio.addEventListener('click', () => {
    document.getElementById("seccion2").classList.remove('hide');
    document.getElementById("seccion3").classList.add('hide');
    // document.getElementById("seccion5").classList.add('hide');

    document.getElementById("seccion6").classList.add("hide");
});
menuCountry.addEventListener('click', () => {
    document.getElementById("seccion2").classList.add('hide');
    document.getElementById("seccion3").classList.remove('hide');
    document.getElementById("seccion4").classList.add('hide');
    // document.getElementById("seccion5").classList.add('hide');

    document.getElementById("seccion6").classList.add("hide");
});
const pintarNommbresPorPais = (arrayTitle) => {
    let stringTitulo = `<h1 id="titulo"></h1>`;
    for (let l = 0; l < arrayTitle.length; l++) {
        stringTitulo = `INDICADORES DE ${arrayTitle[l]}`.toUpperCase();
    }
    return stringTitulo;
}
// opcion para elegir un pais 
let paisSeleccionado;
selectCountry.addEventListener('click', (event) => {
    event.preventDefault();
    paisSeleccionado = event.target.value;
    if (paisSeleccionado !== '') {
        document.getElementById("menuGraficos").classList.remove('hide');
        document.getElementById("seccion3").classList.add('hide');
        document.getElementById("seccion4").classList.remove('hide');
        titulo.innerHTML = pintarNommbresPorPais(worldbank.tituloPorPais(WORLDBANK, paisSeleccionado));
        // ListIndicador.innerHTML = pintarIndicadoresPorPais(worldbank.indicadoresPorPais(WORLDBANK, paisSeleccionado));
    }
});

// const pintarIndicadoresPorPais = (arrayIndicadores) => {
//     let string = `<option disabled selected> Seleccione un indicador </option>`;
//     for (let i = 0; i < arrayIndicadores.length; i++) {
//         string += `<option id=${i} value="${i}">${i+' '+arrayIndicadores[i]}</option>`
//     }
//     return string;
// };

//muestra opciones por cada sector seleccionado
 const pintarIndicadoresPorSectoryPais = (arrayIndicadoresxSector) => {
    let string = `<ul id="indicadoresSector"></ul>`;
    for (let i = 0; i < arrayIndicadoresxSector.length; i++) {
        string += `<ul id=${i} value="${i}">${i+' '+arrayIndicadoresxSector[i]}</ul>`
    }
    return string;
};



//muestra los anios
const pintarAnioporRango = (IndicadoresxSectorAnio) =>{
let string = `<fieldset id="aniopor"></fieldset>`;
for (let i = 0; i < IndicadoresxSectorAnio.length; i++) {
    string += `<ul id=${i} value="${i}">${i+' '+IndicadoresxSectorAnio[i]}</ul>`
}
return string;
}
//--------------------------------------------
let sectorSeleccionado;
selectSectores.addEventListener('click', (event) => {
    sectorSeleccionado = event.target.value;
    if (sectorSeleccionado !== '') {
        mostrarIndicador.innerHTML = pintarIndicadoresPorSectoryPais(worldbank.indicadoresPorSector(WORLDBANK,paisSeleccionado,sectorSeleccionado));
    }
});

//----------------------------------------------
//
buscar.addEventListener('click',(event)=>{
    event.preventDefault();
const indicadorSeleccionado= event.target.value;
if(indicadorSeleccionado!==''){

document.getElementById("seccion4").classList.add('hide');
//document.getElementById("seccion5").classList.add('hide');
document.getElementById("seccion6").classList.remove('hide');
mostrarAnioPorcentaje.innerHTML = pintarAnioporRango(worldbank.selectRangoYear(numeroInicial,numeroFinal,indicadoresPorSectorconData(WORLDBANK,paisSeleccionado,sectorSeleccionado)));
}
});



//muestra el contenido del indicador seleccionado
const listaDeIndicadores =  document.getElementById('list');
listaDeIndicadores.addEventListener('change', (event) => {
   selectIndicador = WORLDBANK.PER.indicators[event.target.value].data
   console.log(selectIndicador);
});

// const grafico=()=>{
//     let arrayGrafico= new Array(Object.entries( selectIndicador));
//     let rango = arrayGrafico[0];
//     rango.forEach((elemento,indice)=>{
//       elemento[0]=(rango[indice][0]);
//       elemento[1]=parseInt(rango[indice][1]);  
//     });
//     let data = new google.visualization.DataTable();
//     data.addColumn('string', 'X');
//     data.addColumn('number', '% ');
//     data.addRows(rango);
//     const options = {
//       hAxis: {
//         title: 'AÑOS'
//       },
//       vAxis: {
//         title: 'PORCENTAJE'
//       }
//     };
//     var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
//     chart.draw(data, options);
//   }
// menuGraphic.addEventListener('click', () => {
//     document.getElementById("seccion4").classList.add('hide');
//     document.getElementById("seccion5").classList.remove('hide');
// });
// buscar.addEventListener('click', (event) => {
//     event.preventDefault();
//     document.getElementById("seccion4").classList.add('hide');
//     document.getElementById("seccion5").classList.remove('hide');
//     grafico();
//     console.log(selectRangoYear(numeroInicial.value, numeroFinal.value, selectIndicador))
// }); 

