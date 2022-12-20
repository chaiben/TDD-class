
const sumar = (str) => {
  
  str = (typeof(str) !== "string") ? "" : str
  const numeros = str.split(',');

  let res = 0;
  numeros.forEach(numero => {
    
    res += Number(numero);

  });

  
  return res;
  
}

module.exports = sumar; 