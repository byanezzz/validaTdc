
isValidCard();
 
 
 function isValidCard(){
 do{		
 	var numTdc=prompt("N° tarjeta de crédito");
 	arrNumTdc=[];
 	//Ingresa los digitos a un array asumiendo que el usuario ha ingresado un string de numeros
 	for (i=0;i<numTdc.length;i++){
 		arrNumTdc[i]=parseInt(numTdc[i]);
 	}
 	/*Validamos los dígitos ingresados por el usuario sean 
 	realmente numeros y no hayan campos vacíos*/
 	var invalido=false;
 	if(arrNumTdc.length===0||arrNumTdc.length!==16){
 		invalido=true;
 		alert("La cantidad de dígitos ingresados no es válida");
 	}else{
 	for (i=0; i<arrNumTdc.length; i++){ 
 		if (arrNumTdc[i]===" "||isNaN(arrNumTdc[i])){
 			invalido=true;
 			alert("Se han ingresado dígitos no válidos");
 			break;
 		}
 	}
 	}
 
 }while (invalido==true);
 
 	//Invierte el array y se hacen las operaciones segun el algoritmo de Luhn
 var arrInv=arrNumTdc.reverse();
 
 for(i=1;i<arrInv.length;i+=2){
	if(arrInv[i]*2>=10){
		var suma=0;
		var aux=arrInv[i]*2;
		aux=aux.toString();
   		for(var j=0;j<aux.length;j++){
       		suma+=parseInt(aux[j]);
   		}
   		arrInv[i]=suma;
	}else{
		arrInv[i]*=2;
	}
}
 
 	var sumaDigitos=0;
 	for (var i = 0; i < arrInv.length; i++) {
 		sumaDigitos+= arrInv[i];
 	}
 	var tarjetaValida=false
 	if(sumaDigitos%10===0){
 		alert("Tarjeta Válida")
 	}else{
 		alert("Tarjeta Inválida")
 	}
}
