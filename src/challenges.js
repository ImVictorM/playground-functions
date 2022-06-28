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
  } else if (cat2Distance < cat1Distance) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
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

// Desafio 9
function encode(string) {
  let values = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let encodedMessage = '';
  for (let index = 0; index < string.length; index += 1) {
    for (let key in values) {
      if (string[index] === key) {
        encodedMessage += values[key];
        break;
      }
    }
    if (encodedMessage[index] === undefined) {
      encodedMessage += string[index];
    }
  }
  return encodedMessage;
}

function decode(string) {
  let values = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let decodedMessage = '';
  for (let index = 0; index < string.length; index += 1) {
    for (let key in values) {
      if (string[index] === key) {
        decodedMessage += values[key];
        break;
      }
    }
    if (decodedMessage[index] === undefined) {
      decodedMessage += string[index];
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
