//Logical Opratior 
//
//Or opratior ||(symbol)
let password = 'r@567';



if(password.length>=12 || password.includes('43')){
	console.log('the password is mighte strong enough');
}
//and Oprators &&
else if (password.length >= 6 || password.length >3 && password.includes('@')){
	console.log('the passwor is strong');
}

let name = false;

logical NOT 
if (!name) {
	console.log('the name is not false');
}