//timestamps 

const before = new Date('Februray 1 2019 7:30:40');


const now = new Date();

// console.log(now.getTime() before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
console.log(mins);
const hours = Math.round(mins / 60);
console.log(hours);
const days = Math.round(hours / 24);
console.log(mins,hours,days);

console.log(`the blog was written ${days} ago`);

//converting timestamps into date objects 

const timestamp = 1365432513654;
console.log(new Date(timestamp));