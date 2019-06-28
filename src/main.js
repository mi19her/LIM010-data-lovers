/* Manejo del DOM */
const password=document.getElementById("password");
const seccionOne=document.getElementById("seccion1");
const seccionTwo=document.getElementById("seccion2");
const mnsInc=document.getElementById("mnsInc");
const btnIngresar=document.getElementById("btnIngresar");

btnIngresar.addEventListener('click',()=>{
if(password.value===''){
    mnsInc.innerHTML="ingrese password";
}
else{
    if(password.value==='laboratoria'){
        seccionOne.classList.add('hide');
        seccionTwo.classList.remove('hide');
    }
    else{
        mnsInc.innerHTML="contraseña incorrecta";
    }
}
password.value="";
});
