self.onmessage = function(event){
  console.log("He recibido " + event.data);
  var salida = "";
  var index = 1;
  while(index < event.data){
    if(index === 1){
      self.postMessage("Te devuelvo 1 " + salida);
    };
    var aux = buscarPrimos(index,event.data);
    index = aux[1];
    salida = aux[0];
    self.postMessage(salida);
  };
};

function buscarPrimos(index,num){
  var n = index;
  primelist = "";
  search: while (n<num) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    primelist += " " + n;
    if(primelist.length > 100000){
      return [primelist,n];
    };
  };
  return [primelist,n];
};