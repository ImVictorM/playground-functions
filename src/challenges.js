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
  newString = stringsArray[stringsArray.length - 1] + ', ' + stringsArray[0];
  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let sum = 0;
  for (let count = 1; count <= wins; count += 1) {
    sum += 3; // 3 pontos por vitoria
  }
  for (let count = 1; count <= ties; count += 1) {
    sum += 1; // 1 ponto por empate
  }
  return sum;
}

// Desafio 6
function highestCount(numbersArray) {
  let highestNumber = null;
  for(let number of numbersArray) {
    if (highestNumber === null) {
     highestNumber = number;
    } else if (number > highestNumber) {
      highestNumber = number;
    }
  }
  let repetitionCount = 0;
  for(let index = 0; index < numbersArray.length; index += 1) {
    if (highestNumber === numbersArray[index]) {
      repetitionCount += 1;
    }
  }
  return repetitionCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // Math.abs pega o valor absoluto
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  if (cat1Distance < cat2Distance) {
    return 'cat1';
  } else if (cat2Distance < cat1Distance){
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
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
