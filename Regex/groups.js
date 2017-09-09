const msg = a => (console.log(a), a)

/**
 * capture groups, 
 */

const namePattern = /(\S+) (\S*) ?\b(\S+)/
// const [ , name, middleName, lastName] = namePattern.exec('car igle gon')

const namePattern2 = /(\S+)(\s+)(\S*)(\s*)\b(\S+)/
// const [ , name2, , middleName2, , lastName2] = namePattern2.exec('car   igle')


/**
 * non capture group
 */

 const notCapture1 = /(?:world)*/
 const notCapture2 = /[(?:info|debug|error)] - .*/

 const a = notCapture2.exec('info - hola soyuh dddd')


/**
 * lookahead groups
 */

const lookAhead1 = /\w+(?=\.com)/g
const a2 = 'www.elmundo.com www.google.com'.match(lookAhead1)


/**
 * negative lookahead
 */

const text = "Mr. Smith & Mrs. Doe";
const a3 = text.match(/\w+(?!\.)\b/g);



