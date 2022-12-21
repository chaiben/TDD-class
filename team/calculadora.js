
const sumar = (str) => {
  
  str = (typeof(str) !== "string") ? "" : str
  let delimitador = "n";
  if (str[0] === "/" && str[1] === "/" && str.includes("\n")) {
    // Captura el delimitador

    delimitador = str[2];
    str = str.substr(3);
     
  }
  console.log(delimitador);
  str = str.replaceAll(delimitador, ",");
  const numeros = str.split(',');
  

  let res = 0;
  const numerosNegativos = [];

  numeros.forEach(numero => {
    
    let n = Number(numero);
    if (n < 0) {
        numerosNegativos.push(n);
    } else {
        if (n > 1000) 
          return
        res += n;
    };

  });
  if (numerosNegativos.length > 0) {
    return 'Los números negativos no están permitidos. '+ numerosNegativos.join(",")
  }
  return res;
  
}

module.exports = sumar; 