
google.charts.load('current', { packages: ['corechart', 'bar'] });
const password = document.getElementById("password");
const mnsInc = document.getElementById("mnsInc");
const btnIngresar = document.getElementById("btnIngresar");
const menuInicio = document.getElementById("menuInicio");
const menuCountry = document.getElementById("menuCountry");
const menuGraphic = document.getElementById("menuGraficos");
const menuLogin = document.getElementById("menuLogin");
const selectCountry = document.getElementById("banderas");
// const ListIndicador = document.getElementById('list');
const titulo = document.getElementById("titulo");
const buscar = document.getElementById('buscar');
const numeroInicial = document.getElementById('year1');
const numeroFinal = document.getElementById('year2');
// const resultadoGrafico = document.getElementById('chart_div');
const selectSectores = document.getElementById("sectores");
const mostrarIndicador = document.getElementById("indicadoresSector");
const mostrarDatosSector = document.getElementById('mostrarDatosSector');
const tituloIndicador = document.getElementById("tituloIndicador");
const promedio = document.getElementById("promedio");
const muestraPromedio= document.getElementById("muestraPromedio");
const ordenar = document.getElementById("ordenar");
//funciones para el menu que permite mostrar y ocultar secciones
menuLogin.addEventListener('click', () => {
    document.getElementById("header").classList.add('hide');
    document.getElementById("seccion1").classList.remove('hide');
    document.getElementById("seccion2").classList.add('hide');
    document.getElementById("seccion3").classList.add('hide');
    // document.getElementById("seccion5").classList.add('hide');

    document.getElementById("seccion6").classList.add("hide");
})
menuInicio.addEventListener('click', () => {
    document.getElementById("seccion2").classList.remove('hide');
    document.getElementById("seccion3").classList.add('hide');
    document.getElementById("seccion5").classList.add('hide');
});
menuCountry.addEventListener('click', () => {
    document.getElementById("seccion2").classList.add('hide');
    document.getElementById("seccion3").classList.remove('hide');
    document.getElementById("seccion4").classList.add('hide');
    document.getElementById("seccion5").classList.add('hide');
});
menuGraphic.addEventListener('click', () => {
    document.getElementById("seccion4").classList.add('hide');
    document.getElementById("seccion5").classList.remove('hide');
});
//evento click al boton ingresar, para validar contraseña
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
// funcion para validar la seleccion de una bandera(Pais) y muestra el titulo del pais y sus indicadores en el select
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
//funcion para mostrar el nombre del pais como titulo
const pintarNommbresPorPais = (arrayTitle) => {
    let stringTitulo = `<h1 id="titulo"></h1>`;
    for (let l = 0; l < arrayTitle.length; l++) {
        stringTitulo = `INDICADORES DE ${arrayTitle[l]}`.toUpperCase();
    }
    return stringTitulo;
}
//funcion para mostrar todo el array de indicadores dentro de las opciones del select
// const pintarIndicadoresPorPais = (arrayIndicadores) => {
//     let string = `<option disabled selected> Seleccione un indicador </option>`;
//     for (let i = 0; i < arrayIndicadores.length; i++) {
//         string += `<option id=${i} value="${i}">${arrayIndicadores[i]}</option>`
//     }
//     return string;
// };

//funcion que validar la seleccion de un sector y jala sus respectivos indicadores
let sectorSeleccionado;
selectSectores.addEventListener('click', (event) => {
    sectorSeleccionado = event.target.value;
    if (sectorSeleccionado !== '') {
        mostrarIndicador.innerHTML = pintarIndicadoresPorSectoryPais(worldbank.indicadoresPorSector(WORLDBANK, paisSeleccionado, sectorSeleccionado));
    }
});

