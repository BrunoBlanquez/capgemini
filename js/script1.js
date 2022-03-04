const mediana = (...array) => {
  // Verifica se o valor passado como parâmetro é impar e maior que 1
  if (array.length % 2 != 0 && array.length > 1) {
    let resultado = array.sort((a,b) => {
    return a - b
    })
    return resultado[Math.round(array.length / 2) - 1]
  } else {
    alert("Insira uma sequência numérica impar")
  }
}