//Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
//(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, 
//ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.


function QuadradoPerfeito(valor) {
  const raiz = Math.sqrt(valor);
  return raiz * raiz === valor;
}
function pertenceAFibonacci(numero) {
  return QuadradoPerfeito(5 * numero * numero + 4) || QuadradoPerfeito(5 * numero * numero - 4);
}
function verNumFibonacci(numero) {
  if (pertenceAFibonacci(numero)) {
      console.log(`${numero} pertence à sequência de Fibonacci.`);
  } else {
      console.log(`${numero} não pertence à sequência de Fibonacci.`);
  }
}

const numeroEntrada = 13; 
verNumFibonacci(numeroEntrada);
