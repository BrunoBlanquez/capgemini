const diferencaDeX = (x, ...array) => {
  // Retorna valores com diferença de X
  let arrFinal = []
  let cont = 0
  let arrayInput = array

  while(cont < arrayInput.length) {
    for (let i of arrayInput) {
      if ((array[i] - arrayInput[cont]) === x) {
        let arr = []
        let numer1 = Number (arrayInput[cont])
        let numer2 = Number (array[i])
        arr.push(numer1, numer2)
        arrFinal.push(arr)
      }
    }
  cont++
  }

  // Retorna o tamanho da array
    // Teremos uma array de arrays. Cada array interna vai ter um par
    // O valor retornado é a quantidade de array de pares
  return  arrFinal.length
}