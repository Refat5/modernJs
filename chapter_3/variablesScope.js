// variablesScopejs

let year = 2019;//this is a global variable

if (true) {
	let year = 2020;//local variable
	const month = 'may';
	console.log('this year is',year,month,name);

	if (true) {
		let name = 'refat';
		console.log('my name is ',name,year);
	}
}

console.log('this year is',year);