//funcion para mostrar los indicadores de cada sector dentro de una ul
const pintarIndicadoresPorSectoryPais = (arrayIndicadoresxSector) => {
    let string2 = '';
    for (let i = 0; i < arrayIndicadoresxSector.length; i++) {
        // const indiceOriginal = arrayIndicadoresxSector[i].substring(0,3) 
        string2 += `<li id=${i} value="${arrayIndicadoresxSector[i]}">${i + '-' + arrayIndicadoresxSector[i]}</li>`
    }
    return string2;
};
//muestra los objetos de datos y ordena en una tabla
let porcentaje=[];
let years=[];
const pintarDatosxSectorxIndicadores = (obj) => {
    years = obj;
    let stringDatosSector = " ";
    porcentaje = Object.values(obj);
    let i;
    for (i in years) {
        if (years[i] !== "") {
            stringDatosSector +=
                ` <tr><td> ${i} </td>
        <td>${ years[i].toFixed(2)}</td></tr>`;
        }
    }
    return stringDatosSector;
};
//funcion para mostrar los datos del indicador seleccionado
mostrarIndicador.addEventListener('click', (event) => {
    document.getElementById("seccion4").classList.add('hide');
    document.getElementById("seccion5").classList.remove('hide');
    const indicadoresData = worldbank.datosPaisSector(WORLDBANK, paisSeleccionado, sectorSeleccionado);
    mostrarDatosSector.innerHTML = pintarDatosxSectorxIndicadores(indicadoresData[event.target.id]);
    //funcion para jalar el nombre del indicador seleccionado
    const pintarTituloPorIndicador = (arrayTitle) => {
        let stringTitulo = `<h3 id="tituloIndicador"></h3>`;
        stringTitulo = `${arrayTitle}`;
        tituloIndicador.innerHTML = stringTitulo.toUpperCase();
    }
    pintarTituloPorIndicador(worldbank.tituloPorIndicador(WORLDBANK, paisSeleccionado, sectorSeleccionado)[event.target.value]);
    
    // console.log(pintarTituloPorIndicador(worldbank.tituloPorIndicador(WORLDBANK,paisSeleccionado,sectorSeleccionado)[event.target.value]));
    // return indicadoresData
    // tablaDatos.innerHTML =
    //console.log(worldbank.datosPaisSector(WORLDBANK,paisSeleccionado,sectorSeleccionado));
    //  WORLDBANK.PER.indicators[event.target.id].data
    //  console.log(selectRangoYear(numeroInicial.value, numeroFinal.value, WORLDBANK.PER.indicators[event.target.id].data))
});
//muestra el grafico utilizando los datos en arrays
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

//funcion ordenar datos del indicador ascendente y descendente
let nuevoArrayPorcentaje=[]
ordenar.addEventListener('change',(event)=>{
    let ordenSeleccionado = event.target.value;
    console.log(ordenSeleccionado);
    for(let i=0;i< ordenSeleccionado.length; i++){
        let resultadOrden = worldbank.ordenarDatoIndicador(years,ordenSeleccionado[i]);   
        console.log(worldbank.ordenarDatoIndicador(years,ordenSeleccionado[i])); 
    }
    return ordenSeleccionado;
    // if (ordenSeleccionado ==='ascendente')
})

//evento click para mostrar el promedio de los porcentajes 
promedio.addEventListener('click', (event) => {
    event.preventDefault();
    let datoPromedio = [];
    for(let i=0; i<porcentaje.length;i++){
        if(porcentaje[i]!== ''){
            datoPromedio.push(Number(porcentaje[i]))
            // let porcentajeTotal = new Set([porcentaje[i].toFixed(2)]);
            // let concatPorcentaje = Array.from(porcentajeTotal);
            // console.log(concatPorcentaje);
        }
    }
    let resultadoPromedio = window.worldbank.formulaPromedio(datoPromedio);
    muestraPromedio.innerHTML='EL PROMEDIO ES: ' + resultadoPromedio.toFixed(2);
})
//evento al boton buscar que permite mostrar el grafico al dar click
buscar.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById("seccion4").classList.add('hide');
    document.getElementById("seccion5").classList.remove('hide');
    // grafico();

}); 