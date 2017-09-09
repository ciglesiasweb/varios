const msg = a => (console.log(a), a ) 

const regExp1 = /[a-zA-Z]*[^,]=/
msg(regExp1.test('FIdDlE7h='))


const regExp2 = /(very )+(fat )?(tall|ugly) man/
const res1 = regExp2.test('very very fat ugly man')
msg(res1)

const regExp3 = /(?:very )+(?:fat )?(?:tall|ugly) man/
const res2 = regExp3.test('very very fat ugly man')


let b