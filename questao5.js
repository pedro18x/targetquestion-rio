//Escreva um programa que inverta os caracteres de um string.
//a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
//b) Evite usar funções prontas, como, por exemplo, reverse;

function inveterString(str) {
  let stringInvertida = "";

  for (let i = str.length -1; i >= 0; i--) {
    stringInvertida += str[i]; 
  }

  return stringInvertida
}

const stringOriginal = "durge";

const stringInvertida = inveterString(stringOriginal);

console.log("String original:", stringOriginal)
console.log("String invertida:", stringInvertida)
