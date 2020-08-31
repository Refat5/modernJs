const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href','https:://www.smarwetrack.cods');
link.innerText = 'this is a link';



const sms = document.querySelector('h6');

console.log(sms.getAttribute('class'));
sms.setAttribute('class','hi');
sms.setAttribute('style','color:red;')