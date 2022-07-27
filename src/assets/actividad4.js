console.log('conectado a actividad 4')

let Num = prompt('Ingrese un número')
Num = parseInt(Num)

let Num2 = prompt('Ingrese otro número')
Num2 = parseInt(Num2)

let sumar = Num + Num2

let restar = Num - Num2

let multiplicar = Num * Num2

let dividir = Num / Num2

let operacion = parseInt(prompt(`Escoja una de las operaciones: 1 sumar, 2 restar, 3 multiplicar, 4 dividir`))


if (operacion === 1){
    alert(`El resultado de la suma es: ${sumar}`)
} 
else
if (operacion === 2){
    alert(`El resultado de la resta es: ${restar}`)
}
else
if (operacion === 3){
    alert(`El resultado de la multiplicación es: ${multiplicar}`)
}
else
if (operacion === 4){
    alert(`El resultado de la divición es: ${dividir}`)
}
else {
    alert(`Usted eligio una acción no existente`)
}