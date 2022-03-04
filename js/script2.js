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