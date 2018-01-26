isValidCard();

function isValidCard() {
  do {
    var TdcNum = prompt("N° tarjeta de crédito").split('').map(Number);
    // Convierte la entrada del prompt en un array con digitos invertidos
    var arrInv = TdcNum.reverse();
    /* Validamos los dígitos ingresados por el usuario sean 
    realmente numeros y no hayan campos vacíos */
    var invalid = false;
    if (arrInv.length === 0 || (arrInv.length < 15 || arrInv.length > 18)) {
      invalid = true;
      alert('La cantidad de dígitos ingresados no es válida');
    } else {
      for (var index = 0; index < arrInv.length; index++) {
        if (arrInv[index] === ' ' || isNaN(arrInv[index])) {
          invalid = true;
          alert('Se han ingresado dígitos no válidos');
          break;
        }
      }
    }
  } while (invalid === true);

  for (var index = 1; index < arrInv.length; index += 2) {
    if (arrInv[index] * 2 >= 10) {
      var sum = 0;
      var aux = arrInv[index] * 2;
      aux = aux.toString();
      for (var indexAux = 0; indexAux < aux.length; indexAux++) {
        sum += parseInt(aux[indexAux]);
      }
      arrInv[index] = sum;
    } else {
      arrInv[index] *= 2;
    }
  }
  var sum = arrInv.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;
  })
  var validCard = false;
  if (sum % 10 === 0) {
    alert('Tarjeta Válida');
  } else {
    alert('Tarjeta Inválida');
  }
}