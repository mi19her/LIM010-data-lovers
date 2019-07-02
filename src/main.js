/* Manejo del DOM */
const password=document.getElementById("password");
const seccionOne=document.getElementById("seccion1");
const seccionTwo=document.getElementById("seccion2");
const seccionThree=document.getElementById("seccion3");
const seccionFour=document.getElementById("seccion4");
const mnsInc=document.getElementById("mnsInc");
const btnIngresar=document.getElementById("btnIngresar");
const header=document.getElementById("header");
const btnStart=document.getElementById("start");
const btnCountry=document.getElementById("country");
const btnPeru=document.getElementById("peru");

btnIngresar.addEventListener('click',()=>{
if(password.value===''){
    mnsInc.innerHTML="ingrese password";
}
else{
    if(password.value==='laboratoria'){
        seccionOne.classList.add('hide');
        header.classList.remove('hide');
        seccionTwo.classList.remove('hide');
    }
    else{
        mnsInc.innerHTML="contraseña incorrecta";
    }
}
password.value="";
});

btnCountry.addEventListener('click',()=>{
    seccionTwo.classList.add('hide');
    seccionThree.classList.remove('hide');
});
btnStart.addEventListener('click',()=>{
    seccionTwo.classList.remove('hide');
    seccionThree.classList.add('hide');
    });
btnPeru.addEventListener('click',()=>{
    seccionThree.classList.add('hide');
    seccionFour.classList.remove('hide');
})    
    