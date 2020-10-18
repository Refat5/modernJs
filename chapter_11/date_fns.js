console.log('hello');
const   now = new Date();
console.log(dateFns.isToday(now));

//formating Options 

console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));

console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));

// comparing dates 

const before = new Date('February 2 2020 2:00:00');
 
// console.log(before);
console.log(dateFns.distanceInWords(now,before, {addSuffix:true}));