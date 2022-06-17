const texto = 'teste';
const textoInvertido = [];

for (let index = texto.length - 1; index >= 0; index--) {
  textoInvertido.push(texto[index]);
}

textoInvertido.forEach(letra => {
  console.log(letra);
});