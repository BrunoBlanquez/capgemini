const mediana = (...array) => {
  if (array.length % 2 != 0) {
    let resultado = array.sort((a,b) => {
    return a - b
    })
    return resultado[Math.round(array.length / 2) - 1]
  } else {
    alert("Insira uma sequência numérica impar")
  }
}