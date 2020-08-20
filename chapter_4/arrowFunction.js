//Arrow Function
// const twon = radius => 3 + radius +4;

// const area = twon(3);
// console.log('the twon area is:',area);



// const greet = () => 'Hi ther';
// const result = greet();
// console.log(result);


const bill = function (product,tax){
    let total = 0;
    for(let i = 0; i < product.length; i++){
        total += product[i] + product[i] * tax;
    }
    return total;
}
console.log(bill([20],0.1));