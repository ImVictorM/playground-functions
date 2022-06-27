// Desafio 1
function compareTrue(firstValue, secondValue) {
  if (firstValue === true && secondValue === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  string = string.split(' '); // Divide em espaços
  return string;
}

// Desafio 4
function concatName(stringsArray) {
  let newString = '';
  newString = stringsArray[stringsArray.length - 1] + ", " +stringsArray[0];
  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let sum = 0;
  for (let count = 1; count <= wins; count += 1) {
    sum += 3; // 3 pontos por vitoria
  }
  for(let count = 1; count <= ties; count += 1) {
    sum += 1; // 1 ponto por empate
  }
  return sum;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
