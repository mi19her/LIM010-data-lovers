google.charts.load('current', { packages: ['corechart', 'bar'] });
const password = document.getElementById('password');
const mnsInc = document.getElementById("mnsInc");
const logoClick = document.getElementById('logo-bm');
const btnIngresar = document.getElementById("btnIngresar");
const menuCountry = document.getElementById("menuCountry");
const menuSectores = document.getElementById("menuSectores");
const selectCountry = document.getElementById("banderas");
const titulo = document.getElementById("titulo");
const buscar = document.getElementById('buscar');
const resultadoGrafico = document.getElementById('chart_div');
const selectSectores = document.getElementById("sectores");
const mostrarIndicador = document.getElementById("indicadoresSector");
const mostrarDatosSector = document.getElementById('mostrarDatosSector');
const tituloIndicador = document.getElementById("tituloIndicador");
const promedio = document.getElementById("promedio");
const muestraPromedio = document.getElementById("muestraPromedio");
const ordenar = document.getElementById("ordenar");
const numeroInicial = document.getElementById('year1');
const numeroFinal = document.getElementById('year2');
const nextPage = () => {
    document.getElementById("seccion4").classList.add('hide');
    document.getElementById("seccion5").classList.add('hide');
}
//funciones para el menu que permite mostrar y ocultar secciones
logoClick.addEventListener('click', () => {
    document.getElementById("seccion2").classList.remove('hide');
    document.getElementById("seccion3").classList.add('hide');
    nextPage();
})
menuSectores.addEventListener('click', () => {
    document.getElementById("seccion2").classList.add('hide');
    document.getElementById("seccion3").classList.add('hide');
    document.getElementById("seccion4").classList.remove('hide');
    document.getElementById("seccion5").classList.add('hide');
});
menuCountry.addEventListener('click', () => {
    document.getElementById("seccion2").classList.add('hide');
    document.getElementById("seccion3").classList.remove('hide');
    nextPage();
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
        document.getElementById("seccion3").classList.add('hide');
        document.getElementById("seccion4").classList.remove('hide');
        titulo.innerHTML = pintarNommbresPorPais(worldbank.tituloPorPais(WORLDBANK, paisSeleccionado));
    }
});
//funcion para mostrar el nombre del pais como titulo
const pintarNommbresPorPais = (Title) => {
    let stringTitulo = `<h1 id="titulo"></h1>`;
    stringTitulo = `INDICADORES DE ${Title}`.toUpperCase();
    return stringTitulo;
}
//funcion que validar la seleccion de un sector y jala sus respectivos indicadores
let sectorSeleccionado;
selectSectores.addEventListener('click', (event) => {
    sectorSeleccionado = event.target.value;
     mostrarIndicador.innerHTML = pintarIndicadoresPorSectoryPais(worldbank.indicadoresPorSector(WORLDBANK, paisSeleccionado, sectorSeleccionado));
});
//funcion para mostrar los indicadores de cada sector dentro de una ul
const pintarIndicadoresPorSectoryPais = (arrayIndicadoresxSector) => {
    let string2 = '';
    for (let i = 0; i < arrayIndicadoresxSector.length; i++) {
        string2 += `<li id=${i} value="${arrayIndicadoresxSector[i]}">${arrayIndicadoresxSector[i]}</li>`
    }
    return string2;
};
//muestra los objetos de datos y ordena en una tabla
let years = [];
let porcentaje = [];
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
mostrarIndicador.addEventListener('change', (event) => {
    event.preventDefault();
    let indice = event.target.id;
    console.log(indice);
    document.getElementById("seccion4").classList.add('hide');
    document.getElementById("seccion5").classList.remove('hide');
    const indicadoresData = worldbank.datosPaisSector(WORLDBANK, paisSeleccionado, sectorSeleccionado);
    mostrarDatosSector.innerHTML = pintarDatosxSectorxIndicadores(indicadoresData[event.target.id]);
    let indicador = worldbank.tituloDeIndicadorporIndice(WORLDBANK, paisSeleccionado, sectorSeleccionado, indice);
    let stringTitulo = `<h3 id="tituloIndicador"></h3>`;
    stringTitulo = `${indicador}`
    tituloIndicador.innerHTML = stringTitulo;
});
//muestra el grafico utilizando los datos en arrays
const grafico = () => {
    let arrayGrafico = new Array(Object.entries(years));
    let rango = arrayGrafico[0];
    rango.forEach((elemento, indice) => {
        elemento[0] = (rango[indice][0]);
        elemento[1] = parseFloat(rango[indice][1]);
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
    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
//funcion ordenar datos
const tablaOrdenar = (orden) => {
    let stringDatosSector = " ";
    for (let i = 0; i < orden.length; i++) {
        if (orden[i][1] !== "") {
            stringDatosSector +=
                ` <tr><td> ${orden[i][0]} </td>
        <td>${orden[i][1].toFixed(2)}</td></tr>`;
        }
    }
    return stringDatosSector;
};
//funcion ordenar datos del indicador ascendente y descendente
ordenar.addEventListener('change', (event) => {
    let ordenSeleccionado = event.target.value;
    let resultadoOrdenar;
    if (ordenSeleccionado === 'ascendente') {
        resultadoOrdenar = window.worldbank.formulaOrdenar(years);
    } else {
        resultadoOrdenar = window.worldbank.formulaOrdenar(years).reverse();
    }
    mostrarDatosSector.innerHTML = tablaOrdenar(resultadoOrdenar);
})
//evento click para mostrar el promedio de los porcentajes 
promedio.addEventListener('click', (event) => {
    event.preventDefault();
    let datoPromedio = [];
    for (let i = 0; i < porcentaje.length; i++) {
        if (porcentaje[i] !== '') {
            datoPromedio.push(Number(porcentaje[i]))
        }
    }
    let resultadoPromedio = window.worldbank.formulaPromedio(datoPromedio);
    muestraPromedio.innerHTML = 'EL PROMEDIO ES: ' + resultadoPromedio.toFixed(2);
})
//evento al boton buscar que permite mostrar el grafico al dar click
buscar.addEventListener('click', (event) => {
    event.preventDefault();
    const newDataSelectyear = selectRangoYear(numeroInicial.value, numeroFinal.value, years);
    mostrarDatosSector.innerHTML = tablaOrdenar(newDataSelectyear);
    document.getElementById("seccion4").classList.add('hide');
    document.getElementById("seccion5").classList.remove('hide');
    grafico();
}); 