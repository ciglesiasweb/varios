const msg = a => (console.log(a), a ) 
const namePattern = /(\S+) (\S*) ?\b(\S+)/
const [ , name, middleName, lastName] = namePattern.exec('car igle gon')



const namePattern2 = /(\S+)(\s+)(\S*)(\s*)\b(\S+)/
const [ , name2, , middleName2, , lastName2] = namePattern2.exec('car   igle')
debugger;
