//Datos primitivos

//String
let nombre = "Juan";
let apellido = "Pérez";


//Number
let edad = 30; //numero entero
let salario = 2500.50; //numero decimal
let altura = 1.75;
let temperatura = -5;


//Boolean
let esMayorDeEdad = edad >= 18;
let esMenorDeEdad = edad < 18;



//Undefined
let undefinedValue
console.log(undefinedValue)//es un valor indefinido, no se ha asignado un valor a la variable


//Null
let nullValue = null; //representa la ausencia intencionada de un valor 


//Symbol    
let mySymbol = Symbol("my symbol"); //representa un valor unico e inmutable, 
// se utiliza para crear propiedades de objetos que son unicas y no se pueden sobrescribir


//BigInt
let myBigInt = BigInt(1234567890123456789012345678901234567890);//representa un numero entero de gran tamaño,
let myBigInt2 = 1234567890123456789012345678901234567890n; //se puede utilizar la letra n al final del numero para indicar que es un BigInt
// se utiliza para trabajar con numeros enteros que son demasiado grandes para ser representados como un Number normal



//mostrar los tipos de datos
console.log(typeof nombre); //string
console.log(typeof apellido); //string

console.log(typeof edad); //number
console.log(typeof salario); //number   
console.log(typeof altura); //number
console.log(typeof temperatura); //number

console.log(typeof esMayorDeEdad); //boolean
console.log(typeof esMenorDeEdad); //boolean

console.log(typeof undefinedValue); //undefined

console.log(typeof nullValue); //object

console.log(typeof mySymbol); //symbol

console.log(typeof myBigInt); //bigint
console.log(typeof myBigInt2); //bigint
