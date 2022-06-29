function validacaoNumero(numbersArray) {
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] < 0 || numbersArray[index] > 9) {
      return false;
    }
  }
  return true;
}
function validacaoRepeticao(numbersArray) {
  let countObj = {};
  numbersArray.forEach((element) => {
    countObj[element] = (countObj[element] || 0) + 1;
  });
  for (let key in countObj) {
    if (countObj[key] >= 3) {
      return false;
    }
  }
  return true;
}

function validacaoTamanho(numbersArray) {
  if (numbersArray.length !== 11) {
    return false;
  }
  return true;
}
function validacaoGeral(numbersArray) {
  if (!validacaoTamanho(numbersArray)) {
    return 'Array com tamanho incorreto.';
  }
  if (!validacaoNumero(numbersArray) || !validacaoRepeticao(numbersArray)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return true;
}
// Desafio 11
function generatePhoneNumber(numbersArray) {
  let validacao = validacaoGeral(numbersArray);
  if (validacao !== true) {
    return validacao;
  }

  let toString = numbersArray.join('');
  let grupo = toString.match(/(\d{2})(\d{5})(\d{4})/);
  let phoneNumber = `(${grupo[1]}) ${grupo[2]}-${grupo[3]}`;
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
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
