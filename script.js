// # Questão 01
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

// #Questão 02
//  Dado um vetor de inteiros "n" e um inteiro qualquer "x". Construa um algoritmo que determine o número de elementos pares do vetor que tem uma diferença igual ao valor de x.
const diferencaDeX = (x, ...array) => {
// Executar apenas se X e se array.lenght forem PAR
if (x % 2 == 0 && array.length % 2 == 0) {

  // Retorna valores com diferença de X
  let arrFinal = []
  let cont = 0
  let arrayInput = array

  while(cont < arrayInput.length) {
    for (let i of arrayInput) {
      if ((array[i] - arrayInput[cont]) === x) {
        let numer1 = Number (arrayInput[cont])
        let numer2 = Number (array[i])
        arrFinal.push(numer1, numer2)
      }
    }
  cont++
  }

  // Verificar se os números são pares
  let numPares = []
  for (const num of arrFinal) {
    if (num % 2 == 0) {
      numPares.push(num)
    }
  }

  // Remove os repetidos e coloca em ordem númerica
  return [...new Set(numPares)].sort((a,b) => {return a - b})
  } else {
    alert("Informe parâmetros válidos")
  }
}