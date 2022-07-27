console.log('conectado a actividad 3')

let numeroHombres = parseInt(prompt('Ingrese la cantidad de hombres'))
let numeroMujeres = parseInt(prompt('Ingrese la cantidad de mujeres'))

const cantidadPersonas = numeroHombres + numeroMujeres

let porsentajeH = ((numeroHombres * 100) / cantidadPersonas)
let porsentajeM = ((numeroMujeres * 100) / cantidadPersonas)

alert(`El porcentaje de hombres es ${Math.round(porsentajeH)
}%, y el porcentaje de mujeres es ${Math.round(porsentajeM)}%`)

