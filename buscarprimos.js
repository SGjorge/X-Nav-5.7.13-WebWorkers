document.getElementById("btn").addEventListener("click", buscarPrimos);

function buscarPrimos(){
  var wrk = new Worker("wrk.js");
  wrk.postMessage(parseInt(document.getElementById("formulario").input.value));
  wrk.addEventListener("message",function(event){
    document.getElementById('result').innerHTML += event.data;}
    ,false);
};