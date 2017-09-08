const msg = a => (console.log(a), a ) 
const ntimes = /\d{3}-\d{4}/
// msg(ntimes.exec('222-44447777'))

const minimum = /.{2,}/
// msg(minimum.exec('222-44447777'))

const nToM = /\d{4,7}/
msg(nToM.exec('222-44447777'))