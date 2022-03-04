const criptografa = (texto) => {
  // Aqui definimos a quantidade de colunas
  let alterado = texto.replaceAll(" ","").split("")
  let x = Math.ceil(Math.sqrt(alterado.length))

  // Pego o texto e transformo em uma array bidimensional
  let resultado = []
  let resultadoFinal = []

  for (let i = 0; i < x; i++) {
    resultado[i] = {}
    for (let j = 0; j < x; j++) {
      resultado[i][j] = alterado[i * x + j]
    }
  }

  // Pego a array de resultado e crio uma string codificada
  for (let index = 0; index < resultado.length; index++) {
    for (let indexJ = 0; indexJ < resultado.length; indexJ++) {
      resultadoFinal.push(resultado[indexJ][index])
    }
    resultadoFinal.push(" ")
  }

return resultadoFinal.toString().replaceAll(",","")

}