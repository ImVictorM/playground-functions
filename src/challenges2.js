// Desafio 11
function generatePhoneNumber(numbersArray) {
  if (numbersArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < numbersArray.length; index += 1) { // validação
    if (numbersArray[index] < 0 || numbersArray[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  let count = {}; // contagem de cada numero
  numbersArray.forEach((element) => {
    count[element] = (count[element] || 0) + 1;
  });
  for (let key in count) { // validação
    if (count[key] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  // caso o array esteja de acordo
  let phoneNumber = '';
  for (let index = 0; phoneNumber.length < 15; index += 1) {
    if (index === 0) {
      phoneNumber += '(';
    } else if (index === 2) {
      phoneNumber += ') ';
    } else if (index === 7) {
      phoneNumber += '-';
    }
    phoneNumber += numbersArray[index];
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB)) {
    return false;
  }
  if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  /* [COLINHA]
    \d+ -> procura por um digito ou mais
    flag g : Perform a global match (find all matches rather than stopping after the first match);
    match() -> faz uma busca pelo parâmetro
   */

  let digitFinder = /\d+/g;
  let digitsArray = string.match(digitFinder);
  let sum = 0;
  for (let digit of digitsArray) {
    sum += Number(digit);
  }
  let finalMessage = '';
  if (sum > 1) {
    finalMessage += sum;
    finalMessage += ' copos de água';
  } else {
    finalMessage += sum;
    finalMessage += ' copo de água';
  }

  return finalMessage;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
