// A mediana de uma lista de números é basicamente o elemento que se encontra no meio da lista após a ordenação. Dada uma lista de números com um número ímpar de elementos, desenvolva um algoritmo que encontre a mediana.
const mediana = (...array) => {
  if (array.length % 2 != 0) {
    let resultado = array.sort((a,b) => {
    return a - b
    })
    return resultado[Math.round(array.length / 2) - 1]
  } 
  else {
    alert("Insira uma sequência numérica impar")
  }
}