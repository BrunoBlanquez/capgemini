// A mediana de uma lista de números é basicamente o elemento que se encontra no meio da lista após a ordenação. Dada uma lista de números com um número ímpar de elementos, desenvolva um algoritmo que encontre a mediana.
const arr = [9, 2, 1, 11, 14, 8, 3]

const mediana = (array) => {
  let resultado = array.sort((a,b) => {
  return a - b
})
  console.log(resultado)
  return resultado[Math.round(array.length / 2) - 1]
}