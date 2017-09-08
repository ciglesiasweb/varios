// +: This matches one or more occurrences
//  ?: This matches zero or one occurrence
//  *: This matches zero or more occurrences

const msg = a => (console.log(a), a ) 
const onOreMore = /[A-Z][a-z]+/
// msg(onOreMore.test('Azzzzzzzzeeeezz111'))

const ZeroOrOne = /apples?/ //apple o apples
// msg(ZeroOrOne.test('aplesss'))

const ZeroOrMore = /update!*/ 
msg(ZeroOrMore.exec('update!!!!!!!'))