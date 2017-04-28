
var span1=document.getElementsByClassName("campo-vacio");
var span2=document.getElementsByClassName("validar-campo");
var enviar=document.getElementById("enviar");

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
    mayuscula(nombre);
  }
}

var nombre=document.getElementById("nombre");

  function mayuscula(){
  if((/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/).test(nombre.value)){
    span1[0].style.display="none";
    span2[0].style.display="none";
  }
}
