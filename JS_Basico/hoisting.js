//hoisting es mandar a llamar una 
//funcion, variable u otro antes de declararlo
//avascript lo que hace es crear la variable y asignarle un valor undefiend

console.log(miNombre);
var miNombre="Luis";

//lo que sucede alk realizar lo de arriba
var miNombre=undefined;
console.log(miNombre);
//Asignamos valor a esa delcaracion pero se imrpimio antes de esa asignacion
//y me muestra en consola tanto undefiend y el nombre que se asigna despues
miNombre="Luis";


//eecutar codigo independiente 
//las funciones se pueden llamar 
hey();

function hey() {
    console.log("hola" + miNombre);
    
}
var miNombre="Luis";

//COERCION
//Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
//Concatena 4 + 7 
var a=4 + "7";
//imprime un string 47
typeof a

//genera la multiplicacion cierto ue + es concatenacion y * no lo es
var b=4*"7";
//imprime tipo number 28
typeof b

//Coerción explicita = es cuando obligamos a que cambie el tipo de valor.
//utilizamos las conversiones de tipo de datos
var a=20;
//convierte de numero a string
var c=String(a);
console.log(c)

//convierte de string a number
var d=Number(c);
console.log(d);