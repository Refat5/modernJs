
//Breack and COntinue

const number = [30,49,43,54,34,53,44];

for (i = 0;i <= number.length; i++) {
	if (number[i] === 43) {
		//skip the value 
		continue;
	}
	
	console.log('your number is:' , number[i]);

	if (number[i] === 54) {
		console.log('the nuber yours');
		//loop is stop when get the value
		break;
	}
}