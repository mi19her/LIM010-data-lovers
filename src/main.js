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
    let string = `<p id="indicadoresSector"></p>`;
    for (let i = 0; i < arrayIndicadoresxSector.length; i++) {
        string += `<p value="${arrayIndicadoresxSector[i]}">${arrayIndicadoresxSector[i]}</p>`
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
const pintarIndicadoresPorPais = (arrayIndicadores) => {
    let string = `<option disabled selected> Seleccione un indicador </option>`;
    for (let i = 0; i < arrayIndicadores.length; i++) {
        string += `<option value="${arrayIndicadores[i]}">${arrayIndicadores[i]}</option>`
    }
    return string;
};
const pintarNommbresPorPais = (arrayTitle) => {
    let stringTitulo = `<h1 id="titulo"></h1>`;
    for (let l = 0; l < arrayTitle.length; l++) {
        stringTitulo = `INDICADORES DE ${arrayTitle[l]}`.toUpperCase();
    }
    return stringTitulo;
}
let paisSeleccionado;
selectCountry.addEventListener('click', (event) => {
    paisSeleccionado = event.target.value;
    if (paisSeleccionado !== '') {
        seccionThree.classList.add('hide');
        seccionFour.classList.remove('hide');
        titulo.innerHTML = pintarNommbresPorPais(worldbank.tituloPorPais(WORLDBANK, paisSeleccionado));
    }
})
selectSectores.addEventListener('click', (event) => {
    const sectorSeleccionado = event.target.value;
    if (sectorSeleccionado !== '') {
        mostrarIndicador.innerHTML = pintarIndicadoresPorSectoryPais(worldbank.indicadoresPorSector(WORLDBANK,paisSeleccionado,sectorSeleccionado));
        console.log(sectorSeleccionado);
    }
});
btnIndicator.addEventListener('click', () => {
    seccionFour.classList.add('hide');
    seccionFive.classList.remove('hide');
});
buscar.addEventListener('click', (event) => {
    event.preventDefault();
})