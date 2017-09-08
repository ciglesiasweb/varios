const msg = a => (console.log(a), a ) 
const regVagueCaracter = /1.3/
// msg(regVagueCaracter.test('1t3'))

const regDigitCaracter = /1\d3/
// msg(regDigitCaracter.test('1t3'))

const alphanumericCharacter = /1\w3/
// msg(alphanumericCharacter.test('1_3'))

const whiteSpace = /1\s3/
msg(whiteSpace.exec('1 3'))

//negaciones: con mayusculas \D \W 
const notNumber = /1\D3/
// msg(notNumber.test('153'))

const range = /1[abc]3/ // /1[a-c]3/
// msg(range.test('1a3'))

const range2 = /[A-Z][a-z][a-z]/
// msg(range2.test('Abc'))

const negatetRanged = /[^1-6]/
// msg(negatetRanged.test('8'))

const alternatedOps = /yes|no/
// msg(negatetRanged.exec('yeees hola noss no'))

