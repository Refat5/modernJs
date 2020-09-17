//reduce method 

// const amounts = [10,30,32,15,59,40,50];

// const totalMoney = amounts.reduce((acc,curre) => {
//     if(curre > 30){
//         acc++;
//     }
//     return acc;
// },0);
// console.log(totalMoney);


const scores = [
    {player: 'refat', salary:30000},
    {player: 'tanvir', salary:40000},
    {player: 'ashik', salary:200000},
    {player: 'komol', salary:40000},
    {player: 'jubair', salary:305000},
    {player: 'shawon', salary:30400},
    {player: 'jahid', salary:59900},
    {player: 'refat', salary:30000},

    {player: 'refat', salary:30000},
    {player: 'tanvir', salary:40000},
    {player: 'ashik', salary:200000},
    {player: 'komol', salary:40000},
    {player: 'jubair', salary:305000},
    {player: 'shawon', salary:30400},
    {player: 'jahid', salary:59900},
    {player: 'refat', salary:30000},
    {player: 'refat', salary:30000},
    {player: 'tanvir', salary:40000},
    {player: 'ashik', salary:200000},
    {player: 'komol', salary:40000},
    {player: 'jubair', salary:305000},
    {player: 'shawon', salary:30400},
    {player: 'jahid', salary:59900},
    {player: 'refat', salary:30000},


];
const refatTotalsalary = scores.reduce((acc,curren) => {
    if(curren.player === 'komol'){
        acc += curren.salary;
    }
    return acc;
},0);
console.log(refatTotalsalary);