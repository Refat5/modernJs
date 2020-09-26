 const products = [
     {name:'the football', price: 30},
     {name:'the cricateBall', price: 50},
     {name:'the table', price: 10},
     {name:'the whatarBotol', price: 50},
     {name:'the cake', price: 70},
  
 ];

 const filtered = products.filter( product => product.price > 20);

 const promos = filtered.map(product => {
     return `the ${product.name} is ${product.price / 2} taka`;

 });

 console.log(promos);