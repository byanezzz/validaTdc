### Pseudocodigo para verificar la validez de una tarjeta de credito ###

1. Crear una funcion llamada isValidCard
2. Dentro de la función se le solicita al usuario que ingrese un numero de tarjeta valido y se almacena en una variable
3. Declaro un array vacio(arrNumTdc), luego convierto la cadena de numeros ingresada por el usuario a un array de numeros usando la funcion parseInt y la almaceno en arrNumTdc por medio de un ciclo.
4. Valido si realmente son numeros los que ahora contiene el array arrNumTdc.
  1. Creo una variable booleana llamada invalido y la inicializo en falso.
  2. Evaluo la condicion de si el array de numeros esta vacio o tiene una cantidad de digitos distinto a 16
      1. Si se cumple alguna de las condiciones anteriores entonces la variable invalido ahora es verdadero
      2. Sino, evaluo por cada elemento del array (por medio de una expresion repetitiva)si alguno esta vacio o no es un numero 
      3. Si se cumple una de las condiciones anteriores la variable inválido es verdadera
5. Mientras la variable invalido sea verdadera deben repetirse los pasos del 1 al 4.
6. El array arrNumTdc se invierte usando la funcion reverse y se alamacena en un nuevo array declarado como varrInv.
7. Se realizan las operaciones indicadas en el algoritmo de Luhn
  1. Recorremos el array (arrInv) comenzando en el segundo elemento (i=1) del mismo y avanzando en pasos de dos en dos para asegurarnos de que recorra solo los elementos pares.
  2. Se evalua la condicion de si el elemento par multiplicado por dos es mayor a diez entonces sumaremos los digitos resultantes del producto.
       1. Declaramos una variable suma inicializada en cero y una auxiliar (aux) inicializada en el valor contenido en el elemento i multiplicado por 2.
       2. El producto de aux lo convierto en string por medio de la funcion toString.
       3. Recorro el string aux mediante una expresion iterativa for, y acumulamos la adicion de cada elemento de aux en la variable suma.
       4. El valor de la variable suma se lo asignamos a arrInv en la posicion i.
  3. Si no se cumple la condicion anterior (ii.) solo se le asigna al arrInv en la posicion i, el producto del valor almacenado en i por dos.
  4. Declara una variable sumaDigitos inicializada en cero
  5. Recorremos el arrInv ahora con los nuevos valores y vamos acumulando la suma de los elementos i en la variable sumaDigitos
  6. Evaluamos la condicion de que si el modulo de la variable sumaDigitos es igual a cero
       7.6.1 Mostrar un mensaje de tarjeta valida.
  7. Sino mostrar un mensaje de tarjeta invalida

***

### [Ver diagrama de flujo](https://www.lucidchart.com/invitations/accept/f75113a7-d423-4b7c-943e-5b981cabc660)