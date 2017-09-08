const msg = a => (console.log(a), a ) 
const ntimes = /\d{3}-\d{4}/
// msg(ntimes.exec('222-44447777'))

const minimum = /.{2,}/
// msg(minimum.exec('222-44447777'))

const nToM = /\d{4,7}/
// msg(nToM.exec('222-44447777'))


/**
 * nongreedy quantifiers
 */

 // ?
 const greedy = /\d{1,4}/
 msg(greedy.exec('124582948'))

 const notGreedy = /\d{1,4}?/
 msg(notGreedy.exec('124582948'))

 // *
 const htmlText = `<div class="container clase2 clase 3" id="main">
 Site content
 <div>`
 const classesTag = /class=".*?"/
