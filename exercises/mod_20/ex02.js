//Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.

function maiorMenorIndice() {
  var array = [21,6,97,20,21,31,23,11,82,78,64,10,96,43,25,3,74,59,12,68],
    iMaior = 0,
    iMenor = 0,
    i = 0;

  for (i = 0; i < array.length; i++) {
    if (array[i] > array[iMaior]) {
      iMaior = i;
    }
    if (array[i] < array[iMenor]) {
      iMenor = i;
    }
  }

  console.log(iMaior, iMenor);
}
