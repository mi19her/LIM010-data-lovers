google.charts.load('current', {packages: ['corechart', 'bar']});
/* Manejo del DOM */
const password = document.getElementById("password");
const seccionOne = document.getElementById("seccion1");
const seccionTwo = document.getElementById("seccion2");
const seccionThree = document.getElementById("seccion3");
const seccionFour = document.getElementById("seccion4");
const seccionFive = document.getElementById("seccion5");
const mnsInc = document.getElementById("mnsInc");
const header = document.getElementById("header");
const btnStart = document.getElementById("start");
const btnCountry = document.getElementById("country");
const selectCountry = document.getElementById("paises");
const btnIndicator = document.getElementById("sector");
const ListIndicador = document.getElementById('list');
const titulo = document.getElementById("titulo");
const selectSectores = document.getElementById("sectores");
const mostrarIndicador = document.getElementById("indicadoresSector");

const pintarIndicadoresPorSectoryPais = (arrayIndicadoresxSector) => {
    let string = `<ul id="indicadoresSector"></ul>`;
    for (let i = 0; i < arrayIndicadoresxSector.length; i++) {
        string += `<ul id="indicadoresSector" value="${arrayIndicadoresxSector[i]}">${arrayIndicadoresxSector[i]}</ul>`
    }
    return string;
};
btnIngresar.addEventListener('click', () => {
    // if (password.value === '') {
    //     mnsInc.innerHTML = "ingrese password";
    // }
    // else {
    //     if (password.value === 'laboratoria') {
            seccionOne.classList.add('hide');
            header.classList.remove('hide');
            seccionTwo.classList.remove('hide');
    //     }
    //     else {
    //         mnsInc.innerHTML = "contraseña incorrecta";
    //     }
    // }
    // password.value = "";
});

btnCountry.addEventListener('click', () => {
    seccionTwo.classList.add('hide');
    seccionThree.classList.remove('hide');
});
btnStart.addEventListener('click', () => {
    seccionTwo.classList.remove('hide');
    seccionThree.classList.add('hide');
});
const pintarNommbresPorPais = (arrayTitle) => {
    let stringTitulo = `<h1 id="titulo"></h1>`;
    for (let l = 0; l < arrayTitle.length; l++) {
        stringTitulo = `INDICADORES DE ${arrayTitle[l]}`.toUpperCase();
    }
    return stringTitulo;
}
let paisSeleccionado;
selectCountry.addEventListener('click', (event) => {
    event.preventDefault();
    const paisSeleccionado = event.target.value;
    if (paisSeleccionado !== '') {
        document.getElementById("menuGraficos").classList.remove('hide');
        document.getElementById("seccion3").classList.add('hide');
        document.getElementById("seccion4").classList.remove('hide');
        titulo.innerHTML = pintarNommbresPorPais(worldbank.tituloPorPais(WORLDBANK, paisSeleccionado));
        ListIndicador.innerHTML = pintarIndicadoresPorPais(worldbank.indicadoresPorPais(WORLDBANK, paisSeleccionado));
    }
});
const pintarIndicadoresPorPais = (arrayIndicadores) => {
    let string = `<option disabled selected> Seleccione un indicador </option>`;
    for (let i = 0; i < arrayIndicadores.length; i++) {
        string += `<option id=${i} value="${i}">${arrayIndicadores[i]}</option>`
    }
    return string;
};


const listaDeIndicadores =  document.getElementById('list');

listaDeIndicadores.addEventListener('change', (event) => {
   
   selectIndicador = WORLDBANK.PER.indicators[event.target.value].data
   console.log(selectIndicador)
});


const grafico=()=>{
    let arrayGrafico= new Array(Object.entries( selectIndicador));
    let rango = arrayGrafico[0];
    rango.forEach((elemento,indice)=>{
      elemento[0]=(rango[indice][0]);
      elemento[1]=parseInt(rango[indice][1]);  
    });
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'X');
    data.addColumn('number', '% ');
    data.addRows(rango);
    const options = {
      hAxis: {
        title: 'AÑOS'
      },
      vAxis: {
        title: 'PORCENTAJE'
      }
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
menuGraphic.addEventListener('click', () => {
    document.getElementById("seccion4").classList.add('hide');
    document.getElementById("seccion5").classList.remove('hide');
});
buscar.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById("seccion4").classList.add('hide');
    document.getElementById("seccion5").classList.remove('hide');
    grafico();
    // resultadoGrafico.innerHTML = selectRangoYear(numeroInicial.value, numeroFinal.value, WORLDBANK.PER.indicators[0].data);
    console.log(selectRangoYear(numeroInicial.value, numeroFinal.value, selectIndicador))
});
