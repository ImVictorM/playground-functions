// Desafio 11
function generatePhoneNumber(numbersArray) {
  if (numbersArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  
  for (let index = 0; index < numbersArray.length; index += 1) {
    // validações
    if (numbersArray[index] < 0 || numbersArray[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
    let numberCount = 0;
    for (let number of numbersArray) {
      if (number === numbersArray[index]) {
        numberCount += 1;
      }
    }
    if (numberCount >= 3) {
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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
