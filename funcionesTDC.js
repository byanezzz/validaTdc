
//1.- Convierte el numero de la tarjeta en un array de numeros

function convertirAArray(numTdc){
	arrNumTdc=[];
	for (i=0;i<numTdc.length;i++){
		arrNumTdc[i]=parseInt(numTdc.charAt(i))
	}return arrNumTdc
}

//2.- Invierte el array de numeros de la tarjeta de crédito

function invertirArray(arr){
	arrInv=arr.reverse();
	return arrInv
}


//3.- Operación a los numeros de las posiciones pares

function algoritmoLuhn(arr){
	for(i=1;i<arr.length;i+=2){
			if(arr[i]*2>=10){
				var suma=0;
				var aux=arr[i]*2;
				aux=aux.toString();
        		for(var j=0;j<aux.length;j++){
            		suma+=parseInt(aux[j]);
        		}arr[i]=suma;
			}else{
				arr[i]*=2;
			}
		
	}return arr
}

//4.- Suma los elementos de un array
function sumarDigitos(arr){
	sum=0;
	for (var i = 0; i < arr.length; i++) {
		sum+= arr[i];
	}return sum
}

//5.- Valida que los datos dados por el usuario 
function validarSiSonNumeros(datoTdc){
	var invalido=false;
	if(datoTdc.length===0||datoTdc.length!==16){
		invalido=true;
		alert("La cantidad de dígitos ingresados no es válida");
		return invalido;
	}else{
	for (i=0; i<datoTdc.length; i++){ 
			if (datoTdc[i]!==" "||isNaN(datoTdc[i])){
				invalido=true;
				alert("Se han ingresado dígitos no válidos");
				break;
			}
		}
	}return invalido		
}

// Cuerpo principal del programa
	do{
		var numTdc=prompt("N° tarjeta de crédito");
		var datoTdc=convertirAArray(numTdc);
		var invalido=validarSiSonNumeros(datoTdc);
		}while (invalido==true);

	var sumaDigitos=0;

	sumaDigitos=sumarDigitos(algoritmoLuhn(invertirArray(convertirAArray(numTdc))));
	if(sumaDigitos%2===0){
		alert("Tarjeta Válida");
	}else{
		alert("Tarjeta Inválida")
	}


