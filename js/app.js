
var span1=document.getElementsByClassName("campo-vacio");
var span2=document.getElementsByClassName("validar-campo");
var enviar=document.getElementById("enviar");
var nombre=document.getElementById("nombre");
var apellido=document.getElementById("apellido");
var dni=document.getElementById("dni");
var celular=document.getElementById("celular");
var casa=document.getElementById("casa");
var contraseña=document.getElementById("contraseña");
var confirmaContraseña=document.getElementById("confirma-contraseña");
var comentario=document.getElementById("mensaje");
var myCheckbox=document.getElementById("checkbox");

enviar.addEventListener("click",validar);

function validar(evento){
  evento.preventDefault();

  for(var i=0; i<span1.length;i++){
    span1[i].style.display="block";
  }
  for(var i=0; i<span2.length;i++){
   span2[i].style.display="block";
  }

  if(nombre.value!=""){
    span1[0].style.display="none";
    mayuscula(nombre,0);
  }else{
    span2[0].style.display="none";
  }

  if(apellido.value!=""){
    span1[1].style.display="none";
    mayuscula(apellido,1);
  }else{
    span2[1].style.display="none";
  }

  if(dni.value!=""){
    span1[2].style.display="none";
    numeroDni(dni);
  }else{
    span2[2].style.display="none";
  }

  if(celular.value!=""){
    span1[4].style.display="none";
    numeroCelular(celular);
  }else{
    span2[4].style.display="none";
  }

  if(casa.value!=""){
    span1[5].style.display="none";
    numeroCasa(casa);
  }else{
    span2[5].style.display="none";
  }

  if(contraseña.value!=""){
    span1[6].style.display="none";
    validarContraseña(contraseña);
  }else{
    span2[6].style.display="none";
  }

  if(confirmaContraseña.value!=""){
    span1[7].style.display="none";
    confirmarContraseña(confirmaContraseña);
  }else{
    span2[7].style.display="none";
  }

  if(comentario.value!=""){
    span1[8].style.display="none";
  }

  if(myCheckbox.checked){
    span1[9].style.display="none";
  }
}


function mayuscula(elemento,i){
  if((/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/).test(elemento.value)){
    span2[i].style.display="none";
  }else{
      span2[i].style.display="block";
  }
}

function numeroDni(elemento){
  if((/^([0-9]{8})*$/).test(elemento.value)){
    span2[2].style.display="none";
  }else{
    span2[2].style.display="block";
  }
}
  function numeroCelular(elemento){
    if((/^([0-9]{9})*$/).test(elemento.value)){
      span2[4].style.display="none";
    }else{
      span2[4].style.display="block";
    }
}

function numeroCasa(elemento){
  if((/^([0-9]{7})*$/).test(elemento.value)){
    span2[5].style.display="none";
  }else{
    span2[5].style.display="block";
  }
}

function validarContraseña(elemento){
  if((/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/).test(elemento.value)){
    span2[6].style.display="none";
  }else{
    span2[6].style.display="block";
  }
}

function confirmarContraseña(elemento){
  if(contraseña.value===confirmaContraseña.value){
    span2[7].style.display="none";
  }else{
    span2[7].style.display="block";
  }
}
