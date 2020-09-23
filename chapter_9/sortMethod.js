   const name = ['refat','tanvir','komol','jubair','ashik'];

//    name.sort();
//    name.reverse();
//    console.log(name);

   const score = [3,45,43,2,5,54];
   score.sort((a,b) => b - a );
   console.log(score);

const players = [
    {name: 'refat', score: 30},
    {name: 'tanvir', score: 50},
    {name: 'komo', score: 40},
    {name: 'jubair', score: 60},
    {name: 'partho', score: 70},
    {name: 'ashik', score: 330},

    

];

// players.sort((a,b) => {
// if(a.score > b.score) {
//     return -1;
// }
// else if (b.score > a.score){
//     return 1;
// }
// else{
//     return 0;
// }

// });

//this is a sort code for sort
// players.sort((a,b) =>  b.score - a.score);
// console.log(players);