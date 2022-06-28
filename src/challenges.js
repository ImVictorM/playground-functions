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
  let newString = [];
  newString.push(stringsArray[stringsArray.length - 1], stringsArray[0]);
  newString = newString.join(', ');
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
  let highestNumber = Math.max(...numbersArray);
  let repetitionCount = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
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
  }
  if (cat2Distance < cat1Distance) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbersArray) {
  let stringsArray = [];
  for (let number of numbersArray) {
    if (number % 3 === 0 && number % 5 === 0) {
      stringsArray.push('fizzBuzz');
    } else if (number % 3 === 0) {
      stringsArray.push('fizz');
    } else if (number % 5 === 0) {
      stringsArray.push('buzz');
    } else {
      stringsArray.push('bug!');
    }
  }
  return stringsArray;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  let encodedMessage = '';
  for (let char of string) {
    switch (char) {
    case 'a':
      encodedMessage += 1;
      break;
    case 'e':
      encodedMessage += 2;
      break;
    case 'i':
      encodedMessage += 3;
      break;
    case 'o':
      encodedMessage += 4;
      break;
    case 'u':
      encodedMessage += 5;
      break;
    default:
      encodedMessage += char;
      break;
    }
  }
  return encodedMessage;
}

function decode(string) {
  let decodedMessage = '';
  for (let char of string) {
    switch (char) {
    case '1':
      decodedMessage += 'a';
      break;
    case '2':
      decodedMessage += 'e';
      break;
    case '3':
      decodedMessage += 'i';
      break;
    case '4':
      decodedMessage += 'o';
      break;
    case '5':
      decodedMessage += 'u';
      break;
    default:
      decodedMessage += char;
      break;
    }
  }
  return decodedMessage;
}

// Desafio 10
function techList(array, nome) {
  // validação
  if (array.length === 0) {
    return 'Vazio!';
  }

  // ordenação do array

  array = array.sort();
  let objectArray = [];
  for (let index = 0; index < array.length; index += 1) {
    objectArray.push({
      tech: array[index],
      name: nome,
    })
  }
  return objectArray;
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
