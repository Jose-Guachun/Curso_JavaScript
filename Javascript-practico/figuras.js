console.group('CUADRADO')
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro cuadrado es: " + perimetroCuadrado + " cm");

const arearoCuadrado = ladoCuadrado * perimetroCuadrado;
console.log("El area cuadrado es: " + arearoCuadrado + " cmˆ2");
console.groupEnd()

console.group('TRIANGULO')
    function perimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    }

    function areaTriangulo(base, altura) {
        return (base * altura) / 2;
    }
    console.log("El área del triángulo es: " + perimetroTriangulo(2,2,3) + " cm");
    console.log("El área del triángulo es: " + areaTriangulo(25,12) + " cmˆ2");

console.groupEnd()

// Aquí interactuamos con el HTML  falta estudiar
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
  }
  function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const area = areaCuadrado(value);
    alert(area);
  }