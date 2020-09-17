//map method 

// const price = [30,40,32,45,43,13];

// const salePrice = price.map(pric =>  pric / 2);
// console.log(salePrice);


const products = [
    {name: 'pent', price: 20},
    {name: 'shirt', price:40},
    {name: 'laptop', price:400},
    {name: 'mobile', price:440},
    {name: 'keyBord', price:40},
    
];
const saleProduct = products.map((product) => {
  
    if(product.price > 30){
         product.price = product.price / 2;
         return product;
    }
    else{
        return product;
    }
});

console.log(saleProduct, products